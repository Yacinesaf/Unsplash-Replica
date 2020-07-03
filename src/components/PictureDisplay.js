import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhotoes } from '../reduxStore/actions'
import { Grid, Avatar, Typography, Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import '../styles.css'


class PictureDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDialogOpen: false,
      name: null,
      profileImg: null,
      img: null,
    }
  }

  openDialog = () => {
    this.setState({ isDialogOpen: true });
  }
  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  }
  setInfo = (name, profileImg, img) => {
    this.setState({
      name: name,
      profileImg: profileImg,
      img: img,
    });
  }

  componentDidMount() {
    this.props.getPhotoes()
  }

  photosDivision = () => {
    let arr = [...this.props.photos]
    let rest = arr.length % 3;
    let itemPerGrid = (arr.length - rest) / 3;
    let one = itemPerGrid;
    let two = itemPerGrid;
    let three = itemPerGrid;
    let list = [one, two, three];
    while (rest > 0) {
      for (let i = 0; i <= list.length; i++) {
        if (rest > 0) {
          list[i] = list[i] + 1
          rest--
        }
      }
    }
    let result = list.map(x => {
      return arr.splice(0, x)
    })
    return result
  }

  render() {
    return (
      <div style={{ paddingTop: 30 }}>
        {this.props.fetchingPhotos || !this.photosDivision().flat().length ? null :
          <Grid container justify='center'>
            <Grid item xs={6}>
              <Grid container >
                <Grid item xs={4} style={{ padding: 7 }}>
                  {this.photosDivision()[0].map((x, i) => (
                    <div className='photoHover' key={i} style={{ padding: 7, position: 'relative' }}>
                      <img onClick={() => {
                        this.setInfo(x.user.name, x.user.profile_image.medium, x.urls.raw);
                        this.openDialog();
                      }}
                        className='photo' key={i} src={x.urls.raw} alt='s' style={{ width: '100%' }} />
                      <div className='utilityContainer'>
                        <div style={{ position: 'absolute', top: 15, right: 15, display: 'flex', alignItems: 'center' }}>
                          <div
                            style={{
                              cursor: 'pointer',
                              padding: '3px 6px',
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: 'white',
                              color: 'darkgray',
                              margin: 5,
                              borderRadius: 2
                            }}>
                            <AddIcon style={{ fontSize: 12 }} />
                          </div>
                          <div
                            style={{
                              cursor: 'pointer',
                              padding: '3px 6px',
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: 'white',
                              color: 'darkgrey',
                              margin: 5,
                              borderRadius: 2
                            }}>
                            <FavoriteIcon style={{ fontSize: 12 }} />
                          </div>
                        </div>
                        <div
                          style={{
                            cursor: 'pointer',
                            padding: '3px 6px',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            color: 'darkgrey',
                            borderRadius: 2,
                            position: 'absolute',
                            bottom: 20,
                            right: 20,
                          }}>
                          <ArrowDownwardIcon style={{ fontSize: 12 }} />
                        </div>
                        <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', alignItems: 'center' }}>
                          <Avatar alt='profile image' src={x.user.profile_image.medium} style={{ height: 24, width: 24, cursor: 'pointer' }} />
                          <Typography variant='caption' style={{ color: 'white', fontWeight: 400, paddingLeft: 10 }}>{x.user.name}</Typography>
                        </div>
                      </div>
                    </div>
                  ))}
                </Grid>
                <Grid item xs={4} style={{ padding: 7 }}>
                  {this.photosDivision()[1].map((x, i) => (
                    <div className='photoHover' key={i} style={{ padding: 7, position: 'relative' }}>
                      <img className='photo' key={i} src={x.urls.raw} alt='s' style={{ width: '100%' }} />
                      <div className='utilityContainer'>
                        <div style={{ position: 'absolute', top: 15, right: 15, display: 'flex', alignItems: 'center' }}>
                          <div
                            style={{
                              cursor: 'pointer',
                              padding: '3px 6px',
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: 'white',
                              color: 'darkgray',
                              margin: 5,
                              borderRadius: 2
                            }}>
                            <AddIcon style={{ fontSize: 12 }} />
                          </div>
                          <div
                            style={{
                              cursor: 'pointer',
                              padding: '3px 6px',
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: 'white',
                              color: 'darkgrey',
                              margin: 5,
                              borderRadius: 2
                            }}>
                            <FavoriteIcon style={{ fontSize: 12 }} />
                          </div>
                        </div>
                        <div
                          style={{
                            cursor: 'pointer',
                            padding: '3px 6px',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            color: 'darkgrey',
                            borderRadius: 2,
                            position: 'absolute',
                            bottom: 20,
                            right: 20,
                          }}>
                          <ArrowDownwardIcon style={{ fontSize: 12 }} />
                        </div>
                        <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', alignItems: 'center' }}>
                          <Avatar alt='profile image' src={x.user.profile_image.medium} style={{ height: 24, width: 24, cursor: 'pointer' }} />
                          <Typography variant='caption' style={{ color: 'white', fontWeight: 400, paddingLeft: 10 }}>{x.user.name}</Typography>
                        </div>
                      </div>
                    </div>
                  ))}
                </Grid>
                <Grid item xs={4} style={{ padding: 7 }}>
                  {this.photosDivision()[2].map((x, i) => (
                    <div className='photoHover' key={i} style={{ padding: 7, position: 'relative' }}>
                      <img className='photo' src={x.urls.raw} alt='s' style={{ width: '100%' }} />
                      <div className='utilityContainer'>
                        <div style={{ position: 'absolute', top: 15, right: 15, display: 'flex', alignItems: 'center' }}>
                          <div
                            style={{
                              cursor: 'pointer',
                              padding: '3px 6px',
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: 'white',
                              color: 'darkgray',
                              margin: 5,
                              borderRadius: 2
                            }}>
                            <AddIcon style={{ fontSize: 12 }} />
                          </div>
                          <div
                            style={{
                              cursor: 'pointer',
                              padding: '3px 6px',
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: 'white',
                              color: 'darkgrey',
                              margin: 5,
                              borderRadius: 2
                            }}>
                            <FavoriteIcon style={{ fontSize: 12 }} />
                          </div>
                        </div>
                        <div
                          style={{
                            cursor: 'pointer',
                            padding: '3px 6px',
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            color: 'darkgrey',
                            position: 'absolute',
                            bottom: 20,
                            right: 20,
                          }}>
                          <ArrowDownwardIcon style={{ fontSize: 12 }} />
                        </div>
                        <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', alignItems: 'center' }}>
                          <Avatar alt='profile image' src={x.user.profile_image.medium} style={{ height: 24, width: 24, cursor: 'pointer' }} />
                          <Typography variant='caption' style={{ color: 'white', fontWeight: 400, paddingLeft: 10 }}>{x.user.name}</Typography>
                        </div>
                      </div>
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
        <Dialog maxWidth='lg' onClose={this.closeDialog} open={this.state.isDialogOpen} >
          <Grid container justify='center' >
            <Grid item xs={11} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt='profile image' src={this.state.profileImg} style={{ height: 24, width: 24, cursor: 'pointer' }} />
                <Typography variant='caption' style={{ color: 'black', fontWeight: 400, paddingLeft: 10 }}>{this.state.name}</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    padding: '3px 6px',
                    color: 'grey',
                    display: 'flex',
                    alignItems: 'center',
                    border: '0.5px solid grey',
                    borderRadius: 2,
                    cursor: 'pointer',
                    marginRight : 8
                  }}>
                  <AddIcon fontSize='small' />
                </div>
                <div
                  style={{
                    padding: '3px 6px',
                    color: 'grey',
                    cursor: 'pointer',
                    border: '0.5px solid grey',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <FavoriteIcon fontSize='small' />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: 0, color: 'grey' }}>
                    Download
                  </p>
                  <ExpandMoreIcon fontSize='small' />
                </div>
              </div>
            </Grid>
          </Grid>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  fetchingPhotos: state.photos.fetching
})

export default connect(mapStateToProps, { getPhotoes })(PictureDisplay)