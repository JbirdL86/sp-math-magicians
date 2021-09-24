import { Route, Switch } from 'react-router-dom';
import NotMatch from './pages/NotMatch';
import ǫuote from './pages/ǫuote';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <ǫuote />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </>
);

export default App;
