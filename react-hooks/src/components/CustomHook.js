import { useState, useEffect } from "react";
import { useFetch } from './custom-hooks/use-fetch'
export const CustomHook = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );
};
