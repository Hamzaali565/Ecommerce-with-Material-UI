import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import SearchIcon from "@mui/icons-material/Search"
import { MyList } from '../../styles/appBar'
import { AppbarContainer } from '../../styles/appBar'
import { AppbarHeader } from '../../styles/appBar'
import Actions from './Actions'
import { ActionIconsCOntainerDesktop } from '../../styles/appBar'
import { ActionIconsCOntainerMobile } from '../../styles/appBar'

const AppbarDesktop = ({ matches }) => {
    const Components = matches ?
        ActionIconsCOntainerMobile
        :
        ActionIconsCOntainerDesktop;
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
            <Actions />
        </AppbarContainer>

    )
}

export default AppbarDesktop