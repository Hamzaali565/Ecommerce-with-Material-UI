import { AppBar, Button, Container,ThemeProvider} from '@mui/material';
// import ThemeProvider from '@mui/system';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home"
  }, [])
  return (
    <ThemeProvider theme={theme}>

    <Container
    maxWidth="xl"
    sx={{
      background:"#fff"
    }}
    >
      <Appbar />
      <Button variant='contained'>Text</Button>
    </Container>
      </ThemeProvider>
  );
}

export default App;
