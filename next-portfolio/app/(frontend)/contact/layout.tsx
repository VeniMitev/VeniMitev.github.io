import React from 'react';

export const metadata = {
    title: 'Contact | Veni Mitev | Web Developer',
    description:
        'Contact me - Veni Mitev: Full-Stack developer | Product Manager | Photographer | Traveler',
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
    return <article className='mb-8'>{children}</article>;
};

export default ContactLayout;
