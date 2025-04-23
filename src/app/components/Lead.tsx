"use client";

import { motion } from 'framer-motion';
import React from 'react'
import { supabase } from "@/app/utils/supabaseClient";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { LeadInfo } from '@/types/types';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const FormSchema = z.object({
    name: z.string().min(1, {
        message: "Pole Imię i nazwisko jest wymagane.",
    }),
    email: z.string().min(1, {
        message: "Pole Adres e-mail jest wymagane.",
    }).email({
        message: "Pole Adres e-mail jest nieprawidłowe.",
    }),
    loanAmount: z.string().min(1, {
        message: 'Pole Wnioskowana kwota pożyczki jest wymagane.'
    }),
    incomeSource: z.string().min(1, {
        message: 'Pole Źródło dochodu jest wymagane.'
    }),
    incomeAmount: z.string().min(1, {
        message: 'Pole Kwota średniego miesięcznego dochodu jest wymagane.'
    }),
    termsAccepted: z.boolean().refine(val => val === true, { // Dodany checkbox
        message: "Wymagana jest akceptacja warunków.",
    }),
})

export default function Lead() {
    const form = useForm<LeadInfo>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            loanAmount: "",
            incomeSource: "",
            incomeAmount: "",
            termsAccepted: false,
        },
    });

    const handleSubmit = async (data: LeadInfo) => {
        console.log("Data LEAD:", data);

        const { error } = await supabase.from("Leads").insert([data]);
        if (error) {
            toast.error('Nie udało się wysłać formularza');
            return;
        }

        toast.success('Formularz wysłany poprawnie');
        form.reset();
    };

    return (
        <section id="lead" className='flex justify-center'>
            <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                viewport={{ once: false }}
                className="flex flex-col items-center justify-center my-5"
            >
                <h1 className='my-5 text-center'>
                    <span className='text-5xl font-bold'>Złóż wniosek Online</span>
                </h1>
                <div className='bg-[#192e4d] w-[80%] rounded-2xl gap-10 shadow-2xl'>
                    <h3 className='text-2xl text-center font-bold shadow-2xl p-10'>Uzupełnij dane kontaktowe oraz finansowe</h3>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className='flex flex-col gap-8 p-10'
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Imię i nazwisko</FormLabel>
                                        <FormControl>
                                            <Input className='bg-[#304b6b]' placeholder='Uzupełnij imię i nazwisko' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Adres e-mail</FormLabel>
                                        <FormControl>
                                            <Input className='bg-[#304b6b]' placeholder='Uzupełnij adres e-mail' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="loanAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Wnioskowana kwota pożyczki</FormLabel>
                                        <FormControl>
                                            <Input className='bg-[#304b6b]' placeholder='Uzupełnij wnioskowaną kwotę pożyczki' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="incomeSource"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Źródło dochodu</FormLabel>
                                        <FormControl>
                                            <Input className='bg-[#304b6b]' placeholder='Uzupełnij źródło swojego dochodu' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="incomeAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Kwota średniego miesięcznego dochodu</FormLabel>
                                        <FormControl>
                                            <Input className='bg-[#304b6b]' placeholder='Uzupełnij kwotę miesięcznego dochodu' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="termsAccepted"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex items-center space-x-3">
                                                <Checkbox
                                                    className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-none'
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    id="termsAccepted"
                                                />
                                                <FormLabel htmlFor="termsAccepted">
                                                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu marketingowym oraz na przesyłanie za pośrednictwem środków komunikacji elektronicznej informacji handlowych przez Sp. z o.o. z siedzibą pod adresem Pod Mostem, 03-994 Warszawa
                                                </FormLabel>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" variant={'primary'}>Wyślij wniosek</Button>
                        </form>
                    </Form>
                </div>
            </motion.div>

        </section >
    );
}
