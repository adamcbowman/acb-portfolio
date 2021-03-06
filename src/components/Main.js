import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import selfie from '../images/selfie.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ACB Consulting</h2>
          <p>adambowman.tech</p>
          <span className="image main">
            <img src={selfie} alt="" />
          </span>
          <h1>Adam Bowman</h1>
          <h4>Developer</h4>
          
          <p>
            I develop systems that automate and simplify business and life for
            small businesses and their clients. I am passionate about
            implementing solutions and solving problems. I am proficient in
            Javascript, React, Node and Shopify development.
          </p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            By day I'm an IT Consultant with focus on configuration of Supply
            Chain Risk tooling. I have previously worked on support and
            development projects in Oil and Gas, and retail. I have extensive
            experience maintaining and supporting highly integrated Enterprise
            applications and systems.
          </p>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            My side hustle is as a freelance web developer with a specialization
            in Shopify theme customizations for small business clients.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <ul>
            <li>Skier</li>
            <li>Sailor</li>
            <li>Cyclist</li>
            <li>Coffee snob</li>
            <li>Scotch lover</li>
            <li>Craft beer afficianado</li>
            <li>Peanut butter addict</li>
          </ul>

          <span className="image main">
            <img src={pic03} alt="" />
            <img src={pic01} alt="" />
            <img src={pic02} alt="" />
          </span>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            action="https://getform.io/f/b161bc87-f720-4a9b-8633-7feaab84cffe"
            method="post"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="You can also email me directly at adamcbowman@gmail.com."
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/adamcbowman"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/adamcbowman"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adamcbowman"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adamcbowman1983/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
