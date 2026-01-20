import { createContext, useContext, useCallback, useState } from 'react';
import { executeTs } from '../lib/tsEngine';

const TsContext = createContext();

export const TsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const runCode = useCallback(async (code) => {
        setIsLoading(true);
        try {
            const result = await executeTs(code);
            setIsLoading(false);
            return {
                success: !result.error,
                logs: result.logs,
                error: result.error,
                result: result.result
            };
        } catch (e) {
            setIsLoading(false);
            return {
                success: false,
                logs: [],
                error: e.message,
                result: null
            };
        }
    }, []);

    return (
        <TsContext.Provider value={{ runCode, isLoading }}>
            {children}
        </TsContext.Provider>
    );
};

export const useTs = () => useContext(TsContext);
