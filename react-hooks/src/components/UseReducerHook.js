import { Button } from '@mui/material';
import React, { useEffect, useReducer } from 'react';

export const ACTION_TYPES = {
    INCREEMENT: "increement",
    DECREMENT: "decrement"
}
function reducer(state, action) {

    switch (action.type) {
        case ACTION_TYPES.INCREEMENT:
            return { count: state.count + 1 }
        case ACTION_TYPES.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state;
    }

}

export const UseReducerHook = () => {   
    
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <Button
                onClick={
                    dispatch({ type: ACTION_TYPES.INCREEMENT })
                }
            >
            Add
            </Button>
            <Button
                onClick={
                    dispatch({ type: ACTION_TYPES.DECREMENT })
                }
            >
            Delete
            </Button>
            {state}
        </>
    );
};

