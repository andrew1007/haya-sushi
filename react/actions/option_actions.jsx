export const GET_OPTIONS = 'GET_OPTIONS'

export const getOptions = _ => dispatch => {
  return OptionsRequest().then(option => {
    console.log(option);
    console.log('yes');
    return dispatch(receiveOptions(option))
  })
}

const OptionsRequest = _ => {
  return $.ajax({
    method: 'GET',
    url: '/api/option'
  })
}

const receiveOptions = option => {
  console.log(option);
  return {
    type: GET_OPTIONS,
    ...option
  }
}
