import React, { useContext } from 'react';
import Store from '../../context/Store';
import EtchASketch from '../EtchASketch/index';
import { GlobalStyles, Grid } from './styles';
import { IsErasedContext } from '../../context/Store';

function App() {
  const [isErased] = useContext(IsErasedContext);

  return (
    <>
      <GlobalStyles />
      <Grid>
        <Store>
          <EtchASketch />
        </Store>
      </Grid>
    </>
  );
}

export default App;
