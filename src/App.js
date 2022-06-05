import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode, useState } from 'react';
import ThemeContext from './utils/ThemeContext';
import SearchParams from './search/SearchParams';
import Details from './details/Details';

import '../css/style.css';
import '../public/index.html';

const App = () => {
  const theme = useState('darkblue');
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to='/'>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path='/details/:id' element={<Details />} />
            <Route path='/' element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
