import React from 'react';
import { useToggle } from './custom-hooks/use-toggle';

const ToggleComponent = () => {
    const [value, toggleButton] = useToggle(false)
    return (
        <div>
            <button onClick={toggleButton}> Toggle button</button>
            <button onClick={() => toggleButton(true)}>  True Toggle </button>
            <button onClick={() => toggleButton(false)}>  False Toggle </button>
            {value}
        </div>
    );
};

export default ToggleComponent;