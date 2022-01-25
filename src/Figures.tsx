import React from 'react';
import './App.css';

type PropsType = {
    figures: number
}
export function Figures(props: PropsType) {

    const Style = {
        width: '76px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginTop: '20px',
    };

    return <div>

        <div style={Style}> {props.figures}</div>

    </div>

}