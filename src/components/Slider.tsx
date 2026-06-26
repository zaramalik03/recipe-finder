"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

const data = [
  {
    step: '1',
    title: 'Set your allergy profile',
    desc: 'Tell us your restrictions once. Everything on the platform filters to match your exact needs automatically.',
  },
  {
    step: '2',
    title: 'Browse without second-guessing',
    desc: 'Every restaurant, product, and recipe you see has been verified for your profile — the unsafe stuff filters out.',
  },
  {
    step: '3',
    title: 'Feel confident in your dietary lifestyle',
    desc: 'Community-verified, label-checked, and cross-contact assessed. You can trust what you see here.',
  },
];

const allergies = [
    { icon: '🌾', title: 'Gluten/Wheat' },
    { icon: '🥛', title: 'Dairy' },
    { icon: '🐟', title: 'Fish' },
    { icon: '🥚', title: 'Eggs' },
    { icon: '🦞', title: 'Shellfish' },
    { icon: '🫛', title: 'Soy' },
    { icon: '🌱', title: 'Sesame' },
    { icon: '🥜', title: 'Peanuts' },
    { icon: '🌰', title: 'Tree Nuts' },
]

const Slider = () => {
    return (
        <div>
            <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
                {/* TEXT CONTAINER */}
                <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full'>
                    <h1 className='text-5xl items-center p-4'>
                        Find groceries, dining places, and recipes completely allergen-free.
                    </h1>
                    <button className='bg-red-500 text-white p-4 md:text-2xl xl:text-2xl'>
                        Get Started
                    </button>
                </div>
                <div className="flex flex-col w-full relative p-8 gap-10 items-center justify-center">
                    {data.map((item) => (
                        <div key={item.step}>
                            <h3 className="text-3xl font-semibold">{item.title}</h3>
                            <p className="text-xl mt-1 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-20'>
                <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full'></div>
                    <h1 className='text-5xl items-center p-4'>
                        Covers the Top 9 Allergens and Many More
                    </h1>
                </div>
                <div className="flex flex-col w-full relative p-8 gap-10 items-center justify-center">
                  {allergies.map((f) => (
                    <div
                        key={f.title}
                        className="rounded-xl w-35 p-6 border flex flex-row items-center justify-center"
                        >
                        <span className="text-3xl mb-3">{f.icon}</span>
                        <h3
                            className="text-sm font-semibold text-center"
                            style={{ fontFamily: 'Sora, sans-serif', color: 'var(--foreground)' }}
                        >
                            {f.title}
                        </h3>
                    </div>
                    ))} 
            </div> */}
            {/* <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-20'>
                <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full'></div>
                    <h1 className='text-5xl items-center p-4'>
                        ZeroCross is the simple way to find restaurants, groceries, and recipes that match your allergies — reviewed by people with the same restrictions as you.
                    </h1>
                </div>
                    ))} 
            </div> */}
        </div>
    )
}

export default Slider