import React, { useState } from 'react'
import  { useField } from '../hooks/index.js'

const CreateBlogFrom = ({ handleCreateBlog }) => {
    const [visible, setVisible] = useState(false)

    const title = useField('text')
    const author = useField('text')
    const url = useField('text')

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const handleCreateBlogSubmit = async (event) => {
        event.preventDefault()
        handleCreateBlog({
            title: title.value,
            author: author.value,
            url: url.value
        })

        title.reset
        author.reset
        url.reset
    }

    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={() => setVisible(true)}>Create a new blog</button>
            </div>
            <div style={showWhenVisible}>
                <h2>Create a new blog</h2>
                <form onSubmit={handleCreateBlogSubmit}>
                    <div>
                        Title
                        <input {...title } />
                    </div>
                    <div>
                        Author
                        <input {...author}/>
                    </div>
                    <div>
                        URL
                        <input {...url}/>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
            <div style={showWhenVisible}>
                <button onClick={() => setVisible(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateBlogFrom
