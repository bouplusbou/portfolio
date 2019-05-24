import React from "react"
import ReactLogo from "../components/react-logo"
import NodeLogo from "../components/node-logo"

export default () => (
  <div style={{ color: `black` }}>    
    <h1>Hi <span>👋</span>,</h1>
    <p>I'm Baptiste Boucher a french CS student <a href="https://twitter.com/42born2code">@42</a> </p>
    <p>Current focus:</p>
    <div style={{ maxWidth: `100px`}}>
      <ReactLogo />
      <NodeLogo />
    </div>
    <a style={{color: `black`, textDecoration: `none`}} href="https://github.com/bouplusbou">github</a> <br/>
    <a style={{color: `black`, textDecoration: `none`}} href="https://github.com/bouplusbou">linkedin</a> <br/>
    <a style={{color: `black`, textDecoration: `none`}} href="https://github.com/bouplusbou">email</a> <br/>
  </div>
)