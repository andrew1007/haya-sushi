import GET_OPTIONS from '../actions/option_actions'

const defaultState = {
  section: {},
  subsection: {}
}

const OptionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'GET_OPTIONS':
      const { section, subsection } = action.option
      return {section, subsection}
    default:
      return state
  }
}

export default OptionReducer
