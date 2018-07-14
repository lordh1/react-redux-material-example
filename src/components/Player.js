import React from 'react'
import PropTypes from 'prop-types'
import PlayerEdit from '../containers/PlayerEdit'
import PlayerRemove from '../containers/PlayerRemove'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import '../css/App.css'

class Player extends React.PureComponent {

  render() {
    const { id, firstname, lastname } = this.props

    return (
      <ListItem button>
        <ListItemText><span className="PlayerNumber">{id}</span> {firstname} {lastname}</ListItemText>
        <ListItemSecondaryAction>
          <PlayerEdit id={id} firstname={firstname} lastname={lastname} />
          <PlayerRemove playerId={id} />
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

Player.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
}

export default Player
