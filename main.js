
// console.log(JSON.parse(JSON.stringify(cowsay)))
const allCows = Object.keys(JSON.parse(JSON.stringify(cowsay)))

function App() {
  const [sayObj, setSayObj] = React.useState({
    text : 'Hello...',
    cow : cowsay['COW']
  })
  const [inpText, setInputText] = React.useState('')
  const [charList, setCharList] = React.useState([0,0,0,0,0].map(el => Math.floor((Math.random() * 189))))
  const [scale, setScale] = React.useState(1)

  const scramble = () => {
    setCharList( [0,0,0,0,0].map(el => Math.floor((Math.random() * 189))))
  }
  return (
    <div className="app">
      <h1>Select Character</h1>
      <div>
        {/* <button onClick={_=> setSayObj({...sayObj, cow: cowsay['BUNNY']})}>BUNNY</button>
        <button onClick={_=> setSayObj({...sayObj, cow: cowsay['CAT']})}>CAT</button>
        <button onClick={_=> setSayObj({...sayObj, cow: cowsay['KOALA']})}>KOALA</button> */}

        { charList.map(el => (
          <button key={el} onClick={ _=> setSayObj({...sayObj, cow: cowsay[allCows[el]]})}>{allCows[el]}</button>
        ))
        }
      </div>
      <p>
        <button onClick={scramble}>Scramble</button>
      </p>
      <p>
        <input 
          value = {inpText}
          onChange = {e=>setInputText(e.target.value)}
        /> <button onClick={ _=> setSayObj({...sayObj, text: inpText})}>update message</button> 
      </p>
      <p>
        <button onClick={_=>setScale(scale-0.1)}>Smaller</button>
        <button onClick={_=>setScale(scale+0.1)}>Bigger</button>
      </p>
      <hr />
      <Cowsay sayObj={sayObj} scale={scale}/>
    </div>
  )
}

function Cowsay(props) {
  const {sayObj, scale} = props
  return(
    <div className="cowsay" style={{transform : `scale(${scale})`, transformOrigin: 'top left'}}>
      <pre>{cowsay.say(sayObj)}</pre>
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
