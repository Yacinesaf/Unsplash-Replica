import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Grid, InputBase, Button, ClickAwayListener, Tabs, Tab, Menu, MenuItem, Divider, IconButton } from '@material-ui/core'
import logo from '../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import medium from '../assets/medium.png'
import MenuIcon from '@material-ui/icons/Menu';


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
      menuItems: [
        'About',
        'Wallpapers',
        'Blog',
        'Collections',
        'Community',
        'History',
        'Made with unsplash',
        'API/Developers',
      ],
      anchorEl: null,
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
          <Toolbar style={{ padding: this.props.smDown ? 0 : '0px 24px' }}>
            <Grid container >
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', paddingBottom: 20 }} >
                <img src={logo} alt={logo} height={30} width={30} style={{ cursor: 'pointer' }} />
                {this.props.smDown ? null :
                  <div style={{ paddingLeft: 15, cursor: 'pointer' }}>
                    <Typography variant='body1' style={{ color: 'black', fontWeight: 600, lineHeight: 'unset' }}>
                      Unsplash
                    </Typography>
                    <Typography variant='subtitle1' style={{ color: 'black', lineHeight: 'unset' }}>
                      Photos for everyone
                    </Typography>
                  </div>
                }

                <ClickAwayListener onClickAway={this.clickedAway}>
                  <div style={{
                    flexGrow: 1,
                    border: this.state.inputClicked ? '1px solid gray' : '1px solid transparent',
                    transition: '0.2s ease-in-out',
                    backgroundColor: this.state.inputClicked ? 'white' : 'rgba(195, 195, 195,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 30,
                    padding: 5,
                    marginLeft: 25,
                    marginRight: this.props.smDown ? 20 : 40,
                  }}>
                    <SearchIcon style={{ color: 'gray', padding: '0px 10px' }} />
                    <InputBase
                      onClick={() => this.setState({ inputClicked: true })}
                      style={{ width: '100%', padding: '0px !important' }}
                      inputProps={{ placeholder: this.props.smDown ? 'Search photos' : 'Search free high-resolution photos', type: 'text' }}
                    />
                  </div>
                </ClickAwayListener>
                {this.props.smDown ?
                  <IconButton onClick={(e) => this.setState({ anchorEl: e.currentTarget })}>
                    <MenuIcon />
                  </IconButton>
                  :
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ borderRight: '1px solid black', display: 'flex', alignItems: 'center', paddingRight: 30, marginRight: 30 }}>
                      <Typography style={{ color: 'black', padding: '0px 10px', cursor: 'pointer' }}>Topics</Typography>
                      <Typography style={{ color: 'black', padding: '0px 10px', cursor: 'pointer' }}>Explore</Typography>
                      <MoreHorizIcon onClick={(e) => this.setState({ anchorEl: e.currentTarget })} fontSize='large' style={{ paddingLeft: '10px', paddingRight: 20, color: 'black', cursor: 'pointer' }} />
                      <Button variant='outlined' style={{ textTransform: 'none' }}>Submit a photo</Button>
                    </div>
                    <Typography style={{ color: 'black', paddingRight: 30, cursor: 'pointer' }}>Login</Typography>
                    <Button variant='contained' style={{ textTransform: 'none', color: 'white', backgroundColor: '#3cb46e' }}>Join free</Button>
                  </div>
                }
              </Grid>
              {this.props.location.pathname === '/' ? <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ borderRight: '1px solid gray' }}>
                  <Typography variant='body1' style={{ color: 'black', paddingRight: this.props.smDown ? 20 : 34 }}>Editorial</Typography>
                </div>
                <Tabs scrollButtons='on' variant='scrollable' TabScrollButtonProps={{ style: { color: 'black' } }} TabIndicatorProps={{ style: { background: 'black' } }} value={this.state.tabValue} onChange={this.setNewTabValue}>
                  {this.state.tabLabels.map((x, i) => (
                    <Tab key={i} label={x} style={{ color: 'black', fontSize: 12, minWidth: 'initial' }} />
                  ))}
                </Tabs>
              </Grid> : null}
            </Grid>
            <Menu
              style={{}}
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={() => { this.setState({ anchorEl: null }) }}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              elevation={4}
            >
              {this.state.menuItems.map((x, i) => (
                <MenuItem key={i}>
                  <Typography onClick={() => this.setState({ anchorEl: null })} className='navMenuHover' variant='subtitle2'>{x}</Typography>
                </MenuItem>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', padding: 16 }}>
                <TwitterIcon onClick={() => this.setState({ anchorEl: null })} style={{ paddingRight: '16px', cursor: 'pointer' }} />
                <FacebookIcon onClick={() => this.setState({ anchorEl: null })} style={{ paddingRight: '16px', cursor: 'pointer' }} />
                <InstagramIcon onClick={() => this.setState({ anchorEl: null })} style={{ paddingRight: '16px', cursor: 'pointer' }} />
                <img onClick={() => this.setState({ anchorEl: null })} src={medium} alt='medium' height={20} width={20} style={{ cursor: 'pointer' }} />
              </div>
              {this.props.smDown ?
                <Grid container style={{ padding: 16 }}>
                  <Grid item xs={6} style={{ paddingRight: 8 }}>
                    <Button variant='contained' style={{ textTransform: 'none', width: '100%' }} >Login</Button>
                  </Grid>
                  <Grid item xs={6} style={{ paddingLeft: 8 }}>
                    <Button variant='contained' style={{ textTransform: 'none', color: 'white', backgroundColor: '#3cb46e', width: '100%' }} >Join free</Button>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: 16 }}>
                    <Button variant='contained' style={{ textTransform: 'none', width: '100%' }} >Submit a photo</Button>
                  </Grid>
                </Grid>
                :
                null
              }
              <Divider orientation='horizontal' />
              <div style={{ display: 'flex', alignItems: 'center', padding: '8px 16px' }}>
                <Typography onClick={() => this.setState({ anchorEl: null })} variant='caption' style={{ fontWeight: 400, paddingRight: 16, cursor: 'pointer' }}>Help</Typography>
                <Typography onClick={() => this.setState({ anchorEl: null })} variant='caption' style={{ fontWeight: 400, paddingRight: 16, cursor: 'pointer' }}>License</Typography>
                <Typography onClick={() => this.setState({ anchorEl: null })} variant='caption' style={{ fontWeight: 400, paddingRight: 16, cursor: 'pointer' }}>Press</Typography>
                <Typography onClick={() => this.setState({ anchorEl: null })} variant='caption' style={{ fontWeight: 400, cursor: 'pointer' }}>Join the team</Typography>
              </div>
            </Menu>
          </Toolbar>
        </AppBar>
      </div >
    );
  }
}
export default Navbar;