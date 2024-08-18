import {createContext} from 'react';

export const themes = {
  Admin: {
    backgroundColor: '#f8f9fa',
    color: '#343a40',
  },
  Editor: {
    backgroundColor: '#fefefe',
    color: '#495057',
  },
  Viewer: {
    backgroundColor: '#fff',
    color: '#212529',
  },
};

export const ThemeContext = createContext(themes.Viewer);
