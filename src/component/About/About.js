import React from 'react'

import BodyTemplate from '../BodyTemplate'

const About = () => (
  <BodyTemplate title={'About Me'}>
    <p className="subheading mb-4">
      Hi! My name is Gene. Aspiring chef, surfer, web developer and
      All-Around Mr. Nice Guy!
    </p>
    <br />
    <p className="lead text-center">
      You can reach me at
      <a href="mailto:gene.ordanza@gmail.com"> gene.ordanza@gmail.com</a>
    </p>
  </BodyTemplate>
)

export default About
