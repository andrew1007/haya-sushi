import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../reducers/root_reducer'

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
}

const store = configureStore()

export default store
