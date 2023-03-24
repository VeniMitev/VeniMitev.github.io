'use client'

import { useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import './globals.css';

export const metadata = {
    title: 'Veni Mitev | Web Developer',
    description:
        'Full-Stack developer | PRoduct Manager | Photographer | Traveler',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mood, setMood] = useState<'ocean' | 'forrest'>('ocean')

    const backgroundStyle = {
        backgroundImage: `url('/background_${mood}.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    }

    const handleThemeChange = () => {
        if (mood === 'ocean') {
            setMood('forrest')
        } else {
            setMood('ocean')
        }
    }

    return (
        <html lang='en'>
            <head />
            <body style={backgroundStyle} className='flex flex-col min-h-screen transform transition duration-700'>
                <NavBar handleThemeChange={handleThemeChange} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
