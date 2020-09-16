import '../styles/Style.css'
import '../styles/header.scss'
import Header from './Header'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
const Layout = ({children,title}) => {

    return (
<ThemeProvider theme={theme}>
        <header>
        <Header/>
        </header>
        {children}
    </ThemeProvider>

    )
}


export default Layout