import React from 'react'
import { IconType } from 'react-icons';

interface WhyUsCardProps {
    title: string;
    content: string;
    Icon: IconType;
}


export default function WhyUsCard({ title, content, Icon }: WhyUsCardProps) {
    return (
        <div className='flex flex-row'>
            <div>
                <Icon size={120} />
            </div>
            <div className='flex flex-col'>
                <div className='mb-1 font-bold'>
                    <span>{title}</span>
                </div>
                <div>
                    <span>{content}</span>
                </div>
            </div>

        </div>
    )
}
