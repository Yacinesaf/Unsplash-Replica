import React, { Component } from 'react'
import { getHeaderImage } from '../reduxStore/actions'
import { connect } from 'react-redux'
import { Grid, TextField, Paper, InputBase, Typography } from '@material-ui/core'


class Header extends Component {
  componentDidMount() {
    this.props.getHeaderImage()
  }
  render() {
    return (
      <div>
        {this.props.isHeaderFetchingImg ? null :
          <Grid container justify='center' alignItems='center'
            style={{
              backgroundImage: `url(${this.props.img})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: 500,
            }}
          >
            <Grid item xs={6}>
              <Typography style={{color : 'white', fontWeight : 600, paddingBottom : 20}} variant='h3'>Unsplash</Typography>
              <Typography style={{color : 'white'}} variant='body1'>
                The internet's source of freely-usable images.
            </Typography>
              <Typography style={{color : 'white'}} variant='body1'>Powered by creators everywhere</Typography>
              <Paper style={{ width: 'calc(100% - 40px)', padding: '15px 20px' }}>
                <InputBase
                  onClick={() => this.setState({ inputClicked: true })}
                  style={{ width: '100%', padding: '0px !important' }}
                  inputProps={{ placeholder: this.props.smDown ? 'Search photos' : 'Search free high-resolution photos', type: 'text' }}
                />
              </Paper>
            </Grid>
          </Grid>
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  img: state.headerImg.img,
  isHeaderFetchingImg: state.headerImg.fetching
})

export default connect(mapStateToProps, { getHeaderImage })(Header)