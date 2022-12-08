import { styled, Typography } from '@mui/material'
import { Box, fontSize } from '@mui/system'
import React from 'react'
import { color } from '../theme'

export const PromotionContainer = styled (Box)(({theme})=>({
[theme.breakpoints.up('md')]:{
    padding:"20px 0px 20px 0px"
},
// position:"revert-layer",
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"20px 0px 20px 0px",
overflow: "hidden",
background: color.secondary
}));

export const MessageText = styled (Typography) (({theme}) => ({
    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.up('md')]:{
        fontSize: '3rem',
    },
    color: color.white,
    fontSize:"1.5rem"
})) 
