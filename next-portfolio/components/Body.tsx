'use client'
import Footer from './Footer';
import NavBar from './NavBar';
import React, {  } from 'react'

type Mood = 'ocean' | 'forrest';

const Body = ({children} : {children: React.ReactNode;}) => {
    const [mood, setMood] = useState()

    console.log(mood)

    const backgroundStyle = {
        backgroundImage: `url('/background_${mood}.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

  return (
    <body style={backgroundStyle} className='flex flex-col min-h-screen transition duration-700 transform'>
        <NavBar mood={mood} />
        {children}
        <Footer />
    </body>
  )
}

export default Body