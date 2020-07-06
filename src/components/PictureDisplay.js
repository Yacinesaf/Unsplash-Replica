import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhotos, getRelatedCollectionPhotos } from '../reduxStore/actions'
import { Grid, Avatar, Typography, Dialog, Chip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import '../styles.css'
import ShareIcon from '@material-ui/icons/Share';
import InfoIcon from '@material-ui/icons/Info';
import Photos from './Photos';

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

  collectionPhotosSpliter = () => {
    var perChunk = 3

    var inputArray = this.props.collectionPhotos

    var result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk)

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])
    return result
  }

  render() {
    console.log(this.collectionPhotosSpliter())
    return (
      <div style={{ paddingTop: 30 }}>
        {this.props.fetchingPhotos || !this.photosDivision().flat().length ? null :
          <Grid container justify='center'>
            <Grid item xs={6}>
              <Photos photosDivision={this.photosDivision} setInfo={this.setInfo} openDialog={this.openDialog} isDialogOpen={this.state.isDialogOpen} />
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
              <Typography style={{ color: 'grey' }}>Related collections</Typography>
              <Grid container>
                {this.collectionPhotosSpliter().map((x, i) => (
                  <Grid item xs={4} style={{ height: 220 }} >
                    <Grid container>
                      <Grid item xs={8}>
                        <img src={x[0].urls.raw} alt='img' style={{ width: '100%', height: 220, borderRadius: '3px 0px 0px 3px' }} />
                      </Grid>
                      <Grid item xs={4} style={{ height: 220 }}>
                        <div style={{ height: '100%', paddingLeft: 3 }}>
                          <img src={x[1].urls.raw} alt='img' style={{ width: '100%', height: 110, borderRadius: '0px 3px 0px 0px' }} />
                          <img src={x[2].urls.raw} alt='img' style={{ width: '100%', height: 110, borderRadius: '0px 0px 3px 0px' }} />
                        </div>
                      </Grid>
                      <Typography variant='subtitle2' style={{ color: 'grey', padding: '10px 0px' }}>SPACECAPADES</Typography>
                      <Typography variant='subtitle2' style={{ color: 'grey' }}>1100 photos created by Susan H.</Typography>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0px' }}>
                        <Chip size='small' label='Spacecapades' style={{ borderRadius: 0, color: 'black' }} />
                        <Chip size='small' label='Space' style={{ borderRadius: 0, color: 'black' }} />
                        <Chip size='small' label='Star' style={{ borderRadius: 0, color: 'black' }} />
                      </div>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
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