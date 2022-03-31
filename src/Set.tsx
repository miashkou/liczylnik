import React from 'react';
import './App.css';
import {Button3} from './Button3';

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

    const ButtonWrapperStyle = {
        width: '160px',
        height: '45px',
        border: '1px solid black',
        display: 'flex',
        padding: '2px',
        margin: '5px auto 0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px'
    }

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

    function getMaxError() {
        if (props.figuresMin < 0 || props.figuresMax <= props.figuresMin || props.figuresMax == props.figuresMin) {
            return true
        } else {
            return false
        }

    }

    function getMinError() {
        if (props.figuresMax < 0 || props.figuresMax <= props.figuresMin || props.figuresMax == props.figuresMin) {
            return true
        } else {
            return false
        }

    }


    return <div className={'Set'}>
        <div style={Style}>

            {/*заменяем props.setMaxState на новую фукцию проверки в реальном времени*/}

            max value: <input type="number"

            className={getMaxError() ? 'BorderRed' : ''}

                              value={props.figuresMax}
                              onChange={(e) => props.setMaxState(+e.currentTarget.value)}
        />
            start value: <input type="number"
                                value={props.figuresMin}
                                onChange={(e) => props.setMinState(+e.currentTarget.value)}
        />
        </div>

        <div style={ButtonWrapperStyle}>
            <Button3 title={'Set'}
                     disabled={props.disabled}
                     onClick={() => props.onSet(props.figuresMin)}


            />
        </div>


        {/*<button disabled={props.disabled }*/}
        {/*        style={onStyle}*/}
        {/*        onClick={() => props.onSet(props.figuresMin)*/}
        {/*            // и эта кнопка становится некликабельной*/}
        {/*        }*/}
        {/*> set*/}
        {/*</button>*/}


    </div>

}
