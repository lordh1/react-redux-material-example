import initialPlayers from "../data/data"

const players = (state = initialPlayers, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          id: state.reduce((maxId, player) => Math.max(player.id, maxId), -1) + 1,
          firstname: action.firstname,
          lastname: action.lastname,
        }
      ]
    case 'EDIT_PLAYER':
      return state.map(player =>
        player.id === action.id ?
          { ...player, firstname: action.firstname, lastname: action.lastname } :
          player
      )
    case 'REMOVE_PLAYER':
      return state.filter(player =>
        player.id !== action.id
      )
    default:
      return state
  }
}

export default players
