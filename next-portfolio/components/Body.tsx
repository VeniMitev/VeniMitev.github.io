'use client';
import Footer from './Footer';
import NavBar from './NavBar';
import React, { useEffect, useState } from 'react';

type Mood = 'main' | 'ocean' | 'forrest';

const Body = ({ children }: { children: React.ReactNode }) => {
    const [mood, setMood] = useState<Mood>('ocean');

    useEffect(() => {
        const storedMood =
            typeof window !== 'undefined' &&
            window.localStorage.getItem('mood');

        if (storedMood) {
            setMood((storedMood as Mood) || 'ocean');
        }
    }, []);

    const handleThemeChange = () => {
        if (typeof window === 'undefined') return;

        if (mood === 'main') {
            setMood('ocean');
            localStorage.setItem('mood', 'ocean');
        } else if (mood === 'ocean') {
            setMood('forrest');
            localStorage.setItem('mood', 'forrest');
        } else {
            localStorage.setItem('mood', 'ocean');
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
            className='flex min-h-screen transform flex-col overflow-y-scroll transition duration-700'
        >
            <NavBar handleThemeChange={handleThemeChange} mood={mood} />

            {children}
            
            <Footer />
        </body>
    );
};

export default Body;
