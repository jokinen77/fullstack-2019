import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
//import { notify } from '../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
    const anecdotes = props.anecdote
    const filter = props.filter

    const vote = (id) => {
        console.log('vote', id)
        props.store.dispatch(voteAnecdote(id))
        props.notify({
            message: `Anecdote voted: ${anecdotes.find((elem) => elem.id === id).content}`,
            ...props
        })
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter store={props.store} />
            {anecdotes.filter(elem => elem.content.includes(filter)).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
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

const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList)
export default ConnectedAnecdotes
