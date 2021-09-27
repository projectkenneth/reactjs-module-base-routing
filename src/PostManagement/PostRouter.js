import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PostListing from './PostListing';
import PostUpdate from './PostUpdate';

function PostRouter() {
    let { path } = useRouteMatch();

    return (
        <div>
            <strong>You are in post management</strong>
            <Switch>
                <Route exact path={path}>
                    <PostListing modulePath={path} />
                </Route>
                <Route path={`${path}/:postId`} component={PostUpdate} />
            </Switch>
        </div>
    );
}

export default PostRouter;