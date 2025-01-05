export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}


export const reducerCart = (state, action) => {

    const {type: actionType, payload: actionPayLoad} = action

    switch (actionType) {

        case 'ADD_TO_CART':{
            const { id } = actionPayLoad
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0){
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                updateLocalStorage(newState)
                return newState
            }
            

            const newState = [
                ...state,
                {
                    ...actionPayLoad,
                    quantity:1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }

        case 'REMOVE_FROM_CART': {
            const {id} = actionPayLoad
            const newState = state.filter(item => item.id != id)
            updateLocalStorage(newState)
            return newState
        }

        case 'CLEAR_CART' : {
            updateLocalStorage(cartInitialState)
            return cartInitialState
        }
    }

    return state
}