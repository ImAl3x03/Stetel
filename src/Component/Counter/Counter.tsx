import React from 'react';

interface CounterProps {
    counter: number;
    setCounter: any;
}

const Counter: React.FC<CounterProps> = ({counter, setCounter}) => {
    return (
        <>
            <p>{"Counter: " + counter}</p>

            <button
                onClick={() => setCounter(counter + 1)}
            >
                Increment
            </button>

            <button
                onClick={() => setCounter(0)}
            >
                Reset
            </button>
        </>
    );
}

export default Counter