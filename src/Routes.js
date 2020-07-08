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
  const [photoInfo, setPhotoInfo] = React.useState({})
  
  const setZoomedPhoto = (obj) => {
    setPhotoInfo(obj)
  }

  return (
    <div>
      <Navbar smDown={smDown} />
      <Route exact path='/' render={(props) => <PictureDisplay {...props} smDown={smDown} setZoomedPhoto={setZoomedPhoto} />} />
      <Route exact path='/:id' render={(props) => <PhotoMobilePage {...props} smDown={smDown} photoInfo={photoInfo} />} />
    </div>
  );
}

export default App;
