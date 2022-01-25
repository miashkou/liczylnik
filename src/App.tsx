import React, {useState} from 'react';

import './App.css';
import {TikTok} from './TikTok';
import {Figures} from './Figures';

function App() {

    const maxValue = 5;
    const minValue = 0;

let [figures, setFigures] = useState(0)

    function reset() {
    setFigures(0)
    }

  return (
      <div className={"App"}>

        <Figures figures={figures}/>
        <TikTok
            setFigures={setFigures}
            figures={figures}
            onChange={reset}
            disabled={figures === 0}
        />

      </div>

  );
}

export default App;
