import React, { useContext } from 'react';
import { CountContext } from "./CounterWrapper";

export const Counter = () => {
    const { count, increase, decrease } = useContext(CountContext);
    return (
        <div>
            <button onClick={decrease}>-</button>
            <div className="count">{count}</div>
            <button onClick={increase}>+</button>
        </div>
    );
};