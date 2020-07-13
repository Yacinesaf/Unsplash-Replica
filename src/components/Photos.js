import React from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import '../styles.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import empty from '../assets/empty.svg'


function Photos({ photosDivision, setInfo, openDialog, isDialogOpen, photoList }) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      {photosDivision().flat().length ? smDown ?
        photoList.map((x, i) => (
          <Grid key={i} container style={{ padding: '20px 0px' }}>
            <Grid item xs={12}>
              <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
                <Avatar alt='profile image' src={x.user.profile_image.medium} style={{ height: 32, width: 32, border: '0.2px solid lightgrey' }} />
                <Typography variant='subtitle2' style={{ color: 'darkgrey', fontWeight: 400, paddingLeft: 10 }}>{x.user.name}</Typography>
              </div>
              <Link to={`/photos/${x.id}`}>
                <img src={x.urls.raw} alt='s' style={{ width: '100%' }} />
              </Link>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    color: 'darkgray',
                    margin: 5,
                    borderRadius: 3,
                    border: '0.2px solid lightgrey',
                  }}>
                  <AddIcon style={{ fontSize: 14 }} />
                </div>
                <div
                  style={{
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    color: 'darkgrey',
                    margin: 5,
                    borderRadius: 3,
                    border: '0.2px solid lightgrey',
                  }}>
                  <FavoriteIcon style={{ fontSize: 14 }} />
                </div>
              </div>
              <div
                style={{
                  padding: '4px 12px',
                  color: 'grey',
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
            </Grid>
          </Grid>
        ))
        :
        <Grid container>
          <Grid item xs={4}>
            {photosDivision()[0].map((x, i) => (
              <div className='photoHover' key={i} style={{ position: 'relative', paddingBottom: 15 }}>
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
          <Grid item xs={4} style={{ padding: '0px 15px' }}>
            {photosDivision()[1].map((x, i) => (
              <div className='photoHover' key={i} style={{ position: 'relative', paddingBottom: 15 }}>
                <img onClick={() => {
                  if (!isDialogOpen) {
                    setInfo(x.user.name, x.user.profile_image.medium, x.urls.raw);
                    openDialog();
                  }
                }} className='photo' key={i} src={x.urls.raw} alt='s' style={{ width: '100%' }} />
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
              <div className='photoHover' key={i} style={{ position: 'relative', paddingBottom: 15 }}>
                <img onClick={() => {
                  if (!isDialogOpen) {
                    setInfo(x.user.name, x.user.profile_image.medium, x.urls.raw);
                    openDialog();
                  }
                }} className='photo' src={x.urls.raw} alt='s' style={{ width: '100%' }} />
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
        :
        <Grid container justify='center'>
          <Grid item xs={10}>
            <img src={empty} alt='empty' /> 
          </Grid>
        </Grid>
      }
    </div>
  );
}

export default Photos;