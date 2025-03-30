"use client";

import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react'
import { supabase } from "@/app/utils/supabaseClient";

interface ContactFormData {
    name: string;
    email: string;
    loanAmount: string;
    incomeSource: string;
    incomeAmount: string;
}

export default function Lead() {
    const formRef = useRef<HTMLFormElement>(null!);
    const [form, setForm] = useState<ContactFormData>({
        name: '',
        email: '',
        loanAmount: '',
        incomeSource: '',
        incomeAmount: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        console.log(name, value);
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.from("Leads").insert([form]);

        if (error) {
            console.error("Error inserting data:", error.message);
        } else {
            setForm({
                name: '',
                email: '',
                loanAmount: '',
                incomeSource: '',
                incomeAmount: ''
            });
        }

        setLoading(false);
    };

    return (
        <section className='flex justify-center'>
            <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                viewport={{ once: false }}
                className="flex flex-col items-center justify-center my-5"
            >
                <h1 className='my-5'>
                    <span className='text-5xl'>Złóż wniosek Online</span>
                </h1>
                <div className='bg-[#100d25] w-[80%] p-10 rounded-2xl gap-10 overflow-hidden'>
                    <h3 className='text-2xl font-bold'>Uzupełnij dane kontaktowe oraz finansowe</h3>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mt-12 flex flex-col gap-8'
                    >
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Imię i nazwisko</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Uzupełnij imię i nazwisko"
                                className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Uzupełnij adres e-mail"
                                className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Wnioskowana kwota pożyczki</span>
                            <input
                                type='number'
                                name='loanAmount'
                                value={form.loanAmount}
                                onChange={handleChange}
                                placeholder="Uzupełnij kwotę pożyczki"
                                className='bg-[#151030] py-4 px-6 placeholder:text-secondary no-spinner text-white rounded-lg outlined-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Źródło dochodu</span>
                            <input
                                type='text'
                                name='incomeSource'
                                value={form.incomeSource}
                                onChange={handleChange}
                                placeholder="Uzupełnij źródło swojego dochodu"
                                className='bg-[#151030] py-4 px-6 placeholder:text-secondary no-spinner text-white rounded-lg outlined-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Kwota średniego miesięcznego dochodu</span>
                            <input
                                type='number'
                                name='incomeAmount'
                                value={form.incomeAmount}
                                onChange={handleChange}
                                placeholder="Uzupełnij kwotę miesięcznego dochodu"
                                className='bg-[#151030] py-4 px-6 placeholder:text-secondary no-spinner text-white rounded-lg outlined-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-row items-center gap-5'>
                            <input
                                name='accept'
                                type='checkbox'
                                //value={form.message}
                                // onChange={handleChange}
                                className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                            />
                            <span className='text-white font-medium'>Wyrażam zgodę na przetwarzanie moich danych osobowych w celu marketingowym oraz na przesyłanie za pośrednictwem środków komunikacji elektronicznej informacji handlowych przez Sp. z o.o. z siedzibą pod adresem Pod Mostem, 03-994 Warszawa</span>
                        </label>
                        {/* <label className='flex flex-row items-center gap-5'>
                            <input
                                name='accept'
                                type='checkbox'
                                value={form.message}
                                onChange={handleChange}
                                className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                            />
                            <span className='text-white font-medium'>Proszę o kontakt również mailowo</span>
                        </label> */}
                        <button
                            type='submit'
                            className='bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
                        >
                            {loading ? 'Wysyłam...' : 'Wyślij wniosek'}
                        </button>
                    </form>
                </div>
            </motion.div>
        </section >
    );
}
