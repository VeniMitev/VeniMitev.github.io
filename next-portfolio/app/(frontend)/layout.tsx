import Script from 'next/script';
import '../globals.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import {
    getExperiences,
    getHomePage,
    getTechnologies,
} from '../../sanity/sanity-utils';
import generateRichDataExperiences from '../_utils/generateRichDataExperiences.ts';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const homePage = await getHomePage();

    const experiences = await getExperiences();
    const technologies = await getTechnologies();

    const schema = generateRichDataExperiences({
        experiences,
        homePage,
        technologies,
    });

    return (
        <html lang='en'>
            <head />
            <body
                style={{
                    backgroundImage: `url('/background_ocean.svg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    transition: 'background-image 1s ease-in-out',
                }}
                className='min-h-screen transform overflow-y-scroll transition duration-700 w-full'
            >
                <main className='flex flex-col mx-auto justify-center align-middle max-w-screen-2xl min-h-screen'>
                    <NavBar />

                    {children}

                    <Footer />
                </main>
            </body>

            <Script src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' />
            <Script id='google-analytics'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
            
                    gtag('config', 'G-M92XJM9NT6');
                `}
            </Script>

            <Script
                id='person-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: schema }}
            />
        </html>
    );
}
