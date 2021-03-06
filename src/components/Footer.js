import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; <a href="https://adambowman.tech">ACB Consulting </a></p>
        <p className="copyright">Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
        <p className="copyright">Design: <a href="https://html5up.net">HTML5 UP</a>. </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
