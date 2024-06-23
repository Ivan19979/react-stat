import React from "react";
import { Diagrams } from "../components/Diagrams";
import { Filters } from "../components/Filters";

class Main extends React.Component {
  state = {
    period: 2020,
    object: "Нижний Новгород",
    stat: [
      {"month": "Jan", "plan": "150", "fact": "100"}, 
      {"month": "Feb", "plan": "250", "fact": "200"}
    ]
  }

  changeFilter = (event) => {
    const jsonData = require("../test_API.json");
    switch (event.target.name) {
      case "object":
        this.setState({
          object: event.target.value,
          stat: jsonData.years[this.state.period].objects[this.state.object]
        })
        break;

      case "period":
        this.setState({
          period: event.target.value,
          stat: jsonData.years[this.state.period].objects[this.state.object]
        })
        break;
    
      default:
        break;
    }
  }

  componentDidMount() {
    const jsonData = require("../test_API.json");
    const statData = jsonData.years[this.state.period].objects[this.state.object]
    this.setState({
      stat: statData
    })
  }

  render() {
    return (
      <main className="content container">
        <Filters changeFilter={this.changeFilter}/>
        <div>Статистика за период {this.state.period} года для обьекта {this.state.object}</div>
        <div className="diagrams">
          <div className="column-left">Стоимость</div>
          <div className="column-bottom">Период {this.state.period}</div>
          <Diagrams stat={this.state.stat} period={this.state.period}/>
        </div>
      </main>
    )
  }
}

export { Main };