import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const states = {
  OH: {
    name: "Ohio",
    abbreviation: "OH",
    cities: {
      Cleveland: {
        name: "Cleveland",
        metroPopulation: "~2.1M"
      },
      Columbus: {
        name: "Columbus",
        metroPopulation: "~2.0M"
      }
    }
  },
  MA: {
    name: "Massachusetts",
    abbreviation: "MA",
    cities: {
      Boston: {
        name: "Boston",
        metroPopulation: "~4.6M"
      }
    }
  },
  TX: {
    name: "Texas",
    abbreviation: "TX",
    cities: {
      Austin: {
        name: "Austin",
        metroPopulation: "~2.1M"
      },
      "San Antonio": {
        name: "San Antonio",
        metroPopulation: "~2.5M"
      },
      Dallas: {
        name: "Dallas",
        metroPopulation: "~7.2M"
      }
    }
  },
  CA: {
    name: "California",
    abbreviation: "CA",
    cities: {
      "Los Angeles": {
        name: "Los Angeles",
        metroPopulation: "~13.1M"
      },
      "San Diego": {
        name: "San Diego",
        metroPopulation: "~3.3M"
      },
      "San Francisco": {
        name: "San Francisco",
        metroPopulation: "~4.7M"
      },
      Sacramento: {
        name: "Sacramento",
        metroPopulation: "~2.1M"
      }
    }
  }
};

ReactDOM.render(<App states={states} />, document.getElementById("root"));
