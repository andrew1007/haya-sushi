import { combineReducers } from 'redux'
import SectionReducer from './section_reducer'
import OptionReducer from './option_reducer'
import CartReducer from './cart_reducer'

const RootReducer = combineReducers({
  menu: SectionReducer,
  option: OptionReducer,
  cart: CartReducer
})

export default RootReducer
