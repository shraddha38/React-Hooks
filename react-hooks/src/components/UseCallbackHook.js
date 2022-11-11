import { TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Age } from './Age';

export const UseCallbackHook = () => {
    const [firstName, setFirstName] = useState("");

    const callbackChild = useCallback(() => {
        return <Age />
    }, [])

    return (
        <div>
            <TextField
                margin="normal"
                required
                fullWidth
                id="Name"
                type="text"
                label="Name"
                name="Name"
                autoComplete='off'
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value)
                }}

            />
            {
                firstName
            }
            {callbackChild()}
        </div>
    );
};

