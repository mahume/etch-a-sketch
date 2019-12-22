import React, { useContext } from 'react';
import Store, { IsErasedContext } from '../../context/Store';
import EtchASketch from '../EtchASketch/index';
import { GlobalStyles, Grid } from './styles';

function App() {
  // TypeError: Invalid attempt to destructure non-iterable instance
  const [isErased] = useContext(IsErasedContext);

  return (
    <>
      <GlobalStyles />
      <Store>
        <Grid>
          <EtchASketch />
        </Grid>
      </Store>
    </>
  );
}

export default App;
