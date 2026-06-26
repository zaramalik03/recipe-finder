"use client"
import React from 'react'
import Filter from '@/components/Filter'
import { diningAreas, diningCategories, type DiningArea } from '@/data'

const DiningOutPage = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

    const filteredDining = React.useMemo(() => {
        return diningAreas.filter((area: DiningArea) => {
            const categoryMatch = !selectedCategory || area.category === selectedCategory
            return categoryMatch
        })
    }, [selectedCategory])

    return (
        <div className="p-4 lg:px-20 xl:px-40">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                    <Filter />
                    
                    <div className="mt-8">
                        <h3 className="font-bold text-lg mb-4">Dining Categories</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`block w-full text-left px-3 py-2 rounded ${!selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                            >
                                All Types
                            </button>
                            {diningCategories.map((category: string) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`block w-full text-left px-3 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/4">
                    <h1 className="text-3xl font-bold mb-6">Dining Options</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredDining.map((area: DiningArea) => (
                            <div key={area.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                                <div className="bg-gray-100 p-6 text-5xl text-center">{area.image}</div>
                                <div className="p-4">
                                    <h3 className="font-bold text-xl mb-2">{area.name}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{area.description}</p>
                                    
                                    <div className="mb-3 space-y-1 text-sm">
                                        <p><span className="font-semibold">Address:</span> {area.address}</p>
                                        <p><span className="font-semibold">Hours:</span> {area.hours}</p>
                                        <p><span className="font-semibold">Rating:</span> {'⭐'.repeat(Math.floor(area.rating))} {area.rating}</p>
                                    </div>

                                    <div className="mb-3">
                                        <p className="text-xs font-semibold text-gray-500 mb-2">Category:</p>
                                        <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm">
                                            {area.category}
                                        </span>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 mb-2">Dietary Options:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {area.dietaryTags.map((tag: string) => (
                                                <span key={tag} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiningOutPage