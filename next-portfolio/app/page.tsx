import Image from 'next/image';
import Icons from '../components/Icons';
import { PortableText } from '@portabletext/react';
import DownloadCV from '../components/DownloadCV';
import { getHomePage, getTechnologies } from '../sanity/sanity-utils';

export default async function Home() {
    const data = await getHomePage();

    return (
        <div className='flex flex-col items-center justify-center'>
            <Image
                draggable={false}
                className='mb-5 mt-10 select-none rounded-full'
                src={data.image.image}
                alt={data.image.alt}
                width={300}
                height={300}
                placeholder='blur'
                blurDataURL={data.image.image}
                priority={true}
            />

            <section className='mx-4 my-2 select-none text-center'>
                <h1 className='my-6'>
                    <span className='text-4xl font-bold'>{data.title}</span>
                </h1>
                <h2 className='my-6'>
                    <span className='text-2xl font-semibold'>
                        {data.subTitle}
                    </span>
                </h2>
            </section>

            <section className='my-10'>
                <Icons />
            </section>

            <section className='m-4 mx-2 my-12 transform rounded-md bg-gray-50 p-4 shadow-lg transition duration-500 ease-in-out hover:bg-white lg:mx-5 lg:p-6'>
                <h2 className='mb-6 text-center'>
                    <span className='text-2xl font-semibold'>About Me</span>
                </h2>

                <div className='rich-text-container my-6 max-w-screen-md'>
                    <PortableText value={data.aboutMe} />
                </div>

                <DownloadCV />
            </section>

            <div className='p-2'>
                <Image
                    draggable={false}
                    className='my-10 select-none rounded-sm shadow-lg'
                    src={data.certification.image}
                    alt={data.certification.alt}
                    width={800}
                    height={800}
                    placeholder='blur'
                    blurDataURL={data.certification.image}
                />
            </div>

            {/* <section className='mx-10 my-2 '>
                <h2>
                    <span className='text-center text-2xl font-semibold'>
                        Learn more about me
                    </span>
                </h2>
                <iframe
                    title='Unpopular Passion Podcast - Veni Mitev'
                    loading='lazy'
                    className='mx-auto my-6 w-full select-none'
                    id='podcast'
                    src='https://open.spotify.com/embed/episode/2A4VXiol7U1mRBaNE2QLMV?utm_source=generator'
                    width='100%'
                    height='300em'
                    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                />
            </section> */}
        </div>
    );
}
