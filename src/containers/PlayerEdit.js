import { connect } from 'react-redux'
import { EditPlayer } from '../actions'
import PlayerEdit from '../components/PlayerEdit'

const mapStateToProps = state => ({
  players: state.players
})

const mapDispatchToProps = dispatch => ({
  EditPlayer: (id, firstname, lastname) => dispatch(EditPlayer(id, firstname, lastname))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerEdit)