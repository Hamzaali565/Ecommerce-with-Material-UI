import { useTheme } from '@emotion/react';
import { Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { BannerCont, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner';

const Banner = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <BannerCont>
                <BannerImage src='https://c1.wallpaperflare.com/preview/293/253/161/bag-arm-fashion-style.jpg'/>
            <BannerContent>
                <Typography variant='h6'>Huge Collection</Typography>
                <BannerTitle variant='h2'>
                    New Bags
                </BannerTitle>
                <BannerDescription variant='subtitle1'>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour
                    , or randomised words which don't look even slightly believable.
                </BannerDescription>
            </BannerContent>
        </BannerCont>
    )
}

export default Banner