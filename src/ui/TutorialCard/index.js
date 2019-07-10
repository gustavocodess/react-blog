import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'

const TutorialCard = ({ tutorial }) => (
  <Link
    to={`/tutorial/${tutorial.slug}`}
  >
    <div className="tutorial-card-container">
      <Row>
        <Col sm={2} md={3} large={6}>
          <img
            alt="tutorial-avatar"
            src={tutorial.featured_image}
            className="tutorial-card-avatar"
          />
        </Col>
        <Col sm={6} md={9} large={18}>
          <p style={{ fontFamily: 'GloberSemiBold' }}>{tutorial.title}</p>
          <p>{tutorial.meta_description}</p>
          <Col>
            <Row>
              <p style={{ fontSize: 13 }}>Author:</p>
              <p style={{ marginLeft: 8, fontSize: 13, fontFamily: 'GloberBold' }}>
                {`${tutorial.author.first_name} ${tutorial.author.last_name}`}
              </p>
            </Row>
          </Col>
        </Col>
      </Row>
    </div>
  </Link>
)

TutorialCard.propTypes = {
  tutorial: PropTypes.object.isRequired,
}

export default TutorialCard
