import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        props.store.dispatch(
            createAnecdote(event.target.anecdote_content.value)
        )
        event.target.anecdote_content.value = ''
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote_content' /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm
