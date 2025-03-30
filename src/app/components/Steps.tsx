import React from 'react'
import { FaFileSignature } from 'react-icons/fa6'
import StepCard from './StepCard'
import { FaHandshakeSimple } from 'react-icons/fa6'
import { GiCardPick } from 'react-icons/gi'

export default function Steps() {
    return (
        // <section className='bg-[#0070bc]'>
        <section className='bg-[#142f2e] mt-5 xl:mt-0'>
            <div className='flex flex-col items-center px-5'>
                <h1 className='py-15 font-bold text-3xl text-center'>
                    <span>Weź kredyt bankowy na chwilówki w trzech krokach!</span>
                </h1>
                <div className='flex flex-col lg:flex-row container justify-between items-center gap-10 pb-15 shadow-2xl'>
                    <StepCard
                        title='Złóż wniosek'
                        subtitle='Złóż wniosek o przyznanie kredytu bankowego na spłatę chwilówek. Wystarczy, że masz ważny dokument tożsamości i konto bankowe. To naprawdę proste!'
                        Icon={FaFileSignature}
                    />
                    <StepCard
                        title='Zapoznaj się z ofertą'
                        subtitle='Po weryfikacji wniosku o przyznanie kredytu na chwilówki przedstawimy Ci ofertę finansowania. Przejrzyj warunki wynikające z umowy i podejmij ostateczną decyzję!'
                        Icon={GiCardPick}
                    />
                    <StepCard
                        title='Podpisz umowę'
                        subtitle='Po podpisaniu umowy kredytu na chwilówki otrzymasz należne pieniądze nawet w ten sam dzień na swoje konto bankowe. Współpraca z nami to minimum formalności!'
                        Icon={FaHandshakeSimple}
                    />
                </div>
            </div>
        </section>
    )
}
