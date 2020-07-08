import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhotos, getRelatedCollectionPhotos } from '../reduxStore/actions'
import { Grid, Typography, Dialog, Chip } from '@material-ui/core'
import '../styles.css'
import Photos from './Photos';
import RelatedCollection from './RelatedCollection';
import PhotoCloseUpContent from './PhotoCloseUpContent'
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

  zoomSwitch = () => {
    this.setState({ isPhotoZoomed: !this.state.isPhotoZoomed })
  }

  render() {
    return (
      <div >
        <Header smDown={this.props.smDown} />
        {this.props.fetchingPhotos || !this.photosDivision().flat().length ? null :
          <Grid container justify='center' style={{ paddingTop: 30 }}>
            <Grid item xs={12} md={8} lg={6}>
              <Photos setZoomedPhoto={this.props.setZoomedPhoto} photosDivision={this.photosDivision} setInfo={this.setInfo} openDialog={this.openDialog} isDialogOpen={this.state.isDialogOpen} photoList={this.props.photos} />
            </Grid>
          </Grid>
        }
        <Dialog fullWidth maxWidth='lg' onClose={this.closeDialog} open={this.state.isDialogOpen} >
          <Grid container justify='center' style={{ padding: 20 }} >
            <Grid item xs={12}>
              <PhotoCloseUpContent smDown={this.props.smDown} isPhotoZoomed={this.state.isPhotoZoomed} profileImg={this.state.profileImg} name={this.state.name} img={this.state.img} zoomSwitch={this.zoomSwitch} />
            </Grid>
            <Grid item xs={9} style={{ padding: '80px 15px' }}>
              <Typography style={{ color: 'grey', paddingBottom: 20 }}>Related photos</Typography>
              <Photos photosDivision={this.photosDivision} setInfo={this.setInfo} openDialog={this.openDialog} isDialogOpen={this.state.isDialogOpen} />
              <Typography style={{ color: 'grey', paddingBottom: 20, paddingTop: 40 }}>Related collections</Typography>
              <RelatedCollection collectionPhotosSpliter={this.collectionPhotosSpliter()} />
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
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  fetchingPhotos: state.photos.fetching,
  collectionPhotos: state.photos.collectionPhotos
})

export default connect(mapStateToProps, { getPhotos, getRelatedCollectionPhotos })(PictureDisplay)