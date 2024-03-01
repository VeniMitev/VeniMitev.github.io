import Script from 'next/script';
import Body from '../components/Body';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

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
            <div className="container">
                <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                
                        gtag('config', 'G-M92XJM9NT6');
                    `}
                </Script>
            </div>
            <Body>
                {children}
                <Analytics />
            </Body>
        </html>
    );
}
