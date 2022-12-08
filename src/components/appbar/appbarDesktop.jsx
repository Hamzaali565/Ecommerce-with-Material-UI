import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { Component } from 'react'
import SearchIcon from "@mui/icons-material/Search"
import { MyList } from '../../styles/appBar'
import { AppbarContainer } from '../../styles/appBar'
import { AppbarHeader } from '../../styles/appBar'
import Actions from './Actions'

const AppbarDesktop = ({ matches }) => {

    return (

        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>

            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="About Us" />
            </MyList>
            <ListItemButton>
                <ListItemIcon>
                    <SearchIcon />
                </ListItemIcon>
            </ListItemButton>
            <Actions matches={matches} />
        </AppbarContainer>

    )
}

export default AppbarDesktop