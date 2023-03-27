import React from 'react';

export const metadata = {
    title: 'Projects | Veni Mitev | Web Developer',
    description:
        'Projects me - Veni Mitev: Full-Stack developer | Product Manager | Photographer | Traveler',
};

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
    return <article>{children}</article>;
};

export default ProjectsLayout;
