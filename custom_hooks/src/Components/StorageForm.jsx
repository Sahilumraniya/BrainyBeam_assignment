import React, { useEffect, useState } from 'react'
import useStorage from '../hooks/useStorage';

const StorageForm = ({ storageType = 'LOCALSTORAGE' }) => {
    const [data, setData] = useState()
    const [value, setValue, removeValue] = useStorage('name', '', storageType);

    const handleChange = () => {
        setValue(data);
    }

    return (
        <div>
            Value : <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            <br />
            <button onClick={handleChange}>Save</button>
            <br />
            <button onClick={removeValue}>Remove</button>
        </div>
    )
}

export default StorageForm