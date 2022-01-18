
const cityReducer = (state = { cityName: "成都" }, action) => {
  switch (action.type) {
    case "INIT_CITY":
      return { cityName: action.cityName }
    case "CHANGE_CITY":
      return { cityName: action.cityName }
    default:
      return state
  }
}




export default cityReducer