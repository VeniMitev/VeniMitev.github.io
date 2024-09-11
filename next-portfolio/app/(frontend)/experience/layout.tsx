import React from 'react';

export const metadata = {
    title: 'Experience | Veni Mitev | Web Developer',
    description:
        'Experience me - Veni Mitev: Full-Stack developer | Product Manager | Photographer | Traveler',
};

const ExperienceLayout = ({ children }: { children: React.ReactNode }) => {
    return <article className='mb-8'>{children}</article>;
};

export default ExperienceLayout;
