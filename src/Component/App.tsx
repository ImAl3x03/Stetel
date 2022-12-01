import React, {useState} from 'react';
import Counter from "./Counter/Counter";

function App() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <>
            <Counter counter={counter} setCounter={setCounter}/>
        </>
    );
}

export default App;
