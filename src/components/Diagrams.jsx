import { Column } from "./Column";

function Diagrams({ stat }) {

  return <div className="painting-columns">
  {
    stat.map(statMonth => {
        return <Column key={statMonth.month} {...statMonth}/>
      })
    } 
  </div>
} 

export { Diagrams };