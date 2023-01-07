import React from 'react'

export default function Table({ states = {} }) {
    const stateValues = Object.values(states)
    const tbodies = stateValues.map((state, index) => {
      const cityValues = Object.values(state.cities)
      const cityRows = cityValues.map((city, i) => {
        const stateName = i === 0 ? <td rowSpan={cityValues.length + 1}>{state.name}</td> : null
        const stateAbbreviation = i === 0 ? <td rowSpan={cityValues.length + 1}>{state.abbreviation}</td> : null
        return (
          <tr key={i}>
            {stateName}
            {stateAbbreviation}
            <td>{city.name}</td>
            <td>{city.metroPopulation}</td>
          </tr>
        )
      })
      return (
        <tbody key={index} className={state.name}>
          {cityRows}
        </tbody>
      )
    })
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="4">Metro Areas by State</th>
            </tr>
            <tr>
              <th>State Name</th>
              <th>State Abbreviation</th>
              <th>City</th>
              <th>Population</th>
            </tr>
          </thead>
          {tbodies}
        </table>
      </div>
  )
}
