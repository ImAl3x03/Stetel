import React from 'react';
import css from "./counter.module.css"

interface CounterProps {
    counter: number;
    setCounter: any;
}

const Counter: React.FC<CounterProps> = ({counter, setCounter}) => {
    return (
        <>
            <p className={`${css.paragraph} ` + (counter === 0 ? `${css.zero}` : "")}>{"Counter: " + counter}</p>

            <div>
                <button
                    className={css.button}
                    onClick={() => setCounter(counter + 1)}
                >
                    Increment
                </button>

                <button
                    className={css.button}
                    onClick={() => setCounter(0)}
                >
                    Reset
                </button>
            </div>
        </>
    );
}

export default Counter