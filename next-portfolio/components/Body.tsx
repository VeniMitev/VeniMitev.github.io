'use client'
import Footer from './Footer';
import NavBar from './NavBar';
import React, { useState } from 'react'

type Mood = 'ocean' | 'forrest';

const Body = ({children} : {children: React.ReactNode;}) => {
    const [mood, setMood] = useState<Mood>('ocean')

    const handleThemeChange = () => {
      console.log('here')

      if (mood === 'ocean') {
          console.log('here-2')
          setMood('forrest')
      } else {
          console.log('here-3')
          setMood('ocean')
      }
  }

    const backgroundStyle = {
        backgroundImage: `url('/background_${mood}.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

  return (
    <body style={backgroundStyle} className='flex flex-col min-h-screen transition duration-700 transform'>
        <NavBar handleThemeChange={handleThemeChange} />
        {children}
        <Footer />
    </body>
  )
}

export default Body