import React from 'react';
import './App.css';

type PropsType = {
    setMaxState: (value: number) => void
    setMinState: (value: number) => void
    setState: (value: number) => void
    onChange: () => void
    onSet: (value: number) => void
    disabled: boolean
    figuresMax: number
    figuresMin: number
}

export function Set(props: PropsType) {


    const Style = {
        width: '160px',
        height: '90px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginTop: '20px',

    };

    const onStyle = {
        width: '166px',
        height: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginTop: '6px',
        padding: '2px',

    };

    const offStyle = {
        width: '166px',
        height: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginTop: '6px',
        padding: '2px',

    };



    //здесь пишется функция с проверкой

    return <div className={'Set'}>
        <div style={Style}>
            max value: <input type="number"
                              value={props.figuresMax}
                              onChange={(e) => props.setMaxState(+e.currentTarget.value)}/>
            start value: <input type="number"
                                value={props.figuresMin}
                                onChange={(e) => props.setMinState(+e.currentTarget.value)}
        />
        </div>

        <button disabled={props.disabled }
                style={onStyle}
                onClick={() => props.onSet(props.figuresMin)
                    // и эта кнопка становится некликабельной
                }
        > set
        </button>

    </div>

}
