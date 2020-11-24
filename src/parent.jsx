import React from 'react';
import Title from './comps/title';
import { Uploadform } from './comps/uploadForm';

function Parent() {
  return (
    <div className="App">
      <Title/>
      <Uploadform/>
    </div>
  );
}

export default Parent;