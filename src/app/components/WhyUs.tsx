import React from 'react'
import WhyUsCard from './WhyUsCard'
import { GiSandsOfTime } from 'react-icons/gi'

export default function WhyUs() {
    return (
        <section className='mx-auto container mt-10'>
            <div className='flex flex-row flex-wrap xl:flex-nowrap gap-10 mb-10'>
                <WhyUsCard
                    title={'Wieloletnie doświadczenie w branży'}
                    content={'Wyróżnia nas wieloletnie doświadczenie, które jest potwierdzone licznymi opiniami od zadowolonych kredytobiorców. Zatrudniamy wyłącznie najlepszych specjalistów w swojej dziedzinie, aby zapewnić kompleksowe wsparcie, doradztwo oraz maksymalne bezpieczeństwo każdej transakcji.'}
                    Icon={GiSandsOfTime}
                />
                <WhyUsCard
                    title={'Wiele ofert finansowania dostępnych od ręki'}
                    content={'Proponujemy nie tylko kredyty na spłatę chwilówek, ale także pożyczki dla osób z komornikiem, prywatne pożyczki od ręki, a także formy finansowania dla osób zadłużonych. U nas załatwisz nawet trudne kredyty, które mogłyby wydawać się niemożliwe do udzielenia.'}
                    Icon={GiSandsOfTime}
                />
            </div>
            <div className='flex flex-row flex-wrap xl:flex-nowrap gap-10 mb-10'>
                <WhyUsCard
                    title={'Podejmujemy się najbardziej skomplikowanych spraw'}
                    content={'Jesteśmy w stanie znaleźć najlepsze rozwiązanie dla osób, które znajdują się w naprawdę kiepskiej sytuacji finansowej. Przejmujemy obowiązek poszukiwania najlepszych ofert oraz kompletowania niezbędnej dokumentacji. U nas załatwisz kredyt na chwilówki nawet w trudnej sytuacji życiowej.'}
                    Icon={GiSandsOfTime}
                />
                <WhyUsCard
                    title={'Wiele ofert finansowania dostępnych od ręki'}
                    content={'Proponujemy nie tylko kredyty na spłatę chwilówek, ale także pożyczki dla osób z komornikiem, prywatne pożyczki od ręki, a także formy finansowania dla osób zadłużonych. U nas załatwisz nawet trudne kredyty, które mogłyby wydawać się niemożliwe do udzielenia.'}
                    Icon={GiSandsOfTime}
                />
            </div>
            <div className='flex flex-row flex-wrap xl:flex-nowrap gap-10 mb-10'>
                <WhyUsCard
                    title={'Wieloletnie doświadczenie w branży'}
                    content={'Wyróżnia nas wieloletnie doświadczenie, które jest potwierdzone licznymi opiniami od zadowolonych kredytobiorców. Zatrudniamy wyłącznie najlepszych specjalistów w swojej dziedzinie, aby zapewnić kompleksowe wsparcie, doradztwo oraz maksymalne bezpieczeństwo każdej transakcji.'}
                    Icon={GiSandsOfTime}
                />
                <WhyUsCard
                    title={'Wiele ofert finansowania dostępnych od ręki'}
                    content={'Proponujemy nie tylko kredyty na spłatę chwilówek, ale także pożyczki dla osób z komornikiem, prywatne pożyczki od ręki, a także formy finansowania dla osób zadłużonych. U nas załatwisz nawet trudne kredyty, które mogłyby wydawać się niemożliwe do udzielenia.'}
                    Icon={GiSandsOfTime}
                />
            </div>
        </section>
    )
}
