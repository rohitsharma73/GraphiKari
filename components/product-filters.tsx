"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "Anime Mobile Skins", label: "Anime Mobile Skins" },
      { value: "Graffiti Mobile Skins", label: "Graffiti Mobile Skins" },
      { value: "Random Mobile Skins", label: "Random Mobile Skins" },
      // by devraj
      { value: "Poster", label: "Poster" },
      

      //added by mohit
      { value: "Printed T-Shirts", label: "Printed T-Shirts" },
      { value: "Wall Stickers", label: "Wall Stickers" },
      // { value: "scarves", label: "Scarves" },
      // { value: "wallets", label: "Wallets" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "xs", label: "X-Small" },
      { value: "s", label: "Small" },
      { value: "m", label: "Medium" },
      { value: "l", label: "Large" },
      { value: "xl", label: "X-Large" },
      { value: "one-size", label: "One Size" },

      //added by mohit
      { value: "red", label: "Red" },
      { value: "mahroon", label: "Mahroon" },
      { value: "yellow", label: "Yellow" },
      { value: "blue", label: "Blue" },
      { value: "Black", label: "Black" },
      { value: "one-feet", label: "one Sq. Feet" },
    ],
  },
]

export function ProductFilters() {
  const  searchParams = useSearchParams()
  const router = useRouter()
  const searchValues = Array.from(searchParams.entries())
  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id) ? `(${searchParams.get(section.id)})` 
                  : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox id={`filter-${section.id}-${optionIdx}`}
                    checked={searchValues.some(([key,value])=> key === section.id && value === option.value)}
                     onClick={(event)=>{
                      const params = new URLSearchParams(searchParams)
                      const checked = event.currentTarget.dataset.state === "checked"
                      checked ? params.delete(section.id) : params.set(section.id, option.value)
                      router.replace(`/?${params.toString()}`)
                    }}/>
                    <label
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
