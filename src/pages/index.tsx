import * as React from "react"
import {StaticImage}  from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import './index.scss'
// markup

const DEFENDING_CHAMPION="TEJESH REDDY";

const IndexPage = () => {
  return (
    <main>
       <Helmet>
          <meta charSet="utf-8" />
          <title>👑 SPAM KING 👑 {DEFENDING_CHAMPION} 👑</title>
          <meta name="description" content={"Official Website of the Spam-King tournament by Abhinay. Current Winner is "+DEFENDING_CHAMPION}></meta>
        </Helmet>
      <title>Spam King</title>
      <div id="main">
        <div id="wrapper">
          <h1 id="spamKingHeading">👑 SPAM KING 👑</h1>
          <img id="monkeyImage" src="https://c.tenor.com/Cdqmy1r5U6AAAAAM/monkey-typing.gif" alt="Typing Monkey"/>
          <h2 id="defendingChampionName">{DEFENDING_CHAMPION}</h2>
          <div>Next contest soon! Stay tuned on whatsapp group!</div>

        </div>
      </div>
    </main>
  )
}

export default IndexPage
