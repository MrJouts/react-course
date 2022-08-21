export const CountryListItem = ({name, flag, onClick}) =>  <div className="list-item" onClick={() => onClick(name)}>{flag} {name}</div>
