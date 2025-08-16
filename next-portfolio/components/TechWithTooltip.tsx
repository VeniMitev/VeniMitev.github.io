import { Technology } from '@/sanity/sanity-utils';
import React from 'react';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

type Props = {
    technology: Technology;
};

const TechWithTooltip = ({ technology }: Props) => {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Image
                    src={technology.icon.image}
                    alt={technology.icon.alt}
                    loading='lazy'
                    quality={75}
                    width={30}
                    height={30}
                />
            </TooltipTrigger>
            <TooltipContent>
                <p className='text-white!'>{technology.title}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default TechWithTooltip;
