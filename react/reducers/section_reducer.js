import GET_SECTIONS from '../actions/section_actions'

const defaultState = {}

const SectionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  console.log(action.sections);
  switch(action.type) {
    case 'GET_SECTIONS':
      return action.sections
    default:
      return state
  }
}

export default SectionReducer
