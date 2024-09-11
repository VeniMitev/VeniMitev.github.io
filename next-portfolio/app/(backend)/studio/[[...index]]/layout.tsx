import React from 'react';

export const metadata = {
    title: 'Studio | Veni Mitev | Web Developer',
    description:
        'Studio - Veni Mitev: Full-Stack developer | Product Manager | Photographer | Traveler',
};

const StudioLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
};

export default StudioLayout;
