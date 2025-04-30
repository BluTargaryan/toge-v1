'use client'

import IntroVideo from "./components/sections/IntroVideo";
import Feed from "./components/sections/Feed";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { useAppContext } from "./context/AppContext";
import { Ingredient, Shop } from "./utils/utils";

export default function Home() {


  const [locationInput, setLocationInput] = useState('')
  const [ingredientInput, setIngredientInput] = useState('')
  const [feedData, setFeedData] = useState<Shop[] | Ingredient[]>([])
  const [safeForFeed, setSafeForFeed] = useState<boolean>(false)
    const [location, setLocation] = useState<string>('')
    const [ingredient, setIngredient] = useState<string>('')
  const {ingredients, shops, loading, error, setIngredients} = useAppContext()

  const handleSearch = () => {
    if(locationInput.length!==0 && ingredientInput.length!==0) {
      const temp = ingredients.filter((ingredient) => 
        ingredient.title.toLowerCase().includes(ingredientInput.toLowerCase())
      )
      const filteredShops = shops.filter((shop) => 
        temp.some((ingredient) => ingredient.shops.includes(shop.id)) && shop.locationTitle.toLowerCase().includes(locationInput.toLowerCase())
      )
      setFeedData(filteredShops)
      setLocation(locationInput)
      setIngredient(temp[0].title)
      setSafeForFeed(true)
    }
    else if(ingredientInput.length!==0) {
      const temp = ingredients.filter((ingredient) => 
        ingredient.title.toLowerCase().includes(ingredientInput.toLowerCase())
      )
      const filteredShops = shops.filter((shop) => 
        temp.some((ingredient) => ingredient.shops.includes(shop.id))
      )
      setFeedData(filteredShops)
      setLocation('all')
      setIngredient(temp[0].title)
      setSafeForFeed(true)
    }
    else if(locationInput.length!==0) {
      const filteredShops = shops.filter((shop) => 
        shop.locationTitle.toLowerCase().includes(locationInput.toLowerCase())
      )
      setFeedData(filteredShops)
      setLocation(locationInput)
      setIngredient('all')
      setSafeForFeed(true)
    }
    else {
      console.log('No input')
      setSafeForFeed(false)
    }
  }
  
  return (
    <main className="section-container edge-padding">
      <IntroVideo />
      
      <section className='w-full h-full flex flex-col items-center gap-8
    md:gap-12
    '>
<div className='flex flex-col gap-2 items-center text-center
md:w-full
'>
<h1 className='text-3xl font-bold font-manrope text-primary xl:text-4xl'>
    Toge
</h1>
<p className='w-full md:w-1/2 xl:w-1/4'>
The one stop search portal for all those hard-to-find African ingredients in the UK
</p>
</div>

<div className='flex flex-col gap-4
md:w-4/5
xl:w-1/3
'>
<input type="text" placeholder='Search for ingredients' className='w-full h-12 rounded-sm bg-secondary p-4' value={ingredientInput} onChange={(e) => setIngredientInput(e.target.value)} />
<div className='w-full h-12 rounded-sm bg-secondary p-4 flex gap-2 items-center'>
        <input type="text" placeholder='Search location (e.g. Coventry, CV, CV1 etc)' 
        className='w-full h-12 bg-transparent' value={locationInput} onChange={(e) => setLocationInput(e.target.value)} />

        {/* <div className='flex gap-2 shrink-0' onClick={() => setLocationInput(location)}>
            <span className='text-xs font-medium'>Use current location</span>
            <FaMapMarkerAlt />
        </div> */}
    </div>
</div>

<button className='w-full h-12 rounded-sm bg-primary text-background hover:bg-accent transition-all duration-300 cursor-pointer
md:w-1/2
xl:w-1/4
' 
onClick={() => handleSearch()}>
    Search
</button>
    </section>

    {
      safeForFeed ? <Feed feedData = {feedData as Shop[]} location = {location} ingredient = {ingredient}/> 
      : <div className="w-full h-full flex flex-col items-center justify-center"></div>
    }

      
    </main>
  );
}
