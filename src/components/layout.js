import React from "react"
import Header from './header';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react'


const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          
          html {
            font-size: 62.5%;
          }
          body {
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
            background: #001a30;
          }
          h1 {
            font-family: 'Roboto', sans-serif;

          }
          h1,h2,h3{
            margin: 0;
            line-height: 1.5;
          }
          h2{
            font-family: 'PT Sans Narrow', sans-serif ;
          }
          ul{
            list-style: none;
            margin: 0;
            padding: 0;

          }

        `}
      />
      <Helmet>
        <title>RB Oficial site</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
      </Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
      <Header />
      {props.children}
    </>
  )
}



export default Layout
