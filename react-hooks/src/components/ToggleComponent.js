import React from 'react';
import { useToggle } from './custom-hooks/use-toggle';

const ToggleComponent = () => {
    const [value, toggleButton] = useToggle(false);

    const printSomething = () => {
        for (let i = 1; i < 8; i++)
            setTimeout(() => {
                console.log(`printing it for`)
                console.log(`two ${value}`)
            }, i * 1000)
    }
    return (
        <div>
            <button onClick={toggleButton}> Toggle button</button>
            <button onClick={() => toggleButton(true)}>  True Toggle </button>
            <button onClick={() => toggleButton(false)}>  False Toggle </button>
            {printSomething()}
        </div>
    );
};

export default ToggleComponent;