import { useState } from 'react'; 
import useLocalStorage from './useLocalStorage'; 

const useDarkMode = (key, initialValues) => {

    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(key, initialValues)
    
    return [darkModeEnabled, setDarkModeEnabled]
}

export default useDarkMode 