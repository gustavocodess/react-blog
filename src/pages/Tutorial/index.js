import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { butter } from '../../helpers'

export default class Tutorial extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postData: null,
    }
  }
  componentWillMount() {
    const slug = this.props.match.params.postSlug

    butter.post.retrieve(slug)
      .then((resp) => {
        console.log('POST DATA ', resp.data)
        this.setState({
          postData: resp.data.data,
        })
      }).catch((resp) => {
        console.log('POST DETAILS ERROR ', resp)
      })
  }
  render() {
    console.log('tutorial props ', this.props)
    if (!this.state.postData) {
      return (
        <h3>Tutorial not found :(</h3>
      )
    }
    return (
      <div style={{
        width: '70%',
        margin: 'auto',
        maxWidth: 1240,
        backgroundColor: 'white',
        padding: 24,
        paddingBottom: 76,
      }}>
        {ReactHtmlParser(this.state.postData.body)}
      </div>
    )
  }
}