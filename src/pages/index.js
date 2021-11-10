import * as React from "react"
import icon from '../images/icon.png';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Home page</h1>
      <img src={icon} />
      <button id='btn' class='click'>Click here</button>
    </main>
  )
}

export default IndexPage
