"use client"
import React from 'react'
import Filter from '@/components/Filter'
import { recipes, type Recipe } from '@/data'

const RecipesPage = () => {
    const [selectedDiets] = React.useState<string[]>([])

    const filteredRecipes = React.useMemo(() => {
        if (selectedDiets.length === 0) return recipes
        return recipes.filter((recipe: Recipe) =>
            selectedDiets.every(diet => recipe.dietaryTags.includes(diet))
        )
    }, [selectedDiets])

    return (
        <div className="p-4 lg:px-20 xl:px-40">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                    <Filter />
                </div>

                <div className="w-full md:w-3/4">
                    <h1 className="text-3xl font-bold mb-6">Recipes</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredRecipes.map((recipe: Recipe) => (
                            <div key={recipe.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                                <div className="bg-gray-100 p-6 text-5xl text-center">{recipe.image}</div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-2">{recipe.name}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{recipe.description}</p>
                                    
                                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                                        <div>
                                            <p className="text-gray-500">Cook Time</p>
                                            <p className="font-semibold">{recipe.cookTime} min</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Servings</p>
                                            <p className="font-semibold">{recipe.servings}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Difficulty</p>
                                            <p className="font-semibold">{recipe.difficulty}</p>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <p className="text-xs font-semibold text-gray-500 mb-2">Tags:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {recipe.dietaryTags.map((tag: string) => (
                                                <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 mb-2">Ingredients:</p>
                                        <ul className="text-sm list-disc list-inside text-gray-700">
                                            {recipe.ingredients.slice(0, 3).map((ing: string, idx: number) => (
                                                <li key={idx}>{ing}</li>
                                            ))}
                                            {recipe.ingredients.length > 3 && (
                                                <li>+{recipe.ingredients.length - 3} more</li>
                                            )}
                                        </ul>
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

export default RecipesPage