import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap'
import JotformEmbed from 'react-jotform-embed'

export default class Contact extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Container>
        <Col>
          <h2>Contact</h2>
          <JotformEmbed src="https://form.jotformz.com/91892859661677" />
        </Col>
      </Container>
    )
  }
}
