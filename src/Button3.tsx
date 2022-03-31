import React from 'react';
import './App.css';

type PropsType = {
    title: string
    disabled: boolean
    onClick: () => void
}

export function Button3 (props: PropsType) {

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

    // const {title, disabled} = props

    return (
        <div className={'Button3'}>

            <button
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {props.title}
            </button>

        </div>

    )
}