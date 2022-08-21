import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function PersonalInformation() {
    return (
        <div className="relative py-16">
            <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 dark:bg-gray-600 lg:block" aria-hidden="true" />
            <div className="max-w-7xl mx-auto bg-blue-600 dark:bg-gray-900 lg:bg-transparent dark:lg:bg-transparent lg:px-8">
                <div className="lg:grid lg:grid-cols-12">
                    <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                        <div className="absolute inset-x-0 h-1/2 bg-gray-50 dark:bg-gray-600 lg:hidden" aria-hidden="true" />
                        <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                            <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                                <StaticImage
                                    src='../images/FerdinandGunawan.jpg'
                                    width={ 600 }
                                    alt="Ferdinand Gunawan"
                                    placeholder='dominantColor'
                                    className='!object-cover !object-center !rounded-3xl !shadow-2xl hover:!scale-105 !transition-all hover:!rotate-6'
                                ></StaticImage>
                            </div>
                        </div>
                    </div>

                    <div className="relative dark:bg-gray-900 bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                        <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                            <svg
                                className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-blue-500 dark:text-gray-700" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                            <svg
                                className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                        </div>
                        <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                            <div className='flex flex-col gap-1 items-center lg:items-start'>
                                <h2 className=" text-white flex flex-row gap-1.5 items-end" id="join-heading">
                                    <p className='text-lg'>Hi! I'm</p> <p className='text-3xl font-extrabold'>Ferdinand Gunawan</p>
                                </h2>
                                <div className='flex flex-row gap-1.5 text-lg text-center text-white flex-wrap'>
                                    Database Administrator at Bina Nusantara University
                                </div>
                            </div>
                            <div className='flex flex-col text-lg text-white items-center lg:items-start text-center'>
                                <p>
                                    3 years of experience in teaching programming lectures.
                                </p>
                                <p>
                                    Strong in software development, processing data and teamwork.
                                </p>
                            </div>
                            <div className='flex flex-col items-center lg:items-start'>
                                <a
                                    className="transition-all block w-full py-3 px-5 text-center bg-white dark:bg-gray-600 border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 sm:inline-block sm:w-auto"
                                    href="mailto:ferdinandg066@gmail.com"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}