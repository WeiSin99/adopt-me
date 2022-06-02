import { render } from 'react-dom';
import SearchParams from './SearchParams';

import './style.css';
import './index.html';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById('root'));
