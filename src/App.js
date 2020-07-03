import React from 'react';
import Navbar from './components/Navbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import PictureDisplay from './components/PictureDisplay';


function App() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Navbar smDown={smDown} />
      <Header smDown={smDown} />
      <PictureDisplay />
    </div>
  );
}

export default App;
