import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'

const authorImg = 'https://images.unsplash.com/photo-1504575958497-ccdd586c2997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80'

const Home = () => (
  <Container>
    <h2>Welcome dev :D</h2>
    <Row style={{ marginTop: '3rem' }}>
      <Col xl={4} md={8} sm={8} style={{ textAlign: 'center' }}>
        <img alt="author" src={authorImg} className="author-avatar" />
      </Col>
      <Col xl={8} md={16} sm={16}>
        <h3 style={{ fontFamily: 'GloberSemiBold' }}>Hi, I'm Gustavo.</h3>
        <p>
          I'm a Brazilian software developer living in Brazil (yeah we have computers and programmers here in Brazil, not only forests ;P).
        </p>
        <p>
          I'm a Computer Science bachelor and I've been working with software development for about 6 years now and that's something I really love doing... The feeling when you start and finish your work, especially when you see people using your apps or any stuff you build is just amazing. I live for it!
        </p>
        <p>
          For almost my entire career I've worked with frontend apps, mainly with Javascript, React, Java for Android and iOS swift, so, despite I have some knowledge on nodejs servers, spring boot java applications and some other stuff, frontend combined with UX is really my world and my passion.
        </p>
        <p>
          I'm currently writing tutorials helping developers build great apps, and I post a lot of this journey on my Instagram (instagram.com/gustavocodes), so you are so welcome to join our community.
        </p>
        <p>
          I also am mentoring some coders out there on weekly meetings, if you are interested on that please feel free to contact me at gustavocodes@outlook.com so we can book a call.
        </p>
        <p>
          Happy coding!
        </p>
      </Col>
    </Row>
  </Container>
)

export default Home
