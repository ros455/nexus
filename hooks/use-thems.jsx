// import { useLayoutEffect, useState } from "react"

// const isDarkTheme = window?.matchMedia('(prefers-color-scheme:dark)').matches
// const defaultTheme = isDarkTheme ? 'dark_grey_pink' : 'yelow-white'


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

'use client'

import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(null);

    // Визначення значення за замовчуванням на основі налаштувань користувача
    let defaultTheme = '';
    if (typeof window !== 'undefined') {
        const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        defaultTheme = isDarkTheme ? 'dark_grey_pink' : 'yelow-white';
    }

    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem('app-them');
        if (!storedTheme && defaultTheme) {
            localStorage.setItem('app-them', defaultTheme);
            setTheme(defaultTheme);
        } else {
            setTheme(storedTheme);
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
