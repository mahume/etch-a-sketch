import React from 'react';
import Store from '../../context/Store';
import EtchASketch from '../EtchASketch/index';
import { Grid } from './styles';

function App() {
  return (
    <Grid>
      <Store>
        <EtchASketch />
      </Store>
    </Grid>
  );
}

export default App;
