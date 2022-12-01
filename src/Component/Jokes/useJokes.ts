import {useState, useMemo, useEffect} from "react";
import axios from "axios";

const useJokes: (counter: number) => string = (counter) => {
    const [jokes, setJokes] = useState<string>("");

    const url: string =  useMemo<string>(() => "https://api.chucknorris.io/jokes/random", []);

    useEffect(() => {
        if (counter !== 0) {
            void axios.get(url)
                .then(({data}) => {
                    setJokes(data.value);
                });
        }
    }, [url, counter])

    return jokes;
}

export {useJokes}
