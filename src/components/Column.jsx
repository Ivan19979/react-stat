function Column({ month, plan, fact }) {
  return  <div className="column-schema">
            <span className="schema-period">{month}</span>
            <div className="schema-data">
              <div className="data-plan" style={{height: `${plan}px`}}><span>{plan}</span></div>
              <div className="data-fact" style={{height: `${fact}px`}}><span>{plan}</span></div>
            </div>
          </div>
}

export { Column }