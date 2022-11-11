import React, { useEffect, useRef } from 'react';

export const Age = () => {
    const counter = useRef(1);

    useEffect(() => {
        console.log("calling in child");
        counter.current = counter.current + 1;
    }, []);

    return (
        <div>
            {counter.current}
        </div>
    );
};

