import React, { Component } from 'react'
import { Avatar, Typography, Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import ShareIcon from '@material-ui/icons/Share';
import { connect } from 'react-redux'
import { getImageById, getRelatedCollectionPhotos, getPhotos } from '../reduxStore/actions'
import RelatedCollection from './RelatedCollection';

class PhotoCloseUpMobile extends Component {

  componentDidMount() {
    const id = this.props.location.pathname.split('/')
    this.props.getImageById(id[id.length - 1])
    if (!this.props.collectionPhotos.length) {
      this.props.getRelatedCollectionPhotos()
    }
    if (!this.props.photos.length) {
      this.props.getPhotos()
    }
  }

  splitPhotosList = () => {
    let list = this.props.photos;
    let index = this.props.photos.length / 2;
    let first = list.slice(0, index)
    let second = list.slice(index, this.props.photos.length)
    return [first, second]
  }

  render() {
    return (
      <div>
        {this.props.fetchingPhoto ?
          null :
          <Grid container justify='center'>
            <Grid item xs={11} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '15px 0px' }}>
              <Avatar alt='profile image' src={this.props.photoInfo.user.profile_image.small} style={{ height: 32, width: 32, border: '0.3px solid lightgrey' }} />
              <Typography variant='subtitle2' style={{ color: 'grey', fontWeight: 400, paddingLeft: 5 }}>{this.props.photoInfo.user.name}</Typography>
            </Grid>
            <Grid item xs={11} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    padding: '5px 10px',
                    color: 'grey',
                    display: 'flex',
                    alignItems: 'center',
                    border: '0.2px solid lightgrey',
                    borderRadius: 5,
                    marginRight: 8
                  }}>
                  <AddIcon fontSize='small' />
                </div>
                <div
                  style={{
                    padding: '5px 10px',
                    color: 'grey',
                    border: '0.2px solid lightgrey',
                    borderRadius: 5,
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: 8
                  }}>
                  <FavoriteIcon fontSize='small' />
                </div>
              </div>
              <div
                style={{
                  padding: '3px 9px',
                  color: 'grey',
                  border: '0.2px solid lightgrey',
                  borderRadius: 5,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant='subtitle1' style={{ fontWeight: 400 }}>
                  Download
           </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <img src={this.props.photoInfo.urls.raw} alt='img' style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={11} style={{ display: 'flex', alignItems: 'center', padding: '10px 0px', justifyContent: 'flex-end' }}>
              <div
                style={{
                  padding: '5px 10px',
                  color: 'grey',
                  display: 'flex',
                  alignItems: 'center',
                  border: '0.2px solid lightgrey',
                  borderRadius: 5,
                  marginRight: 8
                }}>
                <ShareIcon fontSize='small' />
              </div>
              <div
                style={{
                  padding: '5px 10px',
                  color: 'grey',
                  border: '0.2px solid lightgrey',
                  borderRadius: 5,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <InfoIcon fontSize='small' />
              </div>
            </Grid>
            <Grid item xs={11} style={{ paddingBottom: '80px 0px' }}>
              <Typography style={{ color: 'darkgrey', paddingBottom: 20 }}>Related photos</Typography>
              <Grid container justify='center'>
                <Grid item xs={6} style={{ paddingRight: 5 }}>
                  {this.splitPhotosList()[0].map((x, i) => (
                    <img key={i} src={x.urls.raw} alt='img' style={{ width: '100%', paddingBottom: 8 }} />
                  ))}
                </Grid>
                <Grid item xs={6} style={{ paddingLeft: 5 }}>
                  {this.splitPhotosList()[1].map((x, i) => (
                    <img key={i} src={x.urls.raw} alt='img' style={{ width: '100%', paddingBottom: 8 }} />
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={11}>
              <Typography style={{ color: 'black', paddingTop: 30 }}>Related collections</Typography>
              <RelatedCollection collectionPhotos={this.props.collectionPhotos} fetchingCollectionPhotos={this.props.fetchingCollectionPhotos} />
            </Grid>
          </Grid>
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  fetchingPhotos: state.photos.fetchingPhotos,
  fetchingCollectionPhotos: state.photos.fetchingCollectionPhotos,
  fetchingPhoto: state.photos.fetchingPhoto,
  collectionPhotos: state.photos.collectionPhotos,
  photoInfo: state.photos.photoById
})

export default connect(mapStateToProps, { getImageById, getRelatedCollectionPhotos, getPhotos })(PhotoCloseUpMobile)