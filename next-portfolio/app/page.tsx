import Image from 'next/image';
import Icons from '../components/Icons';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Image
                className='rounded-full'
                src='/BioPic.jpg'
                alt='Veni Mitev - Web developer'
                width={300}
                height={300}
            />

            <section className='mx-10 my-2 text-center'>
                <h1 className='my-6'>
                    <span className='text-4xl font-bold'>
                        Hi, I&apos;m Veni Mitev
                    </span>
                </h1>
                <h2 className='my-6'>
                    <span className='text-2xl font-semibold'>
                        Full Stack Web Developer | Product Manager
                    </span>
                </h2>
            </section>

            <section className='my-14 max-w-screen-md'>
                <Icons />
            </section>

            <section className='mx-10 my-2 '>
                <h2 className='my-6 text-center'>
                    <span className='text-2xl font-semibold'>About Me</span>
                </h2>
                <p className='my-6 mx-auto max-w-screen-md text-base'>
                    I have a Professional Certificate in Full Stack Development
                    with MERN Stack from Massachusetts Institute of Technology.
                    I am passionate about delivering innovative solutions that
                    meet user needs and exceed expectations. With experience in
                    product management and CMS support, I have a deep
                    understanding of how to develop and deliver high-quality
                    products that meet business goals.
                </p>
                <p className='my-6 mx-auto max-w-screen-md text-base'>
                    In addition to my technical skills, I have experience in
                    product management, CMS support, and event coordination.
                    When I&apos;m not working on web development, I am actively
                    involved in nature conservation and wildlife rehabilitation
                    efforts. I believe in using my skills to make a positive
                    impact in the world and contribute to the betterment of our
                    planet.
                </p>
                <p className='my-6 mx-auto max-w-screen-md text-base'>
                    Check out my portfolio to see some of the projects I&apos;ve
                    worked on, and feel free to get in touch if you have any
                    questions or would like to collaborate on a project.
                </p>
            </section>

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
