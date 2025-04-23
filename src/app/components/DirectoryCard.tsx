"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button';
import { FaPhoneVolume } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { ContactInfo } from '@/types/types';

interface DirectoryCardProps {
    title?: string;
    subtitle?: string;
    onSubmit: (data: ContactInfo) => void;
}

const FormSchema = z.object({
    name: z.string().min(1, {
        message: "Pole Imię i nazwisko jest wymagane.",
    }),
    phone: z.string().min(1, {
        message: "Pole Numer telefonu jest wymagane.",
    }).regex(/^\d(?:\s?\d)*$/, {
        message: "Pole Numer telefonu jest nieprawidłowe.",
    }),
    email: z.string().min(1, {
        message: "Pole Adres e-mail jest wymagane.",
    }).email({
        message: "Pole Adres e-mail jest nieprawidłowe.",
    }),
})

export default function DirectoryCard({
    title = "Contact Information",
    subtitle = "Please fill in your details",
    onSubmit
}: DirectoryCardProps): JSX.Element {
    const form = useForm<ContactInfo>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
        },
    });

    const handleSubmit = (data: ContactInfo) => {
        onSubmit(data);
        form.reset();
    };

    return (
        <div className="w-full mx-auto shadow-2xl">
            <div className="bg-gray-200 w-28 h-8 hidden rounded-t-lg ml-4 xl:flex items-center justify-center text-gray-700 font-medium">
                <motion.div
                    animate={{
                        rotate: [0, -15, 15, -15, 15, 0],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                    }}
                >
                    <FaPhoneVolume />
                </motion.div>
            </div>

            <div className="bg-[#192e4d] rounded-t-lg rounded-b-lg shadow-lg overflow-hidden">
                <div className="bg-[#192e4d] px-6 py-4 shadow-2xl">
                    <h2 className="text-3xl font-bold text-white">{title}</h2>
                    <p className="text-white mt-1">{subtitle}</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="p-6 flex flex-col gap-5">
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
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Numer telefonu</FormLabel>
                                    <FormControl>
                                        <Input className='bg-[#304b6b]' placeholder='Uzupełnij numer telefonu' {...field} />
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
                        <Button type="submit" variant={'primary'}>Wyślij formularz</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}