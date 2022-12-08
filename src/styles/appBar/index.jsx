import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { Box, color } from "@mui/system";
import { color } from "../theme";
import "@fontsource/montez"
// container
export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    // jus
    marginTop: 4,
    justifyContent: 'center',
    alignItems: "center",
    padding: "2px 8px"
}));
// header
export const AppbarHeader = styled(Typography)(() => ({
    padding: "4px",
flexFlow: 1,
fontSize: "4em",
fontFamily: '"Montez", "cursive"',
color: color.secondary,
}))

export const MyList = styled(List)(({type})=>({
    display: type === 'row' ? 'flex' : "block",
    flexGrow: 3,
    justifyContent:"center",
    alignItems:"center"
}))

export const ActionIconsCOntainerMobile = styled (Box)(()=>({

    
}))
export const ActionIconsCOntainerDesktop = styled (Box)(()=>({

    
}))