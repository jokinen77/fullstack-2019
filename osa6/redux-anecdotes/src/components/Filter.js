import React from 'react'
import { createFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
    const handleChange = (event) => {
        props.store.dispatch(createFilter(event.target.value))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
      filter <input onChange={handleChange} name='filter' />
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

const ConnectedFilter = connect(mapStateToProps)(Filter)
export default ConnectedFilter
