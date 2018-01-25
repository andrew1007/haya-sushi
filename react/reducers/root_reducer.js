import { combineReducers } from 'redux'
import SectionReducer from './section_reducer'
import OptionReducer from './option_reducer'

const DummyReducer = (state = {}, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const RootReducer = combineReducers({
  menu: SectionReducer,
  option: OptionReducer
})

export default RootReducer
