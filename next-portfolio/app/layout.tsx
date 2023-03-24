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

    const backgroundStyle = {
        backgroundImage: `url('/background.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    }

    return (
        <html lang='en'>
            <head />
            <body style={backgroundStyle} className='flex flex-col min-h-screen transform transition duration-700'>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
