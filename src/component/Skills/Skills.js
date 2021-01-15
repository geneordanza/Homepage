import React from 'react'

import BodyTemplate from '../BodyTemplate'

const Skills = () => (
  <BodyTemplate title={'Skills'}>
    <h4 className="subheading mb-2">Programming Languages</h4>
    <ul className="fa-ul mb-3">
      <li>
        <i className="fa-li fa fa-check"></i>JavaScript
      </li>
      <li>
        <i className="fa-li fa fa-check"></i>Python
      </li>
      <li>
        <i className="fa-li fa fa-check"></i>Bash
      </li>
      <li>
        <i className="fa-li fa fa-check"></i>VimScript
      </li>
    </ul>

    <h4 className="subheading mb-2">Tools, Libraries and Backend</h4>
    <ul className="fa-ul mb-3">
      <li>
        <i className="fa-li fa fa-check"></i>Linux
      </li>
      <li>
        <i className="fa-li fa fa-check"></i>Amazon Web Services (AWS)
      </li>
      <li>
        <i className="fa-li fa fa-check"></i>React / NodeJS
      </li>
      <li>
        <i className="fa-li fa fa-check"></i>Bootstrap
      </li>
      <li>
        <i className="fa-li fa fa-check"></i>Git
      </li>
      <li>
        <i className="fa-li fa fa-check"></i>Vim
      </li>
    </ul>

    <h4 className="subheading mb-2">Blog/Old Writings</h4>
    <ul className="fa-ul mb-3">
      <li>
        <i className="fa-li fa fa-edit"></i>
        <a href="http://geneordanza.blogspot.com/">Barracuda Running  </a>
        <span className="ml-1">Running, Open Source and Everyday Life</span>
      </li>
      <li>
        <i className="fa-li fa fa-edit"></i>
        <a href="http://runopensource.blogspot.com/">Running Open Source</a>
        <span className="ml-1">Technical Writing</span>
      </li>
    </ul>
  </BodyTemplate>
)

export default Skills
