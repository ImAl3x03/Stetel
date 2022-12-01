import React, {useEffect, useState} from 'react';
import axios from "axios";
import css from "./jokes.module.css";

interface JokesProps {
    counter: number;
}

const url: string = "https://api.chucknorris.io/jokes/random";

const Jokes: React.FC<JokesProps> = ({counter}) => {
    const [jokes, setJokes] = useState<string>("");

    useEffect(() => {
        if (counter !== 0) {
            void axios.get(url)
                .then(({data}) => {
                    setJokes(data.value);
                });
        }
    }, [counter])

    return (
        <div className={css.jokes}>
            {jokes}
        </div>
    );
}

export default Jokes