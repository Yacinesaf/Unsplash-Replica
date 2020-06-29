import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Grid, InputBase, IconButton, Button, Divider, ClickAwayListener, Tabs, Tab } from '@material-ui/core'
import logo from '../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputClicked: false,
      tabValue: 0,
      tabLabels: [
        'Sustainability',
        'Current events',
        'Japan',
        'Travel',
        'Nature',
        'Wallpapers',
        'Textures & Patters',
        'People',
        'Business & Work',
        'Technology',
        'Animals',
        'Interiors',
        'Architecture',
        'Food & Drink',
        'Athletics',
        'Spirituality',
        'Health & Wellness',
      ],
    }
  }

  clickedAway = () => {
    this.setState({ inputClicked: false })
  }

  setNewTabValue = (event, newValue) => {
    this.setState({ tabValue: newValue })
  }

  render() {
    return (
      <div>
        <AppBar elevation={0} position="static" style={{ backgroundColor: 'white', padding: 10, paddingBottom: 0, boxShadow: '0 2px 6px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.13)' }}>
          <Toolbar>
            <Grid container >
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', paddingBottom: 20 }} >
                <img src={logo} alt={logo} height={40} width={40} style={{ cursor: 'pointer' }} />
                <div style={{ paddingLeft: 15, cursor: 'pointer' }}>
                  <Typography variant='h6' style={{ color: 'black', fontWeight: 600, lineHeight: 'unset' }}>
                    Unsplash
                  </Typography>
                  <Typography style={{ color: 'black', lineHeight: 'unset' }}>
                    Photos for everyone
                </Typography>
                </div>
                <ClickAwayListener onClickAway={this.clickedAway}>
                  <div style={{
                    flexGrow: 1,
                    border: this.state.inputClicked ? '1px solid gray' : 'none',
                    transition: '0.2s ease-in-out',
                    backgroundColor: this.state.inputClicked ? 'white' : 'rgba(195, 195, 195,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 30,
                    padding: 10,
                    marginLeft: 25,
                    marginRight: 40,
                    fontSize: '18px'
                  }}>
                    <SearchIcon style={{ color: 'gray', padding: '0px 10px' }} />
                    <InputBase
                      onClick={() => this.setState({ inputClicked: true })}
                      style={{ width: '100%', padding: '0px !important' }}
                      inputProps={{ placeholder: 'Search free high-resolution photos', type: 'text' }}
                    />
                  </div>
                </ClickAwayListener>
                <div style={{ borderRight: '1px solid black', display: 'flex', alignItems: 'center', paddingRight: 30, marginRight: 30 }}>
                  <Typography style={{ color: 'black', padding: '0px 10px', cursor: 'pointer' }}>Topics</Typography>
                  <Typography style={{ color: 'black', padding: '0px 10px', cursor: 'pointer' }}>Explore</Typography>
                  <MoreHorizIcon fontSize='large' style={{ paddingLeft: '10px', paddingRight: 20, color: 'black', cursor: 'pointer' }} />
                  <Button variant='outlined' style={{ textTransform: 'none' }}>Submit a photo</Button>
                </div>
                <Typography style={{ color: 'black', paddingRight: 30, cursor: 'pointer' }}>Login</Typography>
                <Button variant='contained' style={{ textTransform: 'none', color: 'white', backgroundColor: '#3cb46e' }}>Join free</Button>
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ borderRight: '1px solid gray' }}>
                  <Typography variant='h6' style={{ color: 'black', paddingRight : 34 }}>Editorial</Typography>
                </div>
                <Tabs scrollButtons='on' variant='scrollable' TabIndicatorProps={{ style: { background: 'black' } }} value={this.state.tabValue} onChange={this.setNewTabValue}>
                  {this.state.tabLabels.map((x, i) => (
                    <Tab key={i} label={x} style={{ color: 'black' }} />
                  ))}
                </Tabs>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div >
    );
  }
}
export default Navbar;