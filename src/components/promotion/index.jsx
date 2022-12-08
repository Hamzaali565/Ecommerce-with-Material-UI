import { Tune } from '@mui/icons-material'
import { Slide } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { MessageText, PromotionContainer } from '../../styles/Promotion'
let Mesasages = [
    "20% off on your first order",
    "Summer sale starts now, visit any store.",
    "Shopping Laazmi Kerneka Re BaBa :) "
]
const Promotion = () => {
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);

        const intervalId = setInterval(() => {
            setMessageIndex((i) => (i + 1) % Mesasages.length)
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 3000)
        }, 4000)
        return () => {
            clearInterval(intervalId);
        }
    }, [])
    return (
        <PromotionContainer>
            <Slide
                direction={ show ? "left" : "right"}
                in={show}
                timeout={{
                    enter:500,
                    exit: 100
                }}
            >
                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    <MessageText>
                        {Mesasages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionContainer>
    )
}

export default Promotion