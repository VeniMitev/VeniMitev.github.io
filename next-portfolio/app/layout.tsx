import Script from 'next/script';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Veni Mitev | Web Developer',
    description:
        'Full-Stack developer | Product Manager | Photographer | Traveler',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head />
            <div className='container'>
                <Script src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' />
                <Script id='google-analytics'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                
                        gtag('config', 'G-M92XJM9NT6');
                    `}
                </Script>
            </div>
            <body
                style={{
                    backgroundImage: `url('/background_ocean.svg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    transition: 'background-image 1s ease-in-out',
                }}
                className='flex min-h-screen transform flex-col overflow-y-scroll transition duration-700'
            >
                <NavBar />

                {children}

                <Footer />
            </body>
        </html>
    );
}
