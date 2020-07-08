import React, { Component } from 'react'
import PhotoCloseUpContent from './PhotoCloseUpContent'

export default class PhotoMobilePage extends Component {
  render() {
    return (
      <div>
        <PhotoCloseUpContent photoInfo={this.props.photoInfo} smDown={this.props.smDown} />
      </div>
    )
  }
}
