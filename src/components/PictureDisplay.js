import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhotoes } from '../reduxStore/actions'
import { Grid } from '@material-ui/core'

class PictureDisplay extends Component {

  componentDidMount() {
    this.props.getPhotoes()
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
      <div style={{ paddingTop: 30 }}>
        {this.props.fetchingPhotos || !this.photosDivision().flat().length ? null :
          <Grid container justify='center'>
            <Grid item xs={6}>
              <Grid container >
                <Grid item xs={4} style={{ padding: 7 }}>
                  {this.photosDivision()[0].map((x, i) => (
                    <img key={i} src={x.urls.raw} alt='s' style={{ width: '100%', margin : 7 }} />
                  ))}
                </Grid>
                <Grid item xs={4} style={{ padding: 7 }}>
                  {this.photosDivision()[1].map((x, i) => (
                    <img key={i} src={x.urls.raw} alt='s' style={{ width: '100%', margin : 7 }} />
                  ))}
                </Grid>
                <Grid item xs={4} style={{ padding: 7 }}>
                  {this.photosDivision()[2].map((x, i) => (
                    <img key={i} src={x.urls.raw} alt='s' style={{ width: '100%', margin : 7 }} />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photoes,
  fetchingPhotos: state.photos.fetching
})

export default connect(mapStateToProps, { getPhotoes })(PictureDisplay)