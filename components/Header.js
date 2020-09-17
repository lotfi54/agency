import React from 'react'
import '../styles/header.scss'
import {
    Box,
    Text,
    Flex
  } from 'rebass'
const Header = props => {
    return (
        <Flex flexWrap='wrap' mx={0}>
        <Box px={2} py={2} width={1/1}
        sx=
        {{
            
        background:'#000',
        height:'100vh'
    
         }}
        >
 <div className="title">
     <h1>Bouraine Lotfi</h1>
 </div>
        </Box>
        </Flex>
    )
}



export default Header

