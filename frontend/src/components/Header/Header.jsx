import React from 'react'
import logo from "../../assets/logo/logo_blanco-re.png";
const Header = () => {

  const backgroundStyle = {
    backgroundImage:
      "linear-gradient(55deg, rgb(0,9,16) 0%, rgba(167, 179, 214, 0.15) 100%), linear-gradient(145deg, rgb(3,38,65), rgb(11,91,143))",
  };

  return (
    <div  style={backgroundStyle} className='w-screen h-32 border-b-[2px] border-gray-600 flex justify-center items-center'>
      <img className='w-28' src={logo} alt="logo" />
    </div>
  )
}

export default Header
