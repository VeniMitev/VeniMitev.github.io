'use client';
import Footer from './Footer';
import NavBar from './NavBar';
import React, { useState } from 'react';

type Mood = 'ocean' | 'forrest';

const Body = ({ children }: { children: React.ReactNode }) => {
    const [mood, setMood] = useState<Mood>(() => {
        const storedMood = window.localStorage.getItem('mood');
        return storedMood ? (storedMood as Mood) : 'ocean';
    });

    const handleThemeChange = () => {
        if (mood === 'ocean') {
            setMood('forrest');
            window.localStorage.setItem('mood', 'forrest');            
        } else {
            window.localStorage.setItem('mood', 'ocean');
            setMood('ocean');
        }
    };

    const backgroundStyle = {
        backgroundImage: `url('/background_${mood}.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    return (
        <body
            style={backgroundStyle}
            className='flex flex-col min-h-screen overflow-y-scroll transition duration-700 transform'
        >
            <NavBar handleThemeChange={handleThemeChange} mood={mood} />
            {children}
            <Footer />
        </body>
    );
};

export default Body;
