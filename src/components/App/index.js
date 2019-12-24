import React, { useContext } from 'react';
import EtchASketch from '../EtchASketch/index';
import { IsErasedContext } from '../../context/Store';
import { Grid } from './styles';

function App() {
  const [isErased] = useContext(IsErasedContext);

  return (
    <Grid isErased={isErased} >
        <EtchASketch />
    </Grid>
  );
}

export default App;
