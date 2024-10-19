import React, { useEffect, useState } from 'react'

const useStorage = (key, initalValue, storageType = 'LOCALSTORAGE') => {
    const storage = storageType === 'LOCALSTORAGE' ? localStorage : sessionStorage;

    const getValue = () => {
        const value = storage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
        return initalValue;
    }

    const removeValue = () => {
        storage.removeItem(key);
    }

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        if (value !== undefined) {
            storage.setItem(key, JSON.stringify(value));
        }
    }, [key, value, storage]);

    return [value, setValue, removeValue];
}

export default useStorage