import React from "react"
//reactni import qilib olyapdi
import "./App.css"
//App.css faylini import qilyapdi oziga olib kelyapti

const App = ({ states = {} }) => {
  // App degan funcsiya ochildi
  const stateValues = Object.values(states)
  //const degan ozgaruvchi ochild , va objectini ichidagi valuelar ob statega olib kelindi 
  const tbodies = stateValues.map((state, index) => {
   // state.Values ni ichidan map orqali yurib chiqildi 
    const cityValues = Object.values(state.cities)
    //chunmadim
    const cityRows = cityValues.map((city, i) => {
      //city,Values objectini ichida map bilan yurib chiqdi
      const stateName = i === 0 ? <td rowSpan={cityValues.length + 1}>{state.name}</td> : null
      //stateName objecti = i ga tenglanib i esa 0ga qat'iy tengmi deb ternary "?" operatori ishlatildi va <td table  citValues objectini length ga 1 qoshib qoyayapti va state objectini ichidagi name keyi chaqirlyapti
      const stateAbbreviation = i === 0 ? <td rowSpan={cityValues.length + 1}>{state.abbreviation}</td> : null
      // stateAbbrevation objecti iga tenglab 0ga === qat'iy tengmi  deb "?" ternary operatori ishlatilyapti va <td table  citValues objectini length ga 1 qoshib qoyayapti va state objectini ichidagi abbreviation keyi chaqirildi
      return (
        <tr key={i}>
          {/* tablening ichiga i keyi chaqirildi */}
          {stateName}
          {/* stateName objectini table ichiga qoshdi */}
          {stateAbbreviation}
           {/* objectini tablega qoshdi */}
          <td>{city.name}</td>
          {/* table ichiga city objecti ichidan name keyi chaqirildi */}
          <td>{city.metroPopulation}</td>
          {/* city objectidagi metroPopulation degan obj || key chaqirildi */}
        </tr>
      )
    })
    return (
      <tbody key={index} className={state.name}>
         {/* tabledagi index keyi chaqirilib classNmae orqali state objectining name degan key chaqirildi */}
        {cityRows}
        {/* tepadagi cityRows objecti chaqirilgan */}
      </tbody>
      // tbody tagi yopildi
    )
  })
  return (
    <div>
      {/* return ichidan div ochilib */}
      <table>
        {/* yana bittta table ochildi */}
        <thead>
          {/* va table ichidan <thead> ochildi */}
          <tr>
            <th colSpan="4">Metro Areas by State</th>
            {/* va text yozish uchun tablega colspan =4 berilib text yozildi */}
          </tr>
          <tr>
            <th>State Name</th>
            {/* table ichiga text yozildi */}
            <th>State Abbreviation</th>
           {/* va yana text */}
            <th>City</th>
            {/* text */}
            <th>Population</th>
            {/* text */}
          </tr>
        </thead>
        {tbodies}
      </table>
    </div>
  )
}

export default App

