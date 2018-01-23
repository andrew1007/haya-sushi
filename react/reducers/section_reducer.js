import GET_SECTIONS from '../actions/section_actions'

const defaultState = {}

const SectionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'GET_SECTIONS':
      return {state, ...action.sections}
    default:
      return state
  }
}

export default SectionReducer
