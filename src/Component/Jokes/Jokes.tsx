import React from 'react';
import css from "./jokes.module.css";
import {useJokes} from "./useJokes";

interface JokesProps {
    counter: number;
}

const Jokes: React.FC<JokesProps> = ({counter}) => {
    const jokes = useJokes(counter);

    return (
        <div className={css.jokes}>
            {jokes}
        </div>
    );
}

export default Jokes