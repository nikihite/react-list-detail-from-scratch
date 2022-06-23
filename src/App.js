import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ListPage from './ListPage';
import DetailPage from './DetailPage';

export default function App() {
  return (
    <Router>
      <div className='App'>
        Disney Movies & Tv Shows
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route exact path="/movies/:id">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}