import React from 'react'
import { IconType } from 'react-icons';

interface StepCardProps {
    title: string;
    subtitle: string;
    Icon: IconType;
}

export default function StepCard({ title, subtitle, Icon }: StepCardProps) {
    return (
        <div className='flex flex-col rounded-[20px] bg-[#e9e9e9] text-black items-center px-10 py-5 gap-5 w-full md:h-[330px] lg:h-[300px] xl:h-[380px] 2xl:h-[340px]'>
            <Icon size={80} className='text-[#5280b7]' />
            <div className='font-bold'>{title}</div>
            <div className='text-center'>{subtitle}</div>
        </div>
    )
}
