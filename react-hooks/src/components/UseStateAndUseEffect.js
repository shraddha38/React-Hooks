import React, { useState, useEffect } from 'react';

export const UseStateAndUseEffect = () => {
    const [dataSet, setDataSet] = useState([]);

    async function fetchData() {
        var response = await fetch("https://jsonplaceholder.typicode.com/todos");
        var data = await response.json();
        setDataSet(data);
        console.log(data)
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {
                dataSet.map((i) => {
                    return <li>{i.title}</li>
                })
            }
        </div>
    );
};

