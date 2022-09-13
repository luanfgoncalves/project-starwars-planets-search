import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { setFilter } = useContext(PlanetsContext);
  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetsContext);
  const { handleChangeFilter, setHandleChangeFilter } = useContext(PlanetsContext);
  const { planetsList, setPlanetsList } = useContext(PlanetsContext);
  const { sortColumn } = useContext(PlanetsContext);
  const { sorting, setSorting } = useContext(PlanetsContext);
  const { selectOptions, setSelectOptions } = useContext(PlanetsContext);

  // filtro por população no inicio do header
  const setNumericFilter = ({ target }) => {
    const filter = { ...handleChangeFilter, [target.name]: target.value };
    setHandleChangeFilter(filter);
    console.log('filtro por população foi definido');
  };

  // botão de filtrar
  const filterHandleClick = (event) => {
    console.log('O botão /Filtrar/ foi clicado');
    event.preventDefault();
    const handleChangeFilterSpread = { ...handleChangeFilter };
    const newHandleChangeFilter = [...filterByNumericValues, handleChangeFilterSpread];
    setFilterByNumericValues(newHandleChangeFilter);
    const optionsSpread = [...selectOptions];
    const newOptions = selectOptions.indexOf(handleChangeFilter.column);
    optionsSpread.splice(newOptions, 1);
    const filter = { ...handleChangeFilter, column: optionsSpread[0] };
    setSelectOptions(optionsSpread);
    setHandleChangeFilter(filter);
  };

  // botão de ordenar
  const sortPlanets = (event) => {
    event.preventDefault();
    const planetsSpread = [...planetsList];
    const original = sorting;
    if (!original.sorting) {
      planetsSpread.sort((next, prev) => next[sorting.select] - prev[sorting.select]);
      return setPlanetsList(planetsSpread.sort(
        (next, prev) => prev[sorting.select] - next[sorting.select],
      ));
    }
    planetsSpread.sort((next, prev) => prev[sorting.select] - next[sorting.select]);
    return setPlanetsList(planetsSpread.sort(
      (next, prev) => next[sorting.select] - prev[sorting.select],
    ));
  };
  // botões de radio
  const handleRadioButtons = ({ target: { value } }) => {
    const prevsorting = { ...sorting };
    if (value === 'ascendent') {
      const nextSorting = { ...prevsorting, sorting: true };
      setSorting(nextSorting);
    } else {
      const nextSorting = { ...prevsorting, sorting: false };
      setSorting(nextSorting);
    }
  };
  // botão de ordenar 2
  const handleSorting = ({ target: { value } }) => {
    const prevsorting = { ...sorting };
    const nextSorting = { ...prevsorting, select: value };
    setSorting(nextSorting);
  };

  // Botão de remover filtros no fim do thead
  const clearFilters = (event) => {
    console.log('O botão de remover todos os filtro foi clicado');
    event.preventDefault();
    const defaultOptions = ['population', 'orbital_period', 'diameter', 'rotation_period',
      'surface_water'];
    const filter = { column: 'population', comparison: 'maior que', value: 0 };
    setFilterByNumericValues([]);
    setSelectOptions(defaultOptions);
    setHandleChangeFilter(filter);
    console.log('Todos os filtros foram removidos');
  };

  // botões de remoção de filtros
  const removeFilter = (event) => {
    console.log('Um botão de remover filtro foi clicado');
    event.preventDefault();
    const options = [...selectOptions];
    const filterByNUmberSpread = [...filterByNumericValues];
    const newArr = filterByNUmberSpread.filter((e) => e.column !== event.target.name);
    console.log(`${newArr}`);
    setFilterByNumericValues(newArr);
    options.push(event.target.name);
    const filter = { ...handleChangeFilter, column: event.target.name };
    setSelectOptions(options);
    setHandleChangeFilter(filter);
    console.log('O Filtro foi removido');
  };

  return (
    <form>
      {/* titulo */}
      {/* filtro de nomes no topo da pagina */}
      <label htmlFor="nameFilter">
        <input
          name="nameFilter"
          id="nameFilter"
          placeholder="search"
          type="text"
          data-testid="name-filter"
          onChange={ (event) => setFilter({ name: event.target.value }) }
        />
      </label>

      {/* filtro por população no inicio do header */}
      <label htmlFor="columnFilter">
        <select
          name="column"
          id="columnFilter"
          data-testid="column-filter"
          onChange={ setNumericFilter }
          value={ handleChangeFilter.column }
        >
          {selectOptions.map((
            (option) => (<option key={ option } value={ option }>{option}</option>)))}
        </select>
      </label>

      {/* filtro de valores */}
      <label htmlFor="valueFilter">
        <input
          // name="valueFilter"
          type="text"
          placeholder="Add a value"
          data-testid="value-filter"
          name="value"
          value={ handleChangeFilter.value }
          onChange={ setNumericFilter }
        />
      </label>

      {/* botão de filtrar */}
      <button
        name="buttonFilter"
        type="button"
        data-testid="button-filter"
        onClick={ filterHandleClick }
        disabled={ !handleChangeFilter.column }
      >
        Filtrar
      </button>

      {/* select maior/menor que */}
      <label htmlFor="comparisonFilter">
        <select
          name="comparison"
          id="comparisonFilter"
          data-testid="comparison-filter"
          onChange={ setNumericFilter }
          value={ handleChangeFilter.comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="columnSort">
        sortingnar
        <select
          name="columnSort"
          id="columnSort"
          data-testid="column-sort"
          onChange={ handleSorting }
        >
          {sortColumn.map((element) => (<option key={ element }>{element}</option>))}
        </select>
      </label>
      {/* botões de radio */}
      <label htmlFor="columnSortInputAsc">
        <input
          name="sorting"
          id="columnSortInputAsc"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ascendent"
          onChange={ handleRadioButtons }
        />
        Ascendente
      </label>
      <label htmlFor="columnSortInputDesc">
        <input
          name="sorting"
          id="columnSortInputDesc"
          type="radio"
          data-testid="column-sort-input-desc"
          value="descendent"
          onChange={ handleRadioButtons }
        />
        Descedente
      </label>

      {/* botão de ordenar */}
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ sortPlanets }
      >
        Ordenar
      </button>

      {/* Botão de remover filtros no fim do thead */}
      <button
        name="removeFilters"
        type="button"
        data-testid="button-remove-filters"
        onClick={ clearFilters }
        // disabled={ isRemoveDIsabled }
      >
        Remover Filtros
      </button>

      {/* botões de remoção de filtros */}
      <ul>
        {filterByNumericValues.map((item) => (
          <li key={ item.column } data-testid="filter">
            <button
              type="button"
              onClick={ removeFilter }
              name={ item.column }
            >
              {`${item.column} ${item.comparison}: ${item.value}`}
            </button>
          </li>
        ))}
      </ul>

    </form>
  );
}

export default Filters;

// Referência: https://stackoverflow.com/questions/50206801/what-is-the-difference-between-proptypes-node-and-proptypes-any-in-react
// https://pt-br.reactjs.org/docs/hooks-effect.html
