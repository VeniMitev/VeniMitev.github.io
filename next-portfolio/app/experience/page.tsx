import React from 'react';
import data from '../../data/experience.json';

const Experience = () => {
    return (
        <>
            <section className='flex flex-col items-center justify-center'>
                <h1 className='my-6 text-center'>
                    <span className='text-3xl font-semibold'>
                        Work Experience
                    </span>
                </h1>
                <Section data={data.Twenty7estore} />
                <Section data={data.usBext} />
            </section>
            <section className='flex flex-col items-center justify-center'>
                <h1 className='my-6 text-center'>
                    <span className='text-3xl font-semibold'>
                        Volunteer Experience
                    </span>
                </h1>
                <Section data={data.africa_school} />
                <Section data={data.africa_animals} africaTwo />
                <Section data={data.amorpha} />
            </section>
        </>
    );
};

type SectionProps = {
    title: string;
    subtitle: string;
    list: string[];
};

const Section = ({
    data,
    africaTwo,
}: {
    data: SectionProps;
    africaTwo?: boolean;
}) => {
    return (
        <div className='my-4'>
            {!africaTwo && (
                <h2 className='text-lg font-medium'>{data.title}</h2>
            )}
            <h3 className='text-md underline underline-offset-2'>
                {data.subtitle}
            </h3>
            <ul className='mx-auto my-3 max-w-prose px-6 text-base'>
                {data.list.map((item: string) => (
                    <li key={item.length} className='my-2 list-disc'>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
