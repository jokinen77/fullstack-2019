import React from 'react'

const Notification = (props) => {
    const notification = props.store.getState().notification

    const style = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (!notification) {
        return (
            <></>
        )
    }

    return (
        <div style={style}>
            {notification}
        </div>
    )
}

export default Notification
