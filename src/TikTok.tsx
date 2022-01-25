import React from 'react';
import './App.css';

type TikTokPropsType = {
    setFigures: (value: number) => void
    onChange: () => void
    disabled: boolean
    figures: number

}

export function TikTok(props: TikTokPropsType) {

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',

    };

    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',

    };


    return <div className={"TikTok"}>


    <button  style={onStyle} onClick={() => props.setFigures(props.figures + 1)} >inc</button>

    <button disabled={props.disabled} style={offStyle} onClick={props.onChange} >reset</button>

</div>

}