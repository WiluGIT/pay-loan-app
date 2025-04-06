"use client";

import React from 'react'
import DirectoryCard from './DirectoryCard'
import Image from "next/image";
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';

export default function Hero() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const handleContactSubmit = (contactData: any) => {
        console.log('Contact info submitted:', contactData);
        // Handle the contact data (e.g., save to database)
    };

    const handleButtonClick = () => {
        console.log('dupa')
        scrollToSection("lead");
    }
    return (
        <section className='mx-auto container relative'>
            {/* <div className='mx-auto max-w-[1300px] h-[700px] bg-auto bg-no-repeat bg-[position:46%_100%] bg-[url(https://kredytnachwilowki.pl/wp-content/uploads/2023/03/gfx_hero_bg.png)]'> */}
            <div className='mx-auto xl:h-[700px]'>
                <div className='h-full flex flex-col xl:flex-row xl:justify-between justify-center items-center'>
                    <div className='w-[80%] xl:w-[350px] my-5 xl:my-0'>
                        <h1 className='text-5xl text-center mb-5 font-bold'>
                            <span>Pomożemy Ci spłacić chwilówki!</span>
                        </h1>
                        <div className='mb-5'>
                            <span className='flex flex-col gap-1'>
                                <p>
                                    Chcesz pozbyć się problemu ze spłatą chwilówek? Skorzystaj z naszej oferty  taniego kredytu bankowego na spłatę zobowiązań. Wieloletnie doświadczenie w branży finansowej pozwoliło nam na dopasowanie oferty na miarę potrzeb każdego klienta.
                                </p>
                                <p>
                                    <b> Z naszą pomocą pozbędziesz się kłopotliwych chwilówek i poprawisz swoją sytuację finansową.</b>
                                </p>
                            </span>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                onClick={handleButtonClick}
                            >
                                Złóż wniosek
                            </button>
                        </div>
                    </div>
                    <div className='relative h-[500px] xl:h-full xl:absolute w-full z-[-1]'>
                        <Image
                            src="/pan.png"
                            alt="Company Logo"
                            fill
                            priority
                            //height={500}
                            //width={100}
                            quality={90}
                            style={{
                                objectFit: 'contain'
                            }}
                            className="transition-opacity"
                        />
                    </div>
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className='w-[80%] xl:w-[350px]'
                    >
                        <div className='w'>
                            <DirectoryCard
                                title="Wypełnij formularz"
                                subtitle="Niezwłocznie się z Tobą skontaktujemy!"
                                onSubmit={handleContactSubmit}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
