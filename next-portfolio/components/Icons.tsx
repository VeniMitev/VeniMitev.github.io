import Image from 'next/image';
import { getTechnologies } from '../sanity/sanity-utils';

const Icons = async () => {
    const data = await getTechnologies();

    return (
        <>
            <div>
                <h2 className='my-4 select-none text-center text-lg font-medium'>
                    Technologies:
                </h2>
                <div className='grid grid-cols-2 content-center gap-3 md:grid-cols-3 lg:grid-cols-4'>
                    {data
                        .filter((item) => !item.comingSoon)
                        .sort((a, b) => a.sort - b.sort)
                        .map((item) => (
                            <div
                                key={item.title}
                                className='mx-1 inline-flex transform select-none !items-center gap-3 p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:animate-pulse hover:drop-shadow-lg '
                            >
                                <Image
                                    draggable={false}
                                    loading='lazy'
                                    src={item.icon.image}
                                    alt={item.icon.alt}
                                    width={50}
                                    height={50}
                                    placeholder='blur'
                                    blurDataURL={item.icon.image}
                                />
                                <span className='font-sans text-lg font-semibold'>
                                    {item.title}
                                </span>
                            </div>
                        ))}
                </div>
            </div>

            <div className='my-12'>
                <h2 className='my-4 select-none text-center text-lg font-medium'>
                    Coming soon:
                </h2>
                <div className='grid grid-cols-2 content-center gap-3 md:grid-cols-3 lg:grid-cols-4'>
                    {data
                        .filter((item) => item.comingSoon)
                        .sort((a, b) => a.sort - b.sort)
                        .map((item) => (
                            <div
                                key={item.title}
                                className='mx-1 inline-flex transform select-none !items-center gap-3 p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:animate-pulse hover:drop-shadow-lg '
                            >
                                <Image
                                    draggable={false}
                                    loading='lazy'
                                    src={item.icon.image}
                                    alt={item.icon.alt}
                                    width={50}
                                    height={50}
                                    placeholder='blur'
                                    blurDataURL={item.icon.image}
                                />
                                <span className='font-sans text-lg font-semibold'>
                                    {item.title}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default Icons;
