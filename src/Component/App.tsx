import React, {useState} from 'react';
import css from './app.module.css'
import Counter from "./Counter/Counter";
import Jokes from "./Jokes/Jokes";

function App() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div className={css.body}>
            <Counter counter={counter} setCounter={setCounter}/>
            <Jokes counter={counter}/>
        </div>
    );
}

export default App;
