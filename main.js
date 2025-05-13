
console.log(cowsay)
function App() {
  const [sayObj, setSayObj] = React.useState({})
  return (
    <div className="app">

      <h1>Select Character</h1>
      <div>
        <button>BUNNY</button>
        <button>CAT</button>
        <button>KOALA</button>
      </div>
      <p>
        <input /> <button>update message</button> 
      </p>
      <p>
        <button>Bigger</button>
        <button>Smaller</button>
      </p>
      <hr />
      <Cowsay />
    </div>
  )
}

function Cowsay(props) {
  return(
    <div className="cowsay">
      <pre>{cowsay.say({text: 'Hello...'})}</pre>
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
