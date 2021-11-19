import {useState} from 'react'

export default function useLightMode() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    return [theme, toggleTheme]
}
