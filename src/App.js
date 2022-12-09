import { AppBar, Button, Container, Slider, ThemeProvider } from '@mui/material';
// import ThemeProvider from '@mui/system';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
// import Slider from './components/promotion';
import Promotion from './components/promotion';
import Product from './components/Product/Product';

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home"
  }, [])
  return (
    <ThemeProvider theme={theme}>

      <Container
        maxWidth="xl"
        sx={{
          background: "#fff"
        }}
      >
        <Appbar />
        <Banner />
        <Promotion />
        <Product />
      </Container>
    </ThemeProvider>
  );
}

export default App;
