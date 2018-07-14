import { connect } from 'react-redux'
import { RemovePlayer } from '../actions'
import PlayerRemove from '../components/PlayerRemove'

const mapStateToProps = state => ({
  players: state.players
})

const mapDispatchToProps = dispatch => ({
  RemovePlayer: (id) => dispatch(RemovePlayer(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerRemove)