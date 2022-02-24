import React, {useState} from 'react';

import './App.css';
import {TikTok} from './TikTok';
import {Figures} from './Figures';
import {Counter} from './Counter';
import {Set} from './Set';

function App() {
    // const maxValue = 5;
    // const minValue = 0;

    let [maxState, setMaxState] = useState(10)
    let [minState, setMinState] = useState(0)

    let [state, setState] = useState<null | number>(null)


    function reset() {
        setState(minState)
    }

    function onSet(value: number) {
        // let maxValue = maxState
        // let minValue = minState
        setState(value)
    }

    function inc() {
        if ( typeof state === 'number') setState(state + 1)
    }

    function setMax(value: number) {
        setMaxState(value);
        setState(null);
    }

    function setMin(value: number) {
        setMinState(value);
        setState(null);
    }

    console.log('state: ', state)
    return (
        <div className={'App'}>

            {/*{state}*/}
            <Set figuresMax={maxState}
                 figuresMin={minState}
                 setMaxState={setMax}
                 setMinState={setMin}
                 setState={setState}
                 onSet={onSet}
                 onChange={reset}
                 disabled={!!state}/>

            <Counter figuresMin={minState}
                     figuresMax={maxState}
                     setFigures={setMinState}
                     reset={reset}
                     state={state}
                     minState={minState}
                     inc={inc}
            />

        </div>
    );
}

export default App;
