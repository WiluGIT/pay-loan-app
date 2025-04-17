"use client"

import React from 'react'
import { FaFileSignature } from 'react-icons/fa6'
import StepCard from './StepCard'
import { GiMoneyStack } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { MdQuestionAnswer } from 'react-icons/md'
import { TbAnalyze } from 'react-icons/tb'
import { LiaPenFancySolid } from 'react-icons/lia'
import { AiFillSignature, AiOutlineSignature } from 'react-icons/ai'

export default function Steps() {
    return (
        <section id='instruction' className='mt-5 xl:mt-0 background-gradient2'>
            <div className='flex flex-col items-center px-5'>
                <h1 className='py-15 font-bold text-5xl text-center'>
                    <span>Weź kredyt bankowy na chwilówki w czterech krokach!</span>
                </h1>
                <motion.div
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className='container flex flex-col xl:flex-row gap-10 pb-15'
                >
                    <div className='flex flex-col md:flex-row lg:flex-row container justify-between items-center gap-10'>
                        <StepCard
                            title='Krok 1'
                            subtitle='Zapoznamy się z Twoim problemem i zbadamy Twoje potrzeby.'
                            Icon={MdQuestionAnswer}
                        />
                        <StepCard
                            title='Krok 2'
                            subtitle='Bezpłatnie przeanalizujemy Twoją sytuację. Przygotujemy indywidualny plan działania i zaproponujemy najkorzystniejsze rozwiązanie już w ciągu kilku godzin.'
                            Icon={TbAnalyze}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row lg:flex-row container justify-between items-center gap-10'>
                        <StepCard
                            title='Krok 3'
                            subtitle='Przedstawimy kilka ofert pożyczki konsolidacyjnej. Porównamy parametry: oprocentowanie, koszt i finalna ratę. Dobierzemy najlepszą ofertę dostosowaną do Twoich potrzeb.'
                            Icon={GiMoneyStack}
                        />
                        <StepCard
                            title='Krok 4'
                            subtitle='Podpisz umowę, a my jeszcze tego samego dnia spłacimy Twoje zobowiązania i zamienimy je w jedną dogodną ratę.'
                            Icon={AiOutlineSignature}
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}
