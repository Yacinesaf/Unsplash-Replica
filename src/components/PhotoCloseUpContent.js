import React from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import ShareIcon from '@material-ui/icons/Share';


function PhotoCloseUpContent({ isPhotoZoomed, profileImg, name, img, zoomSwitch, photoInfo, smDown }) {
  console.log(photoInfo.user.profile_image.small)
  return (
    <Grid container justify='center'>
      <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Avatar alt='profile image' src={smDown ? photoInfo.user.profile_image.small : profileImg} style={{ height: 32, width: 32, cursor: 'pointer', border: '0.3px solid lightgrey' }} />
          <Typography variant='caption' style={{ color: 'black', fontWeight: 400, paddingLeft: 10 }}>{smDown ? photoInfo.user.name : name}</Typography>
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
      <Grid item xs={isPhotoZoomed ? 12 : 9} style={{ padding: 15 }}>
        <img onClick={() => { zoomSwitch() }} src={smDown ? photoInfo.urls.raw : img} alt='img' style={{ width: '100%', cursor: isPhotoZoomed ? 'zoom-out' : 'zoom-in' }} />
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
    </Grid>
  );
}

export default PhotoCloseUpContent;