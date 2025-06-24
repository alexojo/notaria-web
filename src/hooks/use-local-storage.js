import { useState, useEffect, useCallback } from 'react';

// ----------------------------------------------------------------------------

export function useLocalStorage(key, initialValue) {

    const [state, setState] = useState( initialValue );

    useEffect(() => {
        const restored = getLocalStorage(key);
    
        if (restored) {
          setState((prevValue) => ({
            ...prevValue,
            ...restored,
          }));
        }
      }, [key]);


    const updateState = useCallback(

        (updateValue) => {
            
            setState((prevValue) => {

                const newValue = { ...prevValue, ...updateValue };
                setLocalStorage(key, newValue);
                return newValue;

            });
            
        },
        [key]
    );

    const update = useCallback(

        (name, updateValue) => {
          updateState(
            {
              [name]: updateValue,
            },
        );
        },

        [updateState]

    );


    const reset = useCallback(() => {

        setState(initialValue);
        removeLocalStorage(key);
        
    }, [key, initialValue]);

    return {state, update, reset};
    
}

// ----------------------------------------------------------------------------

export const getLocalStorage = (key) => {

    let value = null;

    try {
        const result = window.localStorage.getItem(key);

        if (result) {
            value = JSON.parse(result);
        }

    } catch (error) {
        console.error(error);
    }

    return value;
}

export const setLocalStorage = (key, value) => {
    
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
        console.error(error);
    }
};

export const removeLocalStorage = (key) => {

    try {
        window.localStorage.removeItem(key);
    }
    catch (error) {
        console.error(error);
    }
};