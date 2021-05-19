import React from 'react'
import styled from "./Header.module.css"

const Header = () => {

  return (
     <div className={styled.flex}>
      <div className={styled.div1}>
      <img className={styled.img} src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Todoist_logo.png" alt=""/>
      </div>
      <div className={styled.div}>
          <button>Features</button>
      </div>
      <div className={styled.div}>
          <button>Templates</button>
      </div>
      <div className={styled.div}>
          <button>For Teams</button>
      </div>
      <div className={styled.div}>
          <button>Resources</button>
      </div>
      <div className={styled.div}>
          <button>Pricing</button>
      </div>
      <div className={styled.div}>
          <button>Log In</button>
      </div>
      <div className={styled.div}>
          <button>Sign Up</button>
      </div>
     </div>
  )
}

export default Header
