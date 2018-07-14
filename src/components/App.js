import React from 'react'
import PlayerAdd from '../containers/PlayerAdd'
import PlayerList from '../containers/PlayerList'
import Grid from '@material-ui/core/Grid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/App.css'



const App = () => (
  <div className="Main">
    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
      <PlayerAdd />
      <PlayerList />
      <ToastContainer />
    </Grid>
  </div>
)

export default App
