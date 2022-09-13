import React, { useEffect, useState } from 'react';
// import { Children } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchApi from '../services/fetchApi';

function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [planetsList, setPlanetsList] = useState([]);
  const [filterByName, setFilter] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [sorting, setSorting] = useState({ select: 'population', sorting: false });
  const [sortColumn] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
  const [handleChangeFilter, setHandleChangeFilter] = useState({ column: 'population',
    comparison: 'maior que',
    value: 0 });
  const [selectOptions, setSelectOptions] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const getPlanets = async () => {
    setLoading(true);
    console.log('APi foi chamada');
    const response = await fetchApi();
    const planets = response.results;
    setLoading(false);
    setPlanetsData(planets);
    setPlanetsList(planets);
    console.log(`PlanetData:${planetsData} PlanetList${planetsList}`);
  };

  // const setComparisonFilter = () => {
  // console.log('filtro de comparação foi chamado');
  // const newData = [...planetsData];
  // }

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    // const newData = [...planetsData];
    let newData = [...planetsData];
    const filteredData = [...filterByNumericValues];
    filteredData.forEach((item) => {
      if (item.comparison === 'maior que') {
        newData = newData.filter((e) => Number(e[item.column]) > Number(item.value));
        console.log('Filtro /Maior que/ foi selecionado');
      } if (item.comparison === 'menor que') {
        newData = newData.filter((e) => Number(e[item.column]) < Number(item.value));
        console.log('Filtro /Menor que/ foi selecionado');
      } if (item.comparison === 'igual a') {
        newData = newData.filter((e) => Number(e[item.column]) === Number(item.value));
        console.log('Filtro /Igual a/ foi selecionado');
      }
    });
    setPlanetsList(newData);
  }, [planetsData, filterByNumericValues]);

  const valueContext = {
    planetsData,
    isloading,
    filterByName,
    setFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    setPlanetsData,
    planetsList,
    setPlanetsList,
    sorting,
    setSorting,
    sortColumn,
    handleChangeFilter,
    setHandleChangeFilter,
    selectOptions,
    setSelectOptions,
  };

  return (
    <PlanetsContext.Provider value={ valueContext }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsProvider;
