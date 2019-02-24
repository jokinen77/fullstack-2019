import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import CreateBlogForm from './components/CreateBlogForm'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [notification, setNotification] = useState({
        message: null
    })
    const [user, setUser] = useState(null)

    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs( blogs )
        )
    }, [])


    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const handleLogin = async ({ username, password }) => {
        try {
            const user = await loginService.login({
                username, password,
            })

            console.log('User: ', user)

            window.localStorage.setItem(
                'loggedBlogAppUser', JSON.stringify(user)
            )

            setUser(user)
        } catch (exception) {
            handleError('käyttäjätunnus tai salasana virheellinen')
        }
    }

    const handleLogout = async () => {
        try {
            window.localStorage.clear()
            setUser(null)
        } catch (exception) {
            handleError('uloskirjautumisessa tapahtui virhe')
        }
    }

    const handleCreateBlog = async ({ title, author, url }) => {
        try {
            const blog = await blogService.create({ title, author, url })
            console.log('added blog:', blog)
            setBlogs(blogs.concat(blog))
        } catch (exception) {
            handleError('käyttäjätunnus tai salasana virheellinen')
        }
    }

    const handleError = (message) => notify(message, 'error')

    const notify = (message, type='info') => {
        setNotification({ message, type })
        setTimeout(() => setNotification({ message: null }), 10000)
    }

    if (user === null) {
        return (
            <div>
                <Notification notification={notification} />
                <LoginForm handleLogin={handleLogin} />
            </div>
        )

    }

    return (
        <div>
            <Notification notification={notification} />
            <button onClick={handleLogout}>logout</button>
            <CreateBlogForm handleCreateBlog={handleCreateBlog} />
            <BlogForm blogs={blogs} />
        </div>
    )
}

export default App
