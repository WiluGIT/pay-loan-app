import React from 'react'
import { IconType } from 'react-icons';

interface StepCardProps {
    title: string;
    subtitle: string;
    Icon: IconType;
}

export default function StepCard({ title, subtitle, Icon }: StepCardProps) {
    return (
        <div className='flex flex-col flex-1 rounded-[20px] bg-white text-black items-center justify-center px-10 py-15 gap-5'>
            <Icon size={80} color='ffa720' />
            <div className='font-bold'>{title}</div>
            <div className='text-center'>{subtitle}</div>
        </div>
    )
}
