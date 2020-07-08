import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhotos, getRelatedCollectionPhotos } from '../reduxStore/actions'
import { Grid, Avatar, Typography, Dialog, Chip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import ShareIcon from '@material-ui/icons/Share';
import '../styles.css'
import Photos from './Photos';
import RelatedCollection from './RelatedCollection';
import Header from './Header'

class PictureDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDialogOpen: false,
      name: null,
      profileImg: null,
      img: null,
      isPhotoZoomed: false,
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
    this.props.getPhotos()
    this.props.getRelatedCollectionPhotos()
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
      <div>
        <Header smDown={this.props.smDown} />
        <div style={{ paddingTop: 30 }}>
          {this.props.fetchingPhotos || !this.photosDivision().flat().length ? null :
            <Grid container justify='center'>
              <Grid item xs={12} md={8} lg={6}>
                <Photos photosDivision={this.photosDivision} setInfo={this.setInfo} openDialog={this.openDialog} isDialogOpen={this.state.isDialogOpen} photoList={this.props.photos} />
              </Grid>
            </Grid>
          }
          <Dialog fullWidth maxWidth='lg' onClose={this.closeDialog} open={this.state.isDialogOpen} >
            <Grid container justify='center' style={{ padding: 20 }} >
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                  <Avatar alt='profile image' src={this.state.profileImg} style={{ height: 32, width: 32, cursor: 'pointer', border: '0.3px solid lightgrey' }} />
                  <Typography variant='caption' style={{ color: 'black', fontWeight: 400, paddingLeft: 10 }}>{this.state.name}</Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      padding: '3px 6px',
                      color: 'grey',
                      display: 'flex',
                      alignItems: 'center',
                      border: '0.2px solid lightgrey',
                      borderRadius: 3,
                      cursor: 'pointer',
                      marginRight: 8
                    }}>
                    <AddIcon fontSize='small' />
                  </div>
                  <div
                    style={{
                      padding: '3px 6px',
                      color: 'grey',
                      cursor: 'pointer',
                      border: '0.2px solid lightgrey',
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: 8
                    }}>
                    <FavoriteIcon fontSize='small' />
                  </div>
                  <div
                    style={{
                      padding: '2px 6px',
                      color: 'grey',
                      cursor: 'pointer',
                      border: '0.2px solid lightgrey',
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant='subtitle2' style={{ fontWeight: 400 }}>
                      Download
                </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={this.state.isPhotoZoomed ? 12 : 9} style={{ padding: 15 }}>
                <img onClick={() => this.setState({ isPhotoZoomed: !this.state.isPhotoZoomed })} src={this.state.img} alt='img' style={{ width: '100%', cursor: this.state.isPhotoZoomed ? 'zoom-out' : 'zoom-in' }} />
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '0.2px solid lightgrey', borderRadius: 3, padding: '3px 6px', marginRight: 8 }}>
                  <ShareIcon style={{ color: 'grey', fontSize: 16, paddingRight: 5 }} />
                  <Typography variant='subtitle2' style={{ color: 'grey', fontWeight: 400 }}>Share</Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', border: '0.2px solid lightgrey', borderRadius: 3, padding: '3px 6px' }}>
                  <InfoIcon style={{ color: 'grey', fontSize: 16, paddingRight: 5 }} />
                  <Typography variant='subtitle2' style={{ color: 'grey', fontWeight: 400 }}>Info</Typography>
                </div>
              </Grid>
              <Grid item xs={9} style={{ padding: '80px 15px' }}>
                <Typography style={{ color: 'grey', paddingBottom: 20 }}>Related photos</Typography>
                <Photos photosDivision={this.photosDivision} setInfo={this.setInfo} openDialog={this.openDialog} isDialogOpen={this.state.isDialogOpen} />
                <Typography style={{ color: 'grey', paddingBottom: 20, paddingTop: 40 }}>Related collections</Typography>
                <RelatedCollection collectionPhotos={this.props.collectionPhotos} />
                <div style={{ paddingTop: 150 }}>
                  <Typography style={{ paddingBottom: 10 }}>Related tags</Typography>
                  <Chip size='small' label='Spacecapades' style={{ borderRadius: 0, color: 'black' }} />
                  <Chip size='small' label='Space' style={{ borderRadius: 0, color: 'black', margin: '0px 5px' }} />
                  <Chip size='small' label='Star' style={{ borderRadius: 0, color: 'black' }} />
                </div>
              </Grid>
            </Grid>
          </Dialog>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  fetchingPhotos: state.photos.fetching,
  collectionPhotos: state.photos.collectionPhotos
})

export default connect(mapStateToProps, { getPhotos, getRelatedCollectionPhotos })(PictureDisplay)