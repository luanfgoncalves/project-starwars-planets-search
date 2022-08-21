import React, { useEffect, useState } from 'react';
// import { Children } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import PlanetsContext from './PlanetsContext';
// import PropTypes from 'prop-types';

PlanetsProvider = (finalData) => {
  // nota: /planetsData/ é o estado global que guarda os dados dos planetas e /setPlanetsData/ é o "setState"  que declara /planetsData/
  const [planetsData, setPlanetsData] = useState([]);

  // nota: /useEffect/ é a função nativa que
  useEffect(() => {
    const getPlanets = async () => {
      const completeData = await fetchApi();
      // const planetFilter = (element) => {
      //   element !== element.residents;
      // };
      const filteredData = completeData.filter((data) => data !== data.residents);
      setPlanetsData(filteredData);
    };
    getPlanets();
  }, []);

  return (
    // nota: dar um nome unico ao provide pra não confundior com a função nativa, não use só /Provider/
    <PlanetsContext.Provider value={ { planetsData } }>
      { finalData }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  finalData: PropTypes.node.isRequired,
};

export default PlanetsProvider;

// Referência: https://stackoverflow.com/questions/50206801/what-is-the-difference-between-proptypes-node-and-proptypes-any-in-react

// https://pt-br.reactjs.org/docs/hooks-effect.html
