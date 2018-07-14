import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'
import List from '@material-ui/core/List';
import '../css/App.css'

class PlayerList extends React.PureComponent {
  render() {
    const { players } = this.props

    return (
    <List>
        {players.map(player =>
          <Player
            key={player.id}
            {...player}
          />
        )}
      </List>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default PlayerList
