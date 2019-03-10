import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote_content.value
        props.store.dispatch(
            createAnecdote(anecdote)
        )
        notify({
            message: `Anecdote added: ${anecdote}`,
            ...props
        })
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

const mapStateToProps = (state) => {
    return {
        notification: state.notification,
        anecdote: state.notes,
        filter: state.filter
    }
}

const ConnectedAnecdoteForm = connect(mapStateToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
