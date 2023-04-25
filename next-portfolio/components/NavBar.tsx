'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
                <button
                    className='flex items-center rounded border text-gray-700 hover:border-blue-500 hover:text-blue-500'
                    onClick={() => handleThemeChange()}
                >
                    <span className='invisible h-0 w-0 select-none p-0 md:visible md:mx-6 md:h-auto md:w-auto md:py-2 md:px-3'>
                        Switch to {mood === 'ocean' ? 'Forrest' : 'Ocean'}
                    </span>
                    <span className='visible h-auto w-auto select-none p-1 md:invisible md:m-0 md:h-0 md:w-0 md:p-0'>
                        {mood === 'ocean' ? '🌲' : '🌊'}
                    </span>
                </button>
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
