import React, {createContext, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useFetch from '../hooks/useFetch'

const StoreContext = createContext(null)

const StoreProvider = ({children}) => {
    const [cart, setCart] = useLocalStorage('commerce_cart', [])

    // Store Filtration
    const [query, setQuery] = useState('')
    const [categoryIndex, setCategoryIndex] = useState(-1)
    const [companyIndex, setCompanyIndex] = useState(-1)
    const [colorIndex, setColorIndex] = useState(-1)
    const [price, setPrice] = useState(25)
    const [freeShipping, setFreeShipping] = useState(false)

    // Store Grid
    const [sortByIndex, setSortByIndex] = useState(0)
    const [viewGrid, setViewGrid] = useState(true)

    const {response: products, error } = useFetch('https://api.jsonbin.io/b/618bd230820eda3cc81b001f/21')

    if(error) return 'error....';
    
    

    const clearFilters = () => {
        setQuery('');
        setCategoryIndex(-1);
        setCompanyIndex(-1);
        setColorIndex(-1);
        setPrice(500)
        setFreeShipping(false)
    }
    
    return (
        <StoreContext.Provider value={{
            cart, setCart, 
            query, setQuery,
            categoryIndex, setCategoryIndex,
            freeShipping, setFreeShipping,
            price, setPrice, 
            colorIndex, setColorIndex,
            companyIndex, setCompanyIndex,
            sortByIndex, setSortByIndex,
            viewGrid, setViewGrid,
            products, error,
            clearFilters
        }}>
            {products ? children : ''}
        </StoreContext.Provider>
    );
}

export { StoreProvider, StoreContext }
