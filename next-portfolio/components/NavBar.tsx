'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

const menuItems = [
    { href: '/', text: 'Home' },
    { href: '/experience', text: 'Experience' },
    { href: '/projects', text: 'Projects' },
    { href: '/contact', text: 'Contact' },
];

const NavBar = ({
    handleThemeChange,
    mood,
}: {
    handleThemeChange: Function;
    mood: string;
}) => {
    const [enabled, setEnabled] = useState(false);
    const pathname = usePathname();

    if (pathname.includes('/studio')) {
        return null;
    }

    return (
        <nav className='flex flex-col items-center px-4 py-3 md:flex-row md:justify-between'>
            <div className='flex w-full justify-evenly gap-10 text-center md:w-fit md:justify-start'>
                <Link href='/'>
                    <h1 className='select-none text-2xl font-semibold tracking-tight text-gray-700 md:text-3xl lg:text-4xl'>
                        VeniMitev.dev
                    </h1>
                </Link>
                <div className='flex items-center px-1'>
                    <Switch
                        checked={enabled}
                        onChange={() => handleThemeChange()}
                        className={`${
                            mood === 'ocean' ? 'bg-blue-300' : 'bg-green-400'
                        } relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                        <span className='sr-only'>Change Mood</span>
                        <span
                            aria-hidden='true'
                            className={`${
                                mood === 'ocean' ? 'translate-x-6' : 'translate-x-0'
                            } pointer-events-none flex h-7 w-7 transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        >
                            {mood === 'forrest' ? '🌲' : '🌊'}
                        </span>
                    </Switch>
                </div>
            </div>

            <div className='flex justify-around gap-5 text-center md:justify-center'>
                {menuItems.map((item) => (
                    <NavButton
                        key={item.href}
                        href={item.href}
                        text={item.text}
                        mood={mood}
                    />
                ))}
            </div>
        </nav>
    );
};

type NavButtonProps = {
    href: string;
    text: string;
    mood: string;
};

const NavButton = ({ href, text, mood }: NavButtonProps) => {
    const pathname = usePathname();

    const hover =
        mood === 'ocean' ? 'hover:text-blue-500' : 'hover:text-green-500';

    const activeOcean =
        pathname === href ? 'text-blue-400 drop-shadow-sm' : 'text-gray-700';

    const activeForrest =
        pathname === href ? 'text-green-400 drop-shadow-sm' : 'text-gray-700';

    const active = mood === 'ocean' ? activeOcean : activeForrest;

    return (
        <Link
            href={href}
            className={`m-2 select-none text-sm font-medium tracking-tight ${hover} ${active} md:text-lg lg:m-6 lg:text-lg`}
        >
            {text}
        </Link>
    );
};

export default NavBar;
