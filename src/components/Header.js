import React, { Component } from 'react'
import { getHeaderImage } from '../reduxStore/actions'
import { connect } from 'react-redux'
import { Grid, Paper, InputBase, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import squarespace from '../assets/squarespace.png'

class Header extends Component {
  componentDidMount() {
    this.props.getHeaderImage()
  }
  render() {
    return (
      <div>
        {this.props.isHeaderFetchingImg ? <div style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: this.props.smDown ? 210 : 550
        }} /> :
          <div
            style={{
              backgroundImage: `url(${this.props.img})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: this.props.smDown ? 210 : 550
            }}
          >
            <Grid container
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                height: '100%'
              }}
            >
              {this.props.smDown ? null :
                <Grid item xs={3} style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Typography variant='caption' style={{ color: 'white', padding: 10 }}>Photo by {this.props.name}</Typography>
                </Grid>
              }

              <Grid item xs={this.props.smDown ? 11 : 6}
                style={{
                  display: 'flex',
                  justifyContent: this.props.smDown ? '' : 'center',
                  flexDirection: 'column',
                  position: 'relative',
                  paddingTop: this.props.smDown ? 30 : 0,
                  paddingLeft : this.props.smDown ? 10 : 0
                }}>
                <Typography style={{ color: 'white', fontWeight: 600 }} variant={this.props.smDown ? 'h6' : 'h3'}>Unsplash</Typography>
                <div style={{ color: 'white', padding: '20px 0px' }}>
                  <Typography style={{ color: 'white' }} variant={this.props.smDown ? 'subtitle2' : 'body1'}>
                    The internet's source of freely-usable images.
                  </Typography>
                  <Typography style={{ color: 'white' }} variant={this.props.smDown ? 'subtitle2' : 'body1'}>Powered by creators everywhere</Typography>
                </div>
                {this.props.smDown ?
                  <div style={{ opacity: '0.7' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={squarespace} alt='squarespace' height={20} width={24} />
                      <Typography style={{ color: 'white', paddingLeft: 5, }}>SQUARESPACE</Typography>
                    </div>
                    <Typography variant='caption' style={{ color: 'white', fontWeight: 400, paddingTop: 10 }}>Create yout own website today.</Typography>
                  </div>
                  :
                  <Paper style={{ width: 'calc(100% - 40px)', padding: '12px 15px', display: 'flex', alignItems: 'center' }}>
                    <SearchIcon style={{ color: 'gray', padding: '0px 10px' }} />
                    <InputBase
                      onClick={() => this.setState({ inputClicked: true })}
                      style={{ width: '100%', padding: '0px !important' }}
                      inputProps={{ placeholder: this.props.smDown ? 'Search photos' : 'Search free high-resolution photos', type: 'text' }}
                    />
                  </Paper>
                }
                {this.props.smDown ? null :
                  <Typography variant='caption' style={{ color: 'white', position: 'absolute', bottom: 10, width: '100%', textAlign: 'center' }}>Read more about the Unsplash License</Typography>
                }
              </Grid>
              {this.props.smDown ? null :
                <Grid item xs={3} style={{display : 'flex', alignItems :'flex-end', justifyContent :'flex-end', padding : 10}}>
                  <div style={{ opacity: '0.7'}}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent : 'flex-end' }}>
                      <img src={squarespace} alt='squarespace' height={14} width={18} />
                      <Typography variant='subtitle1' style={{ color: 'white', paddingLeft: 5, }}>SQUARESPACE</Typography>
                    </div>
                    <Typography variant='caption' style={{ color: 'white', fontWeight: 400 }}>Create yout own website today.</Typography>
                  </div>
                </Grid>
              }
            </Grid>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  img: state.headerImg.img,
  isHeaderFetchingImg: state.headerImg.fetching,
  name: state.headerImg.name
})

export default connect(mapStateToProps, { getHeaderImage })(Header)