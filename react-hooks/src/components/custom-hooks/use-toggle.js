import React, { useState } from 'react';

export const useToggle = (defaultValue) => {

    const [value, setValue] = useState(defaultValue)
    function toggleButton(value) {
      setValue( e => typeof value === "boolean" ? value : !e)
    }
    console.log(value, "h")


    return ([value, toggleButton])
};

