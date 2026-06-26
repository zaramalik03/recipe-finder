"use client"
import React from 'react'
import Filter from '@/components/Filter'
import { groceries, groceryCategories, type Grocery } from '@/data'

const GroceriesPage = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

    const filteredGroceries = React.useMemo(() => {
        return groceries.filter((item: Grocery) => {
            const categoryMatch = !selectedCategory || item.category === selectedCategory
            return categoryMatch
        })
    }, [selectedCategory])

    return (
        <div className="p-4 lg:px-20 xl:px-40">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                    <Filter />
                    
                    <div className="mt-8">
                        <h3 className="font-bold text-lg mb-4">Categories</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`block w-full text-left px-3 py-2 rounded ${!selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                            >
                                All Categories
                            </button>
                            {groceryCategories.map((category: string) => (
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
                    <h1 className="text-3xl font-bold mb-6">Groceries</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredGroceries.map((item: Grocery) => (
                            <div key={item.id} className="border rounded-lg p-4 hover:shadow-lg transition">
                                <div className="text-5xl mb-2">{item.image}</div>
                                <h3 className="font-bold text-lg">{item.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                                <p className="text-blue-600 font-bold mb-2">${item.price.toFixed(2)}</p>
                                <p className="text-xs text-gray-500 mb-2">Category: {item.category}</p>
                                <div className="flex flex-wrap gap-1">
                                    {item.dietaryTags.map((tag: string) => (
                                        <span key={tag} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroceriesPage