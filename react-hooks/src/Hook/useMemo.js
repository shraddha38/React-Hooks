import React from 'react';

function calculateSumCube(a, b) {
    console.log("Calculate sum cube");
    return a * a * a + b * b * b;
}
const CalculateSumHook = ({ a, b }) => {
    const [firstValue, setFirstValue] = React.useState(0);
    const [secondValue, setSecondValue] = React.useState(0);

    const firstValueRef = React.useRef();
    const secondValueRef = React.useRef();

    const memoizedValue = React.useMemo(() => calculateSumCube(firstValue, secondValue), [firstValue, secondValue]);

    const handleClick = () => {
        setFirstValue(firstValueRef.current.value);
        setSecondValue(secondValueRef.current.value);
        console.log("Sum cube: ", memoizedValue);
    };

    return (
        <div>
            <input type="text" ref={firstValueRef} />
            <input type="text" ref={secondValueRef} />

            <button onClick={handleClick}>Calculate</button>
        </div>
    );
};

export default CalculateSumHook;