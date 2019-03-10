const reducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)
    let filter = state
    switch (action.type) {
    case 'SET_FILTER':
        filter = action.data
        break
    }
    return filter
}

export const createFilter = (content) => {
    return {
        type: 'SET_FILTER',
        data: content
    }
}

export default reducer
