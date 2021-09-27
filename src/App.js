import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import DraftListing from './DraftManagement/DraftListing';
import DraftUpdate from './DraftManagement/DraftUpdate';
import PostListing from './PostManagement/PostListing';
import PostUpdate from './PostManagement/PostUpdate';

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
          <Route exact path='/drafts' component={DraftListing} />
          <Route path='/drafts/:draftId' component={DraftUpdate} />
          <Route exact path='/posts' component={PostListing} />
          <Route path='/posts/:postId' component={PostUpdate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;