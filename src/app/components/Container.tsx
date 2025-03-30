import React from 'react'

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen relative z-0 bg-primary background-gradient flex flex-col">
            {children}
        </div>
    )
}
