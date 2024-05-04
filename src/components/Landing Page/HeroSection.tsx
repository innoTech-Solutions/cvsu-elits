import React from 'react'

{
  /**
   *  JAMESON: It will improve more soon, 
   *  plan to add animation with it
   * 
   *  Feel free to modify the design or layout if you have better design idea!
   * 
   */
}

function HeroSection() {
  return (
    <div className="flex relative">
      <div className="flex-1 bg-gray-200 opacity-50"></div>
      <div className="flex-1 h-screen bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/cvsu.jpg')"}}>
        <div className="absolute top-0 right-10 bg-[#2F3233] w-36 h-48 flex items-center justify-center">
          <img src="logo.svg" alt="Logo" className="w-20 mt-10" />
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 bg-opacity-70 backdrop-blur-md p-20 rounded-md z-20 w-1/2" style={{ left: '35%' }}>
        <h1 className="text-4xl font-bold mb-4">Welcome Tigreans!</h1>
        <p className="text-lg mb-4">Welcome to our school organization's online platform! 
                                    Here, you can stay updated with our latest events, 
                                    connect with fellow members, and explore opportunities for growth and development. 
                                    Let's embark on this exciting journey together!</p>
        <button className="ml-80 bg-orange-500 hover:bg-orange-700 transition duration-300 text-white font-bold py-2 px-6 rounded">Make Account</button>
      </div>
    </div>
  )
}

export default HeroSection