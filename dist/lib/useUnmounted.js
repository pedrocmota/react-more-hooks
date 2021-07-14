import { useEffect } from 'react';
export const useUnmonted = (func) => {
    useEffect(() => {
        return () => void func();
    }, []);
};
export default useUnmonted;
