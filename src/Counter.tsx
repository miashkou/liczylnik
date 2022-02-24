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

        if ( props.figuresMin < 0 || props.figuresMax <= props.figuresMin ) {
            return 'Incorrect value!'
            // и эти две кнопки (inc, reset) становятся некликабельными
        } else

        // if (props.figuresMax === props.figuresMin ) {
        //     return props.state === null
        //     //выводим большую красную цифру
        //     // и кнопка inc становится некликабельной
        // } else

            return props.state;

    }

    let isDisable = props.state === props.figuresMax

    return (<div className={'Counter'}>
        <div style={Style}>

            <span style={isDisable ? {color: 'red', fontSize: '45px' } : {}}>{getErrorAndNormalize()}</span>


        </div>

        <button disabled={isDisable} style={onStyle} onClick={() => props.inc()}>inc</button>

        <button style={offStyle} onClick={props.reset}>reset</button>


    </div>)

}