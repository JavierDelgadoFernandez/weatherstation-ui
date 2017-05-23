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
    createFragmentContainer,
    graphql
} from "react-relay";
import React from "react";
import {Statistic} from "semantic-ui-react";

export default createFragmentContainer(
    ({data: measure}) =>
        <Statistic.Group widths="three">
            <Statistic>
                <Statistic.Value>
                    {`${measure.temperature} °C`}
                </Statistic.Value>
                <Statistic.Label>
                    Temperature
                </Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>
                    {`${measure.humidity} %`}
                </Statistic.Value>
                <Statistic.Label>
                    Humidity
                </Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>
                    {`${measure.pressure} Pa`}
                </Statistic.Value>
                <Statistic.Label>
                    Pressure
                </Statistic.Label>
            </Statistic>
        </Statistic.Group>,
    graphql`
        fragment ControlMeasure on Measure {
            temperature
            humidity
            pressure
        }`,
)
