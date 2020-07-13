import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

function PhotoSkeleton(props) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
  const list1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      {smDown ?
        <div>
          {list.map(x => (
            <Grid key={x} container style={{ padding: '20px 0px' }}>
              <Grid item xs={12}>
                <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
                  <Skeleton animation='wave' variant='circle' width={32} height={32} />
                  <Skeleton animation='wave' variant='text' width={'100%'} style={{marginLeft : 10}} />
                </div>
                <Skeleton animation='wave' variant='rect' height={300} width={'100%'}  />
              </Grid>
            </Grid>
          ))}
        </div>
        :
        <Grid container justify='center'>
          <Grid item xs={12} md={8} lg={6}>
            <Grid container>
              <Grid item xs={4}>
                {list1.map(x => (
                  <Skeleton animation='wave' variant='rect' key={x} width={'100%'} height={250} style={{ marginBottom: 15 }} />
                ))}
              </Grid>
              <Grid item xs={4} style={{ padding: '0px 15px' }}>
                {list1.map(x => (
                  <Skeleton animation='wave' variant='rect' key={x} width={'100%'} height={250} style={{ marginBottom: 15 }} />
                ))}
              </Grid>
              <Grid item xs={4}>
                {list1.map(x => (
                  <Skeleton animation='wave' variant='rect' key={x} width={'100%'} height={250} style={{ marginBottom: 15 }} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }
    </div>
  );
}

export default PhotoSkeleton;