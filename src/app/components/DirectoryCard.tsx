"use client";

import { useState, FormEvent, JSX } from 'react';

interface ContactInfo {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
}

interface DirectoryCardProps {
    title?: string;
    subtitle?: string;
    onSubmit?: (data: ContactInfo) => void;
}

export default function DirectoryCard({
    title = "Contact Information",
    subtitle = "Please fill in your details",
    onSubmit
}: DirectoryCardProps): JSX.Element {
    const [contactInfo, setContactInfo] = useState<ContactInfo>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContactInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(contactInfo);
        }
    };

    return (
        <div className="w-full mx-auto shadow-2xl">
            {/* Directory Tab */}
            {/* <div className="bg-gray-200 w-28 h-8 rounded-t-lg ml-4 flex items-center justify-center text-gray-700 font-medium">
                Contacts
            </div> */}

            {/* Directory/Folder Card */}
            {/* <div className="bg-[#cc8d52] rounded-t-lg rounded-b-lg shadow-lg overflow-hidden"> */}
            <div className="bg-[#192e4d] rounded-t-lg rounded-b-lg shadow-lg overflow-hidden">
                {/* Card Header */}
                <div className="bg-[#192e4d] px-6 py-4 shadow-2xl">
                    <h2 className="text-3xl font-bold text-white">{title}</h2>
                    <p className="text-white mt-1">{subtitle}</p>
                </div>

                {/* Form Content */}
                <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Name Row */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label htmlFor="firstName" className="block mb-1">
                                        Imię i nazwisko
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={contactInfo.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-[#304b6b] px-3 py-2 border rounded-md shadow-xl focus:outline-none focus:ring-2"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phoneNumber" className="block mb-1">
                                    Numer telefonu
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={contactInfo.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full bg-[#304b6b] px-3 py-2 border rounded-md shadow-xl focus:outline-none focus:ring-2"
                                    required
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="emailAddress" className="block mb-1">
                                    Adres e-mail
                                </label>
                                <input
                                    type="email"
                                    id="emailAddress"
                                    name="emailAddress"
                                    value={contactInfo.emailAddress}
                                    onChange={handleChange}
                                    className="w-full bg-[#304b6b] px-3 py-2 border rounded-md shadow-xl focus:outline-none focus:ring-2"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Wyślij formularz
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}