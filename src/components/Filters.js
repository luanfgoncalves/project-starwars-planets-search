import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

const Filters = () => {
  const { setNameFilter } = useContext(PlanetsContext);
  return (
    <form>

      <label htmlFor="nameFilter">
        <input
          name="nameFilter"
          id="nameFilter"
          placeholder="Search"
          type="text"
          data-testid="name-filter"
          onChange={ (event) => setNameFilter({ name: event.target.value }) }
        />
      </label>

      {/* filtro de valores */}
      {/* <label htmlFor="nameFilter">
        ´Search by name: ´
        <input
          name="nameFilter"
          id="nameFilter"
          type="text"
          data-testid="name-filter"
          onChange={ (event) => setFilter({ name: event.target.value }) }
        />
      </label> */}

      {/* numero ? */}
      {/* <label htmlFor="nameFilter">
        <input
          name="nameFilter"
          id="nameFilter"
          placeholder="Search"
          type="text"
          data-testid="name-filter"
          onChange={ (event) => setFilter({ name: event.target.value }) }
        />
      </label> */}

      {/* botão de filtar no meio do menu */}
      {/* <button
        name="buttonFilter"
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
        disabled={ isDisabled }
      >
        FILTRAR
      </button> */}

      {/* filtro por população */}
      {/* <label htmlFor="columnFilter">
        <select
          name="columnFilter"
          id="columnFilter"
          data-testid="column-filter"
          onChange={ handleColumnFilter }
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation period</option>
          <option value="surface_water">Surface water</option>
        </select>
      </label> */}

      {/* BotÕES de radio req9 */}

      {/* Botão de ordenar */}
      {/* <button
        name="buttonRemoveFilters"
        type="button"
        data-testid="button-remove-filters"
        onClick={ handleRemoveClick }
        disabled={ isRemoveDIsabled }
      >
        ORDENAR
      </button> */}

      {/* Botão de remover filtros no fim do thead */}
      {/* <button
        name="buttonRemoveFilters"
        type="button"
        data-testid="button-remove-filters"
        onClick={ handleRemoveClick }
        disabled={ isRemoveDIsabled }
      >
        REMOVER FILTROS
      </button> */}

    </form>
  );
};

export default Filters;
