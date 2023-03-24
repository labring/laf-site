'use client'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class App extends Component {
  render() {
    return (
      <>
        <video controls>
          <source src=" https://itceb8-video.oss.laf.run/laf-website.mp4 " />
        </video>
      </>
    )
  }
}
