// import { useLayoutEffect, useState } from "react"

// // const isDarkTheme = window?.matchMedia('(prefers-color-scheme:dark)').matches
// // const defaultTheme = isDarkTheme ? 'dark_grey_pink' : 'yelow-white'


// export const useTheme = () =>{
//     // const [theme, setTheme] = useState(localStorage.getItem('app-them') || defaultTheme)
//     const [theme, setTheme] = useState(localStorage.getItem('app-them'))

//     console.log('theme',localStorage.getItem('app-them'));

//     useLayoutEffect(() =>{
//         document.documentElement.setAttribute('data-theme', theme)
//         localStorage.setItem('app-them', theme)
//     }, [theme])
//     return {theme, setTheme}
// }

import { useLayoutEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState(null); 

    useLayoutEffect(() => {
        // Зчитування теми з localStorage під час монтування компоненту
        const storedTheme = localStorage.getItem('app-them');
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme(defaultTheme || storedTheme);
            localStorage.setItem('app-them', defaultTheme);
        }

    }, []);

    useLayoutEffect(() => {
        if (theme !== null) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('app-them', theme);
        }
    }, [theme]);

    return { theme, setTheme };
}
