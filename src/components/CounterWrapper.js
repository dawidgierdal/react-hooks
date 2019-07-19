import React, { useState } from 'react';
import { Counter } from './Counter';
export const CountContext = React.createContext();

export const CounterWrapper = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    };
    const decrease = () => {
        setCount(count - 1)
    };

    return (
        <React.Fragment>
            <CountContext.Provider
                value={{ count, increase, decrease }}
            >
                <Counter />
            </CountContext.Provider>
        </React.Fragment>
    )
};

