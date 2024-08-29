'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SetStateAction, useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

type Mood = 'main' | 'ocean' | 'forrest';

const menuItems = [
    // { href: '/', text: 'Home' },
    { href: '/experience', text: 'Experience' },
    { href: '/projects', text: 'Projects' },
    { href: '/contact', text: 'Contact' },
];

const NavBar = () => {
    const [enabled, setEnabled] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const pathname = usePathname();

    const [mood, setMood] = useState<Mood>('ocean');

    const [isScroll, setIsScroll] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 185.5) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useEffect(() => {
        const storedMood =
            typeof window !== 'undefined' &&
            window.localStorage.getItem('mood');

        document.body.style.backgroundImage = `url('/background_${
            storedMood || 'ocean'
        }.svg')`;

        if (storedMood) {
            setMood((storedMood as Mood) || 'ocean');
        }
    }, []);

    const handleThemeChange = () => {
        if (typeof window === 'undefined') return;

        if (mood === 'main') {
            setMood('ocean');

            document.body.style.backgroundImage = `url('/background_ocean.svg')`;

            localStorage.setItem('mood', 'ocean');
        } else if (mood === 'ocean') {
            setMood('forrest');

            document.body.style.backgroundImage = `url('/background_forrest.svg')`;

            localStorage.setItem('mood', 'forrest');
        } else {
            localStorage.setItem('mood', 'ocean');

            document.body.style.backgroundImage = `url('/background_ocean.svg')`;

            setMood('ocean');
        }
    };

    const backgroundStyle = {
        // backgroundImage: `url('/background_${mood}.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    if (pathname.includes('/studio')) {
        return null;
    }

    return (
        <nav
            className={twMerge(
                'sticky top-0 z-50 flex flex-col items-center sm:items-start lg:p-2 md:px-4 md:py-3 md:flex-row md:justify-between',
                (isScroll && 'scale-90 bg-transparent backdrop-blur-lg shadow-md rounded-lg p-0 lg:p-0 md:p-0') || '',
                'transition-all duration-300 ease-in-out'
            )}
        >
            <div
                className={twMerge(
                    'z-50 flex justify-center w-full md:w-fit flex-row divide-x-2 bg-white rounded-lg py-2 md:py-4 shadow-sm items-center',
                    (isScroll && 'bg-transparent shadow-none') || '',
                    mood === 'ocean' ? 'divide-blue-400' : 'divide-green-400'
                )}
            >
                <Link className='grow px-4 sm:px-5' href='/'>
                    <h1 className='tracking-wide select-none text-2xl font-semibold uppercase text-gray-700 md:text-3xl lg:text-4xl'>
                        Veni Mitev
                    </h1>
                </Link>

                <div className='flex items-center px-4 sm:px-5'>
                    <Switch
                        checked={enabled}
                        onChange={() => handleThemeChange()}
                        className={twMerge(
                            'relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
                            mood === 'ocean' ? 'bg-blue-300' : 'bg-green-400'
                        )}
                    >
                        <span className='sr-only'>Change Mood</span>
                        <span
                            aria-hidden='true'
                            className={twMerge(
                                'pointer-events-none flex h-7 w-7 transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
                                mood === 'ocean'
                                    ? 'translate-x-6'
                                    : 'translate-x-0'
                            )}
                        >
                            {mood === 'forrest' ? '🌲' : '🌊'}
                        </span>
                    </Switch>
                </div>

                <div className='md:hidden flex align-middle items-center px-2'>
                    <button
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={twMerge(
                            'p-2 rounded-md bg-white shadow-md mx-2',
                            mood === 'ocean'
                                ? 'hover:bg-blue-100'
                                : 'hover:bg-green-100'
                        )}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16m-7 6h7'
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={twMerge(
                    'z-0 absolute top-0 md:top-0 md:relative md:opacity-100 flex mx-auto sm:mx-0 flex-row justify-between md:justify-around w-11/12 md:w-fit items-center content-center divide-x-2 bg-white rounded-md py-2 md:py-4 shadow-sm',
                    (isScroll && 'bg-transparent shadow-none') || '',
                    'transition-all duration-300 ease-in-out',
                    mood === 'ocean' ? 'divide-blue-400' : 'divide-green-400',
                    'transition-all duration-500 ease-in-out',
                    !toggleMenu
                        ? 'opacity-0 translate-y-0'
                        : 'opacity-100 translate-y-16 mx-2 bg-white'
                )}
            >
                {menuItems.map((item) => (
                    <div className='grow w-full text-center px-3' key={item.href}>
                        <NavButton
                            href={item.href}
                            text={item.text}
                            mood={mood}
                            setToggleMenu={setToggleMenu}
                        />
                    </div>
                ))}
            </div>
        </nav>
    );
};
type NavButtonProps = {
    href: string;
    text: string;
    mood: string;
    setToggleMenu: React.Dispatch<SetStateAction<boolean>>;
};

const NavButton = ({ href, text, mood, setToggleMenu }: NavButtonProps) => {
    const pathname = usePathname();

    const cleanPathname = pathname.split('/')[1];

    const cleanHref = href.split('/')[1];

    const hover =
        mood === 'ocean' ? 'hover:text-blue-500' : 'hover:text-green-500';

    const activeOcean =
        cleanPathname === cleanHref
            ? 'text-blue-400 drop-shadow-sm'
            : 'text-gray-700';

    const activeForrest =
        cleanPathname === cleanHref
            ? 'text-green-400 drop-shadow-sm'
            : 'text-gray-700';

    const active = mood === 'ocean' ? activeOcean : activeForrest;

    return (
        <Link
            href={href}
            className={twMerge(
                'md:m-2 select-none text-md font-medium tracking-tight',
                hover,
                active,
                'md:text-2xl lg:m-6'
            )}
            onClick={() => setToggleMenu(false)}
        >
            {text}
        </Link>
    );
};

export default NavBar;
