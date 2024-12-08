import InputComponent from './Input';
import ListComponent from './List';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { store } from './Redux/Store';
import { actions } from './Redux/Slice';

function App() {
  return (
    <Container fixed>
      <InputComponent/>
      <ListComponent />
    </Container>
  );
}

export default App;
