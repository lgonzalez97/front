const initialState = {albums:[],login:false}
export const globalReducerName = "Global"

const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_ALBUMS":
    return { ...state, albums:payload }
    case "LOGIN":
      return { ...state, login:payload }
  default:
    return state
  }
}

export {globalReducer}