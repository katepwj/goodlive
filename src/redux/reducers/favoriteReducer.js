

const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "FAVORITE":
      return [...state, action.item];
    case "UNFAVORITE":
      let newFavorite = state.filter(item => item.id !== action.id)
      return newFavorite;
    case "CLEARFAVORITE":
      return [];
    default:
      return state;
  }
}

export default favoriteReducer
