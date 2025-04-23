"use client";

import React from 'react'
import DirectoryCard from './DirectoryCard'
import Image from "next/image";
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';
import { ContactInfo } from '@/types/types';
import { toast } from 'sonner';
import { ELEMENT } from '@/consts/consts';
import { Button } from '@/components/ui/button';
import { supabase } from "@/app/utils/supabaseClient";

export default function Hero() {
    const handleContactSubmit = async (contactData: ContactInfo) => {
        console.log('Contact info submitted:', contactData);

        const { error } = await supabase.from("Leads").insert([contactData]);
        if (error) {
            toast.error('Nie udało się wysłać formularza');
            return;
        }

        toast.success('Formularz wysłany poprawnie');
    }

    const handleButtonClick = () => {
        scrollToSection(ELEMENT.LEAD);
    }

    return (
        <section className='mx-auto container pt-[90px]'>
            <div className='mx-auto xl:h-[700px] relative'>
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
                            <Button onClick={handleButtonClick} className='w-full bg-[#304b6b]' variant={'primary'}>Złóż wniosek</Button>
                        </div>
                    </div>
                    <div className='relative h-[500px] xl:h-full xl:absolute w-full z-[-1]'>
                        <Image
                            src="/pan.png"
                            alt="Company Logo"
                            fill
                            priority
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
