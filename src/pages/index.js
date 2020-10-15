import React from "react"
import { Link } from "gatsby" 
import Header from "../components/header"
export default function Home() {
  return (
    <div style = {{color : `purple`}}>
      <Link to = "/contact/"> Click Here </Link>
      <Header headerText = "Introduction Page" />
      <p> What a World? </p>
      <img src = "https://source.unsplash.com/random/400x100" alt = ""/>
      </div>
  )
} 
