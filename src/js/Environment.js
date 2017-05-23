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
    Environment,
    Network,
    RecordSource,
    Store
} from "relay-runtime";

async function fetchQuery(operation, variables) {
    const response = await fetch("http://localhost:3002/graphql", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    });
    return response.json();
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({
    network,
    store,
});

export default environment;
