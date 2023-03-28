'use client';

import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_INVOICE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful, isSubmitting },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (!serviceId || !templateId || !userId) return;

        const emailContent = {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
        };

        emailjs.send(serviceId, templateId, emailContent, userId).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );

        reset();
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-semibold'>Contact Me</h1>

            <div className='flex flex-col gap-5 my-12 md:gap-10 md:flex-row'>
                <div className='flex flex-col '>
                    <FaEnvelope className='self-center m-1 scale-150' />
                    <Link
                        href='mailto:business@venimitev.com'
                        target='_blank'
                        className='text-center'
                    >
                        business@venimitev.com
                    </Link>
                </div>
                <div className='flex flex-col '>
                    <FaGithub className='self-center m-1 scale-150' />
                    <Link
                        href='https://github.com/VeniMitev'
                        target='_blank'
                        className='text-center'
                    >
                        /VeniMitev
                    </Link>
                </div>
                <div className='flex flex-col '>
                    <FaLinkedin className='self-center m-1 scale-150' />
                    <Link
                        href='https://www.linkedin.com/in/venelin-mitev/'
                        target='_blank'
                        className='text-center'
                    >
                        /in/venelin-mitev/
                    </Link>
                </div>
                <div className='flex flex-col '>
                    <FaInstagram className='self-center m-1 scale-150' />
                    <Link
                        href='https://www.instagram.com/venelin_m'
                        target='_blank'
                        className='text-center'
                    >
                        @venelin_m
                    </Link>
                </div>
            </div>

            <h2 className='text-xl font-medium'>Or fill out the form below!</h2>
            <form
                className='flex flex-col items-center justify-center max-w-lg'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col my-3'>
                    <label className='px-3 text-medium' htmlFor='name'>
                        Name
                    </label>
                    <input
                        id='name'
                        placeholder='Enter your name here'
                        className='h-10 w-80 max-w-prose rounded-b-sm rounded-t-md border-2 border-slate-200 px-3 md:min-w-[30rem]'
                        {...register('name', { required: true, maxLength: 20 })}
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <span className='text-red-500'>
                            This field is required
                        </span>
                    )}
                </div>

                <div className='flex flex-col my-3'>
                    <label className='px-3 text-medium' htmlFor='email'>
                        Email
                    </label>
                    <input
                        id='email'
                        placeholder='Enter your email here'
                        className='h-10 w-80 max-w-prose rounded-md rounded-b-sm border-2 border-slate-200 px-3 md:min-w-[30rem]'
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'invalid email address format',
                            },
                        })}
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <span className='text-red-500'>
                            This field is required
                        </span>
                    )}
                </div>

                <div className='flex flex-col my-3'>
                    <label className='px-3 text-medium' htmlFor='subject'>
                        Subject
                    </label>
                    <input
                        id='subject'
                        placeholder='Enter your subject here'
                        className='h-10 w-80 max-w-prose rounded-md rounded-b-sm border-2 border-slate-200 px-3 md:min-w-[30rem]'
                        {...register('subject', {
                            required: true,
                            maxLength: 40,
                        })}
                        disabled={isSubmitting}
                    />
                    {errors.subject && (
                        <span className='text-red-500'>
                            This field is required
                        </span>
                    )}
                </div>

                <div className='flex flex-col my-3'>
                    <label className='px-3 text-medium' htmlFor='message'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        placeholder='Enter your message here'
                        className='h-32 w-80 max-w-prose rounded-md rounded-b-sm border-2 border-slate-200 px-3 md:min-w-[30rem]'
                        {...register('message', { required: true })}
                        disabled={isSubmitting}
                    />
                    {errors.message && (
                        <span className='text-red-500'>
                            This field is required
                        </span>
                    )}
                </div>

                <button
                    className='px-4 py-2 text-white bg-black rounded-md hover:bg-white hover:text-black '
                    type='submit'
                >
                    Send
                </button>

                {isSubmitSuccessful && (
                    <span className='text-green-500'>
                        Your message has been sent!
                    </span>
                )}
            </form>
        </div>
    );
};

export default Contact;
