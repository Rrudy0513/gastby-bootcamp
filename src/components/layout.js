import React from "react"
import Footer from "./footer"
import Headers from "./header"
import layoutStyle from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Headers />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
