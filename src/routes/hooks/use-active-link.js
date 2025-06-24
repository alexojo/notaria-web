import { matchPath, useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useActiveLink(targetPath, matchDeeply = true) {
    const location = useLocation();
    const currentPath = location.pathname;
  
    const exactMatch = targetPath ? Boolean(matchPath({ path: targetPath, end: true }, currentPath)) : false;
    const partialMatch = targetPath ? Boolean(matchPath({ path: targetPath, end: false }, currentPath)) : false;
  
    return matchDeeply ? partialMatch : exactMatch;
}
