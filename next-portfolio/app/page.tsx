import Image from 'next/image';
import Icons from '../components/Icons';
import data from '../data/homePage.json';
import DownloadCV from '../components/DownloadCV';

export default async function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Image
                draggable={false}
                className='mt-10 mb-5 select-none rounded-full'
                src='/BioPic.jpg'
                alt='Veni Mitev - Web developer'
                width={300}
                height={300}
            />

            <section className='mx-10 my-2 select-none text-center'>
                <h1 className='my-6'>
                    <span className='text-4xl font-bold'>{data.title}</span>
                </h1>
                <h2 className='my-6'>
                    <span className='text-2xl font-semibold'>
                        {data.subtitle}
                    </span>
                </h2>
            </section>

            <section className='my-14 max-w-screen-md'>
                <Icons />
            </section>

            <section className='mx-5 my-2 md:mx-10 '>
                <h2 className='my-6 text-center'>
                    <span className='text-2xl font-semibold'>About Me</span>
                </h2>
                <p className='mx-auto my-6 max-w-screen-md text-base'>
                    {data.aboutMe.paragraphOne}
                </p>
                <p className='mx-auto my-6 max-w-screen-md text-base'>
                    {data.aboutMe.paragraphTwo}
                </p>
                <p className='mx-auto my-6 max-w-screen-md text-base'>
                    {data.aboutMe.paragraphThree}
                </p>
                <DownloadCV />
            </section>

            <Image
                draggable={false}
                className='my-12 select-none'
                src='/MIT_Certificate_Venelin_Mitev.png'
                alt='Professional Certificate in Full Stack Development with MERN Stack from Massachusetts Institute of Technology'
                width={800}
                height={800}
            />

            <section className='mx-10 my-2 '>
                <h2>
                    <span className='text-center text-2xl font-semibold'>
                        Learn more about me
                    </span>
                </h2>
                <iframe
                    className='mx-auto my-6 w-full select-none'
                    id='podcast'
                    src='https://open.spotify.com/embed/episode/2A4VXiol7U1mRBaNE2QLMV?utm_source=generator'
                    width='100%'
                    height='300em'
                    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                />
            </section>
        </div>
    );
}
