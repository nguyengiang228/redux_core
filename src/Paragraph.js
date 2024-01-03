import { useContext } from "react"
import {ThemeContext} from './ThemeContext'

function Paragraph() {
    const context = useContext(ThemeContext)
    
    return(
        <p className={context.theme}>
        Context provides a was to pass data throgh the component without having to pass props down manually at every level.
      </p>
    )
}

export default Paragraph