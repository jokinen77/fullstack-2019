const initialState = 'Hello notification!'

const reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    let notification = state
    switch (action.type) {
    case 'NEW_NOTIFICATION':
        notification = action.data
        break
    }
    return notification
}

export const createNotification = (content) => {
    return {
        type: 'NEW_NOTIFICATION',
        data: content
    }
}

export const notify = (props) => {
    console.log('message', props.message)
    props.store.dispatch(createNotification(props.message))
    setTimeout(() => props.store.dispatch(createNotification(null)), 5000)
}

export default reducer
