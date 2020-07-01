import { useState, useLayoutEffect, useRef } from 'react';


export const useCostumeDivHight = () => {
    const [ rectHight, setRectHight ] = useState(0);
    const targetRef = useRef();

    useLayoutEffect(() => {
        const dim = targetRef.current.getBoundingClientRect()
        setRectHight(dim.height);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetRef.current])

    return [rectHight, targetRef]
}