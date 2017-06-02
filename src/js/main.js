/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {
    QueryRenderer,
    graphql
} from "react-relay";
import {
    Route,
    HashRouter as Router,
    Switch
} from "react-router-dom";
import Environment from "./Environment";
import Error from "./Error";
import HomeHistorical from "./HomeHistorical";
import HomeHome from "./HomeHome";
import Loading from "./Loading";
import React from "react";
import ReactDOM from "react-dom";

const RelayRoute = ({component, query, variables, ...rest}) => (
    <Route {...rest} render={() => (
        <QueryRenderer
            environment={Environment}
            query={query}
            render={({error, props}) => {
                if (error) {
                    return <Error message={error.message} />;
                } else if (props) {
                    return React.createElement(component, {data: props});
                }
                return <Loading />;
            }}
            variables={variables} />
    )} />
);

ReactDOM.render(
    <Router>
        <Switch>
            <RelayRoute component={HomeHome} exact path="/"
                query={graphql`
                    query mainHomeHomeQuery {
                        ...HomeHome
                    }`
                } />
            <RelayRoute component={HomeHistorical} exact path="/historical/"
                query={graphql`
                    query mainHomeHistoricalQuery($from: Int, $to: Int) {
                        ...HomeHistorical
                    }`
                }
                variables={{
                    from: (new Date()).getTime() - 1000*60*60*24*1,
                    to: (new Date()).getTime(),
                }}
                />
        </Switch>
    </Router>,
    document.getElementById("application")
);
