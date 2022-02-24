import React from 'react';
import './App.css';

type PropsType = {
    setFigures: (value: number) => void
    reset: () => void
    figuresMin: number
    figuresMax: number
    state: number | null
    minState: number
    inc: () => void
}

export function Counter(props: PropsType) {
    const Style = {
        width: '160px',
        height: '90px',
        border: '1px solid black',
        display: 'flex',
        padding: '2px',
        margin: '20px auto 0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px'
    };



    const onStyle = {
        width: '80px',
        height: '40px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',

    };

    const offStyle = {
        width: '80px',
        height: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '6px',
        marginTop: '6px',
        padding: '2px',
    };
    const getErrorAndNormalize = () => {
        if (props.state === null) {
            return 'enter values and press \'set\' '
            // и после нажатия кнопки "Set" здесь появляется minState
        } else

        if ( props.figuresMin < 0 || props.figuresMax <= props.figuresMin) {
            return 'Incorrect value!'
            // и эти две кнопки (inc, reset) становятся некликабельными
        } else {
            return props.state;
        }
    }


    return (<div className={'Counter'}>
        <div style={Style}>

            {getErrorAndNormalize()}


        </div>

        <button disabled={props.state === null } style={onStyle} onClick={() => props.inc()}>inc</button>

        <button style={offStyle} onClick={props.reset}>reset</button>


    </div>)

}