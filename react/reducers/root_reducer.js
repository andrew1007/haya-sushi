import { combineReducers } from 'redux'
import SectionReducer from './section_reducer'

const DummyReducer = (state = {}, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const RootReducer = combineReducers({
  menu: SectionReducer
})

export default RootReducer
