import { useEffect } from 'react';
import { useGlobal } from '../../providers/Global';

export const useFetch = (url, actionType) => {
    const { dispatch } = useGlobal();

    useEffect(() => {
        if (url) {
            fetch(url).then(response => {
                if (response.ok) {
                    // HTTP-status is 200-299
                    response.json().then(data => {
                        dispatch({ type: actionType, payload: data.items });
                    })
                } else {
                    console.log(`HTTP-Error: ${response.status}`);
                }
            })
        }
    }, [url, actionType, dispatch]);
}