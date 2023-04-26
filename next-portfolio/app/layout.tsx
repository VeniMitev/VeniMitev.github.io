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
            <Body>
                {children}
                <Analytics />
            </Body>
        </html>
    );
}
