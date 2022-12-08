import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import React from 'react'
import AppbarDesktop from './appbarDesktop'
import AppbarMobile from './appbarMobile'

const Appbar = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            {
                matches ? <AppbarMobile matches={matches} />
                    :
                    <AppbarDesktop matches={matches} />
            }
        </div>
    )
}

export default Appbar