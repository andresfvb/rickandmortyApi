import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const Layouts = ({ children, title = '', description = '' }) => {
  return (
    <div>
        <Head>
            <title>{`Rick and Morty - ${title}`}</title>
            <meta name="description" content={description}></meta>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layouts