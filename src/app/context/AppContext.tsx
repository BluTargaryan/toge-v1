'use client'

import { createContext, useState, useEffect, useContext } from 'react'

interface Shop {
  id: string;
  title: string;
  url: string;
  description: string;
  locationLong: number;
  locationLat: number;
  locationTitle: string;
  contacts: any[];
  ocTimes: any[];
}

interface Ingredient {
  id: string;
  title: string;
  shops: string[];
}

interface AppContextType {
  ingredients: Ingredient[];
  shops: Shop[];
  setIngredients: (ingredients: Ingredient[]) => void;
  setShops: (shops: Shop[]) => void;
  loading: boolean;
  error: string | null;
}

export const AppContext = createContext<AppContextType>({
  ingredients: [],
  shops: [],
  setIngredients: () => {},
  setShops: () => {},
  loading: false,
  error: null,
})

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [shops, setShops] = useState<Shop[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        // Fetch shops
        const shopsResponse = await fetch(`https://toge-backend-service.vercel.app/shops?acode=${process.env.NEXT_PUBLIC_CONTEXT_ACCESS_KEY}`)
        const shopsData = await shopsResponse.json()
        setShops(shopsData)

        // Fetch ingredients
        const ingredientsResponse = await fetch(`https://toge-backend-service.vercel.app/ingredients?acode=${process.env.NEXT_PUBLIC_CONTEXT_ACCESS_KEY}`)
        const ingredientsData = await ingredientsResponse.json()
        setIngredients(ingredientsData)
      } catch (err) {
        setError('Failed to fetch data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{ ingredients, setIngredients, shops, setShops, loading, error }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

