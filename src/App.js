import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/search';
import {Router} from '@reach/router';
import Results from './components/results';

function App() {
  return (
    <div className="App">
      <Search/>

      <Router>
        <Results path = "/:resource/:id"></Results>

      </Router>

    </div>
  );
}

export default App;
