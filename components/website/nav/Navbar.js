import React from "react"
import { MainMenuLinks } from "./MainMenuLinks"


const Navbar = ({pageLabel, links}) => {

  return (
    <nav className="w-full">
      <MainMenuLinks pageLabel={pageLabel} links={links} classes='hidden w-full  lg:justify-end lg:items-start lg:flex gap-10 font-como-normal text-dark-grey text-xs lg:text-sm ' />
    </nav>
  )
}


export default Navbar