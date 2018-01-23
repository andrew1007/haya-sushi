export const GET_SECTIONS = 'GET_SECTIONS'

export const getSections = _ => dispatch => {
  return SectionsRequest().then(menu => {
    return dispatch(receiveSections(menu))
  })
}

const SectionsRequest = _ => {
  return $.ajax({
    method: 'GET',
    url: '/api/section'
  })
}

const receiveSections = sections => {
  return {
    type: GET_SECTIONS,
    ...sections
  }
}
