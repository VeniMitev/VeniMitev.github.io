import React from 'react';
import data from '../../data/experience.json';
import DownloadCV from '../../components/DownloadCV';
import { getExperiences, Experience as ExperienceType } from '../../sanity/sanity-utils';

const Experience = async () => {
    const data = await getExperiences();

    return (
        <>
            <section className='flex flex-col items-center justify-center'>
                <h1 className='my-6 text-center'>
                    <span className='text-3xl font-semibold'>
                        Work Experience
                    </span>
                </h1>
                <DownloadCV />

                {data.map((item) => (
                    <>
                        {!item.volunteer && (
                            <Section key={item.title} data={item} />
                        )}
                    </>
                ))}
            </section>
            <section className='flex flex-col items-center justify-center'>
                <h1 className='my-6 text-center'>
                    <span className='text-3xl font-semibold'>
                        Volunteer Experience
                    </span>
                </h1>

                {data.map((item) => (
                    <>
                        {item.volunteer && (
                            <Section key={item.title} data={item} />
                        )}
                    </>
                ))}
            </section>
        </>
    );
};

type SectionProps = {
    data: ExperienceType;
};

const Section = ({ data }: SectionProps) => {
    return (
        <div className='m-4'>
            <h2 className='text-lg font-medium'>{data.title}</h2>
            <h3 className='text-md underline underline-offset-2'>
                {data.subTitle}
            </h3>
            <ul className='mx-auto my-3 max-w-prose px-6 text-base'>
                {data.description.map((item: string, index) => (
                    <li key={index} className='my-2 list-disc'>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
