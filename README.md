# My Portfolio Website build with React Boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/Mensae/portfolio-react-boilerplate.svg)](https://greenkeeper.io/)

<div align="center">
  <!-- Build Status -->
  <a href="https://travis-ci.org/Mensae/portfolio-react-boilerplate">
    <img src="https://travis-ci.org/Mensae/portfolio-react-boilerplate.svg" alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/Mensae/portfolio-react-boilerplate">
    <img src="https://coveralls.io/repos/github/Mensae/portfolio-react-boilerplate/badge.svg" alt="Test Coverage" />
  </a>
</div>

## Background Information

My [original](https://github.com/Mensae/portfolio-react) portfolio website now build upon react-boilerplate. This to 
get practise with Redux, Saga, Reselect and lots of testing with Enzyme.

### Packages:

Using:

- [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) as boilerplate.
- [font-awesome](http://fontawesome.io/) for the icons.
- [Snap.svg](http://snapsvg.io/) for svg animation.

And on the back-end:

- [nginx](https://nginx.org/) As front-facing server.
- [ExpressJS](https://expressjs.com/)

### Content Management

As CMS I use [contentful](https://www.contentful.com/)

### Inspiration:

- [Annual report brochure on geometric and spots background](http://all-free-download.com/free-vector/download/annual-report-brochure-on-geometric-and-spots-background_6823285.html)
- [Flyer template design with modern style](http://all-free-download.com/free-vector/download/flyer_template_design_with_modern_style_6824365.html)
- [Inspiration for Button Styles and Effects](https://tympanus.net/codrops/2015/02/26/inspiration-button-styles-effects/)

### Other

To be able to use Snap.svg, I had to eject from Create React App as the timing function used by Snap.svg, mina, needs to
 be globally loaded. Therefore a webpack modification is needed.
Still, Snap.svg is the best free package for this task, especially for morphing as this is quite a complex task.

### Reads

- [Full Stack React](https://www.fullstackreact.com/) Great book to learn React
- [How to make Google Analytics work in a Single Page Application (SPA)](http://tech.webinterpret.com/how-to-make-google-analytics-work-in-a-single-page-application-spa/)
- [How to Install and Configure Postfix on Ubuntu 16.04](https://poweruphosting.com/blog/how-to-install-and-configure-postfix-on-ubuntu-16-04-2/)
- [Running a Production Server](https://react-server.io/docs/guides/production)
- [OWASP Secure Configuration Guide](https://www.owasp.org/index.php/SCG_WS_nginx)

