import React, { useContext } from 'react';
// import PropTypes, { element } from 'prop-types';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planetsList } = useContext(PlanetsContext);
  const { filterByName } = useContext(PlanetsContext);
  // const nameCondition = ({ name }) => {
  //   name.toLowerCase().includes(filterByName.name.toLowerCase());
  // };
  const nmLow = filterByName.name.toLowerCase();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {/* {planetsData.map((element) => ( */}
        {/* {planetsData.filter(nameCondition).map((element) => ( */}
        {planetsList.filter(({ name }) => name.toLowerCase().includes(nmLow)).map((e) => (
          <tr key={ e.name }>
            <td data-testid="planet-name">{e.name}</td>
            <td>{e.rotation_period}</td>
            <td>{e.orbital_period}</td>
            <td>{e.diameter}</td>
            <td>{e.climate}</td>
            <td>{e.gravity}</td>
            <td>{e.terrain}</td>
            <td>{e.surface_water}</td>
            <td>{e.population}</td>
            <td>{e.films}</td>
            <td>{e.created}</td>
            <td>{e.edited}</td>
            <td>{e.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  planetsData: PropTypes.node,
}.isRequired;

export default Table;
