"use client"
import React, { useMemo, useState } from "react";

type FilterGroup = {
  label: string;
  options: { label: string; value: string }[];
};

const filterGroups: FilterGroup[] = [
  {
    label: "Allergens",
    options: [
      { label: "Peanut", value: "peanut" },
      { label: "Tree Nut", value: "tree-nut" },
      { label: "Gluten", value: "gluten" },
      { label: "Dairy", value: "dairy" },
      { label: "Egg", value: "egg" },
      { label: "Soy", value: "soy" },
      { label: "Fish", value: "fish" },
      { label: "Shellfish", value: "shellfish" },
      { label: "Sesame", value: "sesame" },
      { label: "Wheat", value: "wheat" },
      { label: "Mustard", value: "mustard" },
      { label: "Celery", value: "celery" },
      { label: "Lupin", value: "lupin" },
      { label: "Sulfites", value: "sulfites" },
    ],
  },
  {
    label: "Special Diets",
    options: [
      { label: "Alpha-Gal", value: "alpha-gal" },
      { label: "GLP-1 Friendly", value: "glp1-friendly" },
      { label: "Low FODMAP", value: "low-fodmap" },
      { label: "Low Histamine", value: "low-histamine" },
      { label: "Keto", value: "keto" },
      { label: "Paleo", value: "paleo" },
      { label: "Mediterranean", value: "mediterranean" },
      { label: "Whole30", value: "whole30" },
      { label: "Low Carb", value: "low-carb" },
      { label: "High Protein", value: "high-protein" },
    ],
  },
  {
    label: "Lifestyle / Religion",
    options: [
      { label: "Vegan", value: "vegan" },
      { label: "Vegetarian", value: "vegetarian" },
      { label: "Pescatarian", value: "pescatarian" },
      { label: "Halal", value: "halal" },
      { label: "Kosher", value: "kosher" },
      { label: "Alcohol-Free", value: "alcohol-free" },
      { label: "Pork-Free", value: "pork-free" },
      { label: "Beef-Free", value: "beef-free" },
      { label: "Jain-Friendly", value: "jain-friendly" },
      { label: "Hindu-Friendly", value: "hindu-friendly" },
    ],
  },
  {
    label: "Cultural Cuisine",
    options: [
      { label: "American", value: "american" },
      { label: "Italian", value: "italian" },
      { label: "Mexican", value: "mexican" },
      { label: "Chinese", value: "chinese" },
      { label: "Japanese", value: "japanese" },
      { label: "Korean", value: "korean" },
      { label: "Indian", value: "indian" },
      { label: "Middle Eastern", value: "middle-eastern" },
      { label: "Mediterranean", value: "mediterranean-cuisine" },
      { label: "Thai", value: "thai" },
      { label: "Vietnamese", value: "vietnamese" },
      { label: "Latin American", value: "latin-american" },
      { label: "Caribbean", value: "caribbean" },
      { label: "African", value: "african" },
    ],
  },
];

const Filter = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFilter = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const clearAll = () => setSelected([]);

  const hasSelected = selected.length > 0;

  return (
    <div className="mt-8 space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Filters:
        </span>

        <button
          type="button"
          onClick={clearAll}
          disabled={!hasSelected}
          className="rounded-full border px-3 py-1 text-xs font-semibold transition border-border bg-card text-foreground hover:border-foreground/40 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear All
        </button>

        {selected.length > 0 && (
          <span className="text-xs text-muted-foreground">
            {selected.length} selected
          </span>
        )}
      </div>

      {filterGroups.map((group) => (
        <div key={group.label} className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {group.label}
          </h3>

          <div className="flex flex-wrap gap-2">
            {group.options.map((option) => {
              const active = selected.includes(option.value);

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleFilter(option.value)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-foreground hover:border-foreground/40"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;