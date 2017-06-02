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
    Menu,
    Container as UIContainer
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React from "react";

export default function App({children}) {
    return <UIContainer>
        <Menu pointing secondary>
            <Menu.Item as={Link} header to="/">
                WeatherStation
            </Menu.Item>
            <Menu.Item as={Link} to="/historical/">
                Historical
            </Menu.Item>
        </Menu>
        {children}
    </UIContainer>;
}
