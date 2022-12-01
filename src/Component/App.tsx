import React, {useState} from 'react';
import css from './app.module.css'
import Counter from "./Counter/Counter";

function App() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div className={css.body}>
            <Counter counter={counter} setCounter={setCounter}/>
        </div>
    );
}

export default App;
