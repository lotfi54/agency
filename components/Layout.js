import '../styles/Style.css'
import '../styles/header.scss'
import SidebarNav from '../components/menu/Menu'
import Menu from '../components/menu/SidebarNav'
import Header from './Header'
import { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
const Layout = ({children}) => {

const [menuState,setMenuState] = useState(false);

    return (
<>
       <SidebarNav menuState={menuState} setMenuState={setMenuState} />
       <Menu menuState={menuState} setMenuState={setMenuState} />
        <Header/>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
 </>

    )
}


export default Layout