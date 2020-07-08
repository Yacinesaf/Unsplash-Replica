import React from 'react';
import Navbar from './components/Navbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import PictureDisplay from './components/PictureDisplay';
import { useHistory, useLocation } from 'react-router'
import { Route } from 'react-router-dom';
import PhotoMobilePage from './components/PhotoMobilePage';

function App() {
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <div>
      <Navbar smDown={smDown} location={location} />
      <Route exact path='/' render={(props) => <PictureDisplay {...props} smDown={smDown} />} />
      <Route exact path='/photos/:id' render={(props) => <PhotoMobilePage {...props} smDown={smDown} location={location} />} />
    </div>
  );
}

export default App;
