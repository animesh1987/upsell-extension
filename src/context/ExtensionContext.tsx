import { createContext, useContext } from 'react';
import { extensionServiceInstance } from '../service';

const ExensionContext = createContext(extensionServiceInstance);

export function useExtension() {
    const context = useContext(ExensionContext);

    if (!context) {
        throw new Error('useExtension must be used within ExtensionProvider');
    }

    return context;
}

export function ExtensionProvider({ children }) {
    return <ExensionContext.Provider value={extensionServiceInstance}>{children}</ExensionContext.Provider>;
}
