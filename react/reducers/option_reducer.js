import GET_OPTIONS from '../actions/option_actions'

const defaultState = {
  section: {},
  subsection: {}
}

const OptionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'GET_OPTIONS':
      const option = action.option
      return {...option}
    default:
      return state
  }
}

export default OptionReducer
