

import Body from '../components/Body';
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
    return (
        <html lang='en'>
            <head />
            <Body>
                {children}
            </Body>
        </html>
    );
}
