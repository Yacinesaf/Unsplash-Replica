import React from 'react';
import { Grid, Typography, Chip } from '@material-ui/core';

function RelatedCollection({collectionPhotosSpliter}) {
  return (
    <Grid container>
    {collectionPhotosSpliter.map((x, i) => (
      <Grid key={i} item xs={4} style={{ height: 220, paddingRight: 10 }} >
        <Grid container>
          <Grid item xs={8} style={{ overflow: 'hidden' }}>
            <img src={x[0].urls.raw} alt='img' style={{ width: '100%', height: 220, borderRadius: '3px 0px 0px 3px' }} />
          </Grid>
          <Grid item xs={4} style={{ height: 220, overflow: 'hidden' }}>
            <div style={{ height: '100%', paddingLeft: 3 }}>
              <img src={x[1].urls.raw} alt='img' style={{ width: '100%', height: 110, borderRadius: '0px 3px 0px 0px' }} />
              <img src={x[2].urls.raw} alt='img' style={{ width: '100%', height: 110, borderRadius: '0px 0px 3px 0px' }} />
            </div>
          </Grid>
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
  );
}

export default RelatedCollection;