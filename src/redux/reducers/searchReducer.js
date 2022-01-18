const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH":
      return { search: action.search };
    default:
      return state;
  }

}


export default searchReducer
