import { Favorite, Person, ShoppingCart } from '@mui/icons-material'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'
import { MyList } from '../../styles/appBar'
import { ActionIconsCOntainerDesktop } from '../../styles/appBar'
import { ActionIconsCOntainerMobile } from '../../styles/appBar'
import { color } from '../../styles/theme'


const Actions = ({matches}) => {
    const Components = matches ?
        ActionIconsCOntainerMobile
        :
        ActionIconsCOntainerDesktop;
    return (
        <Components>
            <MyList type="row">
                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && color.secondary
                        }}
                    >
                        <ShoppingCart />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />

                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && color.secondary

                        }}
                    >
                        <Favorite />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />

                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && color.secondary

                        }}
                    >
                        <Person />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />

            </MyList>
        </Components>
    )
}

export default Actions