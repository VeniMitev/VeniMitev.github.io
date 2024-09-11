import React from 'react';
import DownloadCV from '../../../components/DownloadCV';
import {
    getExperiences,
    Experience as ExperienceType,
} from '../../../sanity/sanity-utils';

const Experience = async () => {
    const data = await getExperiences();

    const volunteerData = data.filter((item) => item.volunteer);

    const workData = data.filter((item) => !item.volunteer);

    return (
        <>
            <section className='flex flex-col items-center justify-center'>
                <h1 className='my-6 text-center'>
                    <span className='text-3xl font-semibold'>
                        Work Experience
                    </span>
                </h1>
                <DownloadCV />

                {workData
                    .sort((a, b) => a.sort - b.sort)
                    .map((item, index) => (
                        <div
                            key={index}
                            className={
                                index % 2 !== 0
                                    ? 'md:-translate-x-6'
                                    : 'md:translate-x-6'
                            }
                        >
                            <Section data={item} />
                        </div>
                    ))}
            </section>
            <section className='my-24 flex flex-col items-center justify-center'>
                <h1 className='my-5 text-center'>
                    <span className='text-3xl font-semibold'>
                        Volunteer Experience
                    </span>
                </h1>

                {volunteerData
                    .sort((a, b) => a.sort - b.sort)
                    .map((item, index) => (
                        <div
                            key={index}
                            className={
                                index % 2 === 0
                                    ? 'md:translate-x-6'
                                    : 'md:-translate-x-6'
                            }
                        >
                            <Section data={item} />
                        </div>
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
        <div className='mx-2 my-4 transform rounded-xl bg-gray-50 px-4 py-3 shadow-lg transition duration-500 ease-in-out hover:bg-white lg:m-4 lg:px-6'>
            <h2 className='text-lg font-medium'>{data.title}</h2>
            <h3 className='text-md underline underline-offset-2'>
                {data.subTitle}
            </h3>
            <ul className='mx-auto my-3 max-w-prose px-4 text-base'>
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
