function Filters(props) {

  return (
    <div className="filters">
      <label>Фильтровать по объекту</label>
      <select name="object" onChange={props.changeFilter}>
        <option value="Нижний Новгород">Нижний Новгород</option>
        <option value="Москва">Москва</option>
      </select>

      <label>Фильтровать по году</label>
      <select name="period" onChange={props.changeFilter}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  )
}

export { Filters }