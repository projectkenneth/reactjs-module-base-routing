import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import DraftRouter from './DraftManagement/DraftRouter';
import PostRouter from './PostManagement/PostRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/drafts'>Drafts</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/drafts' component={DraftRouter} />
          <Route path='/posts' component={PostRouter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;