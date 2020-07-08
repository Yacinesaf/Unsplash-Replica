import React from 'react';
import { collectionPhotosSpliter } from '../services/helpers'
import { Grid, Typography, Chip } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function RelatedCollection({ collectionPhotos }) {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container justify='center' style={{ padding: '60px 0px' }}>
      <Grid  item xs={11} md={6} lg={4} style={{ height: 220, paddingRight: 10 }} >
        {collectionPhotosSpliter(collectionPhotos).map((x, i) => (
          <Grid key={i} container justify='center'>
            <Grid item xs={8}>
              <div style={{ width: '100%', height: 220, borderRadius: smDown ? '10px 0px 0px 10px' : '3px 0px 0px 3px', backgroundImage: `url(${x[0].urls.raw})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
            </Grid>
            <Grid item xs={4}>
              <div style={{ height: '100%', paddingLeft: 3 }}>
                <div style={{ width: '100%', height: 110, borderRadius: smDown ? '0px 10px 0px 0px' : '0px 3px 0px 0px', backgroundImage: `url(${x[1].urls.raw})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <div style={{ width: '100%', height: 110, borderRadius: smDown ? '0px 0px 10px 0px' : '0px 0px 3px 0px', backgroundImage: `url(${x[2].urls.raw})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2' style={{ color: 'grey', padding: '10px 0px' }}>SPACECAPADES</Typography>
              <Typography variant='subtitle2' style={{ color: 'grey' }}>1100 photos created by Susan H.</Typography>
              <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
                <Chip size='small' label='Spacecapades' style={{ borderRadius: 0, color: 'black' }} />
                <Chip size='small' label='Space' style={{ borderRadius: 0, color: 'black', margin: '0px 5px' }} />
                <Chip size='small' label='Star' style={{ borderRadius: 0, color: 'black' }} />
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default RelatedCollection;

// <Grid key={i} item xs={11} md={6} lg={4} style={{ height: 220, paddingRight: 10 }} >
// <Grid container justify='center'>
//   <Grid item xs={8} style={{ overflow: 'hidden' }}>
//     <img src={x[0].urls.raw} alt='img' style={{ width: '100%', height: 220, borderRadius: smDown ? '10px 0px 0px 10px' : '3px 0px 0px 3px' }} />
//   </Grid>
//   <Grid item xs={4} style={{ height: 220, overflow: 'hidden' }}>
//     <div style={{ height: '100%', paddingLeft: 3 }}>
//       <img src={x[1].urls.raw} alt='img' style={{ width: '100%', height: 110, borderRadius: smDown ? '0px 10px 0px 0px' : '0px 3px 0px 0px' }} />
//       <img src={x[2].urls.raw} alt='img' style={{ width: '100%', height: 110, borderRadius: smDown ? '0px 0px 15px 0px' : '0px 0px 3px 0px' }} />
//     </div>
//   </Grid>
//   <Grid item xs={12}>
//     <Typography variant='subtitle2' style={{ color: 'grey', padding: '10px 0px' }}>SPACECAPADES</Typography>
//     <Typography variant='subtitle2' style={{ color: 'grey' }}>1100 photos created by Susan H.</Typography>
//     <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
//       <Chip size='small' label='Spacecapades' style={{ borderRadius: 0, color: 'black' }} />
//       <Chip size='small' label='Space' style={{ borderRadius: 0, color: 'black', margin: '0px 5px' }} />
//       <Chip size='small' label='Star' style={{ borderRadius: 0, color: 'black' }} />
//     </div>
//   </Grid>
// </Grid>
// </Grid>