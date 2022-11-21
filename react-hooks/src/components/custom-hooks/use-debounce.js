import React, { useState } from 'react';
import { useFetch } from './use-fetch';

const useDebounce = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [value, setValue] = useState([data]);
    const getData = () => {
        console.log(value, "val")
        return value
    }
    function debounce(getData, delay) {
        let timer;
        return function () {
            let context = this;
            let args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                getData.apply(context, args);
            }, delay);

        }
    }


    const betterFunction = debounce(getData, 2000)
    betterFunction();
    return (
        <div>
            <button onClick={() => betterFunction()}> Toggle button</button>
        </div>
    );
};

export default useDebounce;

