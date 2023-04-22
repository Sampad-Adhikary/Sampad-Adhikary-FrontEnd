import List from './List';

//sample data to check output
const items = [
  { text: 'Demo item 1 -> click to select' },
  { text: 'Demo item 2 -> click to select' },
  { text: 'Demo item 3 -> click to select' },
  { text: 'Demo item 4 -> click to select' },
  { text: 'Demo item 5 -> click to select' },
];

function App() {
  return (
    <div className="App">
    <h1 style={{textAlign:"center"}}>Frontend Engineer assignment </h1>
      <List items = {items}/>
    <h5 style={{textAlign:"center"}}>Submitted by <a href='https://sampadadhikary.cyclic.app/' target='blank'>Sampad Adhikary</a>, <a href='https://github.com/Sampad-Adhikary/Sampad-Adhikary-FrontEnd'>github</a></h5>
    </div>
  );
}

export default App;
