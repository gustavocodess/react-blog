import React from 'react'
import cuid from 'cuid'
import { Container, Col } from 'react-bootstrap'
import TutorialCard from '../../ui/TutorialCard'
import { butter } from '../../helpers'

export default class Tutorials extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    butter.post.list({ page: 1, page_size: 10 })
      .then((result) => {
        console.log('BUTTER CMS POSTS RESPONSE ', result)
        if (result && result.data && result.data.data) {
          this.setState({
            posts: result.data.data,
          })
        }
      })
      .catch(err => console.log('BUTTER ERRORS ', err))
  }

  render() {
    return (
      <Container>
        <Col>
          <h2>Tutorials</h2>
          {
            this.state.posts.map(tutorial => (
              <TutorialCard
                tutorial={tutorial}
                key={cuid()}
              />
            ))
          }

        </Col>
      </Container>
    )
  }
}
