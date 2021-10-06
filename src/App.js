// import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  const [list, setList] = React.useState([
    { id: 1, code: '#ffff', name: 'white' },
    { id: 2, code: '#eee', name: 'grey' },
    { id: 3, code: '#DC2626', name: 'red' },
    { id: 4, code: '#F59E0B', name: 'yellow' },
    { id: 5, code: '#2563EB', name: 'blue' },
  ])
  const [search, setSearch] = React.useState('')
  const [currentColor, setCurrentcolor] = React.useState('#ffff')
  const setColor = (color) => {
    setCurrentcolor(color)
    var copyText = color

    /* Copy the code */
    navigator.clipboard.writeText(copyText);
  }
  const displayColor = () => {
    let filteredItem = []
    list.forEach((item) => {
      if (item.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())) {
        filteredItem.push(item)

      }
    })
    return filteredItem.map((color) => {
      return <div key={color.id} className="color-item" onClick={() => setColor(color.code)} style={{ backgroundColor: `${color.code}` }} ></div>
    })
  }
  return (
    <div className="main">
      <div className="header" style={{ backgroundColor: currentColor }} >

      </div>
      <input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="color-block">
        {displayColor()}

      </div>
    </div>
  );
}

export default App;
