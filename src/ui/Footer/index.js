import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'

const Footer = () => (
  <div className="footer-container">
    <p>Copyright 2019 Gustavo Codes | All Rights Reserved.</p>
    <Row style={{ width: 300, alignItems: 'center' }}>
      <span style={{ fontSize: 12 }}>Powered by:</span>
      <a href="https://buttercms.com" target="_blank">
        <img alt="buttercms" src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo" className="butter-cms-logo" />
      </a>
    </Row>
  </div>
)

export default Footer
