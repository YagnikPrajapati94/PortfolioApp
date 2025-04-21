import React from 'react'
import Navbar from './Layouts/Header/Navbar'

const Layout = ({children}) => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer></footer>
    </>
  )
}

export default Layout
