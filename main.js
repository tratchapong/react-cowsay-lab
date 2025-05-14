
// console.log(cowsay)

// const allCows = ['DAEMON', 'CAT2', 'DRAGON','IBM', 'HIPPIE']÷
let cs = Object.keys(JSON.parse(JSON.stringify(cowsay)))
console.log(cs)
const allCows = [0,0,0,0,0].map( el=> cs[Math.floor((Math.random() * 189))] )
console.log(allCows)

function App() {
  const [inputText, setInputText] = React.useState('')
  const [sayObj, setSayObj] = React.useState({
    text : inputText || 'Hello..',
    cow : cowsay['ATAT']
  })
  const [scale, setScale] = React.useState(0.7)
  
  const changeCow = (cow) => {
    setSayObj({...sayObj, cow: cowsay[cow] })
  }
  const updateScale = x => {
    setScale(scale+x)
  }
  const hdlChange = (evt) => {
    // console.log(evt.target.outerHTML)
    // console.log(evt.target.value)
    setInputText(evt.target.value)
  }

  return (
    <div className="app flex flex-col gap-2 p-2">

      <h1 className="text-2xl text-red-300 p-4 bg-lime-200 text-center">Select Character</h1>
      <div className="flex justify-center gap-3">
        {/* <button onClick={()=>changeCow('BUNNY')}>BUNNY</button>
        <button onClick={()=>changeCow('CAT')}>CAT</button>
        <button onClick={()=>changeCow('KOALA')}>KOALA</button> */}
        { allCows.map( el => (
          <button className="btn btn-outline btn-primary"  key={el} onClick={ ()=>changeCow(el) } >{el}</button>
        ))}
      </div>
      <p>
        <button className="btn block w-fit mx-auto">scramble</button>
      </p>
      <p>
        <input className="input" value={inputText} onChange={ hdlChange }/>
        <button className="btn" onClick={()=>setSayObj({...sayObj, text: inputText})}>update message</button> 
      </p>
      <p>
        <button className="btn btn-info" onClick={()=>updateScale(-0.1)}>Smaller</button>
        <button className="btn btn-accent" onClick={()=>updateScale(0.1)}>Bigger</button>
      </p>
      <hr />
      <Cowsay sayObj={sayObj} scale={scale} />
    </div>
  )
}

function Cowsay(props) {
  const {sayObj, scale, text} = props
  // console.log(cowsay.say(sayObj))
  // console.log(typeof cowsay.say(sayObj))
  return(
    <div className="cowsay"
      style={{ transform:`scale(${scale})`,
      transformOrigin: 'top left',
      transition: '0.5s'
      }}
    >
      <pre className="text-blue-500">{cowsay.say(sayObj)}</pre>
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
