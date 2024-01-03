import { useState, createContext } from "react";

const ThemeContext = createContext()

function ThemeProvider({ children }) {      //Wrapper và thêm children vào props
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light': 'dark')
    }

    const value = {
        theme, 
        toggleTheme
    }

    return( 
        <ThemeContext.Provider value={value}>
            {children} {/*lúc này children sẽ được nhận dữ liệu từ bên App.js */}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}