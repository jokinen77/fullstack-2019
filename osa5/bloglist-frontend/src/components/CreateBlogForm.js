import React, { useState } from 'react'

const CreateBlogFrom = ({ handleCreateBlog }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const handleCreateBlogSubmit = async (event) => {
        event.preventDefault()

        handleCreateBlog({ title, author, url })

        setTitle('')
        setAuthor('')
        setUrl('')
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
                        <input
                            type="text"
                            value={title}
                            name="Title"
                            onChange={({ target }) => setTitle(target.value)}
                        />
                    </div>
                    <div>
                        Author
                        <input
                            type="text"
                            value={author}
                            name="Author"
                            onChange={({ target }) => setAuthor(target.value)}
                        />
                    </div>
                    <div>
                        URL
                        <input
                            type="text"
                            value={url}
                            name="URL"
                            onChange={({ target }) => setUrl(target.value)}
                        />
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
