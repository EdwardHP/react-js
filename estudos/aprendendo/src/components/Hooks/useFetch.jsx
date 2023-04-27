import React, { useEffect, useState } from 'react'

export function useFetch(url) {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(setData)
        .catch((error) => console.error(error));
    }, []);

    return { data };
}