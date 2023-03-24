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
                <Icons />
                <p className='my-6 max-w-prose mx-auto'>
                    I have a Professional Certificate in Full Stack Development
                    with MERN Stack from Massachusetts Institute of Technology.
                </p>
                <p className='my-6 max-w-prose mx-auto'>
                    In addition to my technical skills, I have experience in
                    product management, CMS support, and event coordination, and
                    I&apos;m passionate about nature conservation and wildlife
                    rehabilitation.
                </p>
                <p className='my-6 max-w-prose mx-auto'>
                    Check out my portfolio to see some of the projects I&apos;ve
                    worked on, and feel free to get in touch if you have any
                    questions or would like to collaborate on a project.
                </p>
            </section>
        </div>
    );
}
