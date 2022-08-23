import React, { useEffect, useState } from 'react';
// import { Children } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  // nota: /planetsData/ é o estado global que guarda os dados dos planetas e /setPlanetsData/ é o "setState"  que declara /planetsData/
  const [planetsData, setPlanetsData] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [filterByName, setNameFilter] = useState({ name: '' }); // estado global que guarda o nome que vai ser aplicado no filto

  const getPlanets = async () => {
    setLoading(true);
    const response = await fetchApi();
    const planets = response.results;
    setLoading(false);
    setPlanetsData(planets);
  };

  // nota: /useEffect/ é a função nativa que faz o cpnt did mount
  useEffect(() => {
    getPlanets();
  }, []);

  return (
    // nota: dar um nome unico ao provide pra não confundior com a função nativa, não use só /Provider/
    // nota: na arvore do context todos os componentes são renderizados dentro do /Provider/, recebendo as props passadas aqui
    <PlanetsContext.Provider
      value={ {
        planetsData,
        isloading,
        filterByName,
        setNameFilter,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsProvider;

// Referência: https://stackoverflow.com/questions/50206801/what-is-the-difference-between-proptypes-node-and-proptypes-any-in-react

// https://pt-br.reactjs.org/docs/hooks-effect.html
