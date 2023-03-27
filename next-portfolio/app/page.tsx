import Image from 'next/image';
import Icons from '../components/Icons';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Image
                draggable={false}
                className='rounded-full select-none'
                src='/BioPic.jpg'
                alt='Veni Mitev - Web developer'
                width={300}
                height={300}
            />

            <section className='mx-10 my-2 text-center select-none'>
                <h1 className='my-6'>
                    <span className='text-4xl font-bold'>
                        Hi, I&apos;m Veni Mitev
                    </span>
                </h1>
                <h2 className='my-6'>
                    <span className='text-2xl font-semibold'>
                        Full Stack Web Developer | Product Manager |
                        Photographer
                    </span>
                </h2>
            </section>

            <section className='max-w-screen-md my-14'>
                <Icons />
            </section>

            <section className='mx-10 my-2 '>
                <h2 className='my-6 text-center'>
                    <span className='text-2xl font-semibold'>About Me</span>
                </h2>
                <p className='max-w-screen-md mx-auto my-6 text-base'>
                    Welcome to my web developer portfolio! I am a skilled web
                    developer with a passion for creating innovative solutions
                    that exceed user expectations. I have a Professional
                    Certificate in Full Stack Development with MERN Stack from
                    Massachusetts Institute of Technology. With experience in
                    product management and CMS support, I have a deep
                    understanding of how to develop and deliver high-quality
                    products that meet business goals.
                </p>
                <p className='max-w-screen-md mx-auto my-6 text-base'>
                    With experience in product management, CMS support, and
                    event coordination, I have a versatile skill set that allows
                    me to take on a range of projects. When I&#39;m not coding,
                    you can often find me exploring off-the-beaten-path
                    destinations, capturing life&#39;s moments through my
                    photography and videography skills, and volunteering in
                    nature conservation and wildlife rehabilitation efforts. I
                    believe in using my skills to make a positive impact in the
                    world and contribute to the betterment of our planet.
                </p>
                <p className='max-w-screen-md mx-auto my-6 text-base'>
                    Please take a look at my portfolio to see some of the
                    projects I&#39;ve worked on, and feel free to reach out if
                    you have any questions or if you&#39;d like to collaborate
                    on a project together.
                </p>
            </section>

            <section className='mx-10 my-2 '>
                <h2>
                    <span className='text-2xl font-semibold text-center'>
                        Learn more about me
                    </span>
                </h2>
                <iframe
                    className='w-full mx-auto my-6 select-none'
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
