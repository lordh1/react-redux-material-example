import { connect } from 'react-redux'
import { AddPlayer } from '../actions'
import PlayerAdd from '../components/PlayerAdd'

const mapStateToProps = state => ({
  players: state.players
})

const mapDispatchToProps = dispatch => ({
  AddPlayer: (firstname, lastname) => dispatch(AddPlayer(firstname, lastname))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerAdd)