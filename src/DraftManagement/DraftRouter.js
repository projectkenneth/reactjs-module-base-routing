import { Route, Switch, useRouteMatch } from 'react-router-dom';

import DraftListing from './DraftListing';
import DraftUpdate from './DraftUpdate';

function DraftRouter() {
    let { path } = useRouteMatch();

    return (
        <div>
            <strong>You are in draft management</strong>
            <Switch>
                <Route exact path={path}>
                    <DraftListing modulePath={path} />
                </Route>
                <Route path={`${path}/:draftId`} component={DraftUpdate} />
            </Switch>
        </div>
    );
}

export default DraftRouter;