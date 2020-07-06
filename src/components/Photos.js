import React from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import '../styles.css'


function Photos({ photosDivision, setInfo, openDialog, isDialogOpen }) {
  return (
    <Grid container>
      <Grid item xs={4} >
        {photosDivision()[0].map((x, i) => (
          <div className='photoHover' key={i} style={{ position: 'relative', paddingBottom : 15 }}>
            <img onClick={() => {
              if (!isDialogOpen) {
                setInfo(x.user.name, x.user.profile_image.medium, x.urls.raw);
                openDialog();
              }
            }}
              className='photo' key={i} src={x.urls.raw} alt='s' style={{ width: '100%' }} />
            <div className='utilityContainer'>
              <div style={{ position: 'absolute', top: 5, right: 5, display: 'flex', alignItems: 'center' }}>
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
                  bottom: 25,
                  right: 10,
                }}>
                <ArrowDownwardIcon style={{ fontSize: 12 }} />
              </div>
              <div style={{ position: 'absolute', bottom: 25, left: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar alt='profile image' src={x.user.profile_image.medium} style={{ height: 24, width: 24, cursor: 'pointer' }} />
                <Typography variant='caption' style={{ color: 'white', fontWeight: 400, paddingLeft: 10 }}>{x.user.name}</Typography>
              </div>
            </div>
          </div>
        ))}
      </Grid>
      <Grid item xs={4} style={{padding : '0px 15px'}}>
        {photosDivision()[1].map((x, i) => (
          <div className='photoHover' key={i} style={{ position: 'relative', paddingBottom : 15 }}>
            <img className='photo' key={i} src={x.urls.raw} alt='s' style={{ width: '100%' }} />
            <div className='utilityContainer'>
              <div style={{ position: 'absolute', top: 5, right: 5, display: 'flex', alignItems: 'center' }}>
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
                  bottom: 25,
                  right: 10,
                }}>
                <ArrowDownwardIcon style={{ fontSize: 12 }} />
              </div>
              <div style={{ position: 'absolute', bottom: 25, left: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar alt='profile image' src={x.user.profile_image.medium} style={{ height: 24, width: 24, cursor: 'pointer' }} />
                <Typography variant='caption' style={{ color: 'white', fontWeight: 400, paddingLeft: 10 }}>{x.user.name}</Typography>
              </div>
            </div>
          </div>
        ))}
      </Grid>
      <Grid item xs={4}>
        {photosDivision()[2].map((x, i) => (
          <div className='photoHover' key={i} style={{ position: 'relative', paddingBottom : 15 }}>
            <img className='photo' src={x.urls.raw} alt='s' style={{ width: '100%' }} />
            <div className='utilityContainer'>
              <div style={{ position: 'absolute', top: 5, right: 5, display: 'flex', alignItems: 'center' }}>
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
                  bottom: 25,
                  right: 10,
                }}>
                <ArrowDownwardIcon style={{ fontSize: 12 }} />
              </div>
              <div style={{ position: 'absolute', bottom: 25, left: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar alt='profile image' src={x.user.profile_image.medium} style={{ height: 24, width: 24, cursor: 'pointer' }} />
                <Typography variant='caption' style={{ color: 'white', fontWeight: 400, paddingLeft: 10 }}>{x.user.name}</Typography>
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default Photos;