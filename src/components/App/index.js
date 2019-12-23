import React from 'react';
import Store from '../../context/Store';
import EtchASketch from '../EtchASketch/index';
import { GlobalStyles, Grid } from './styles';

function App() {
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
