import './App.css';
import Card from './components/Card';
import {person} from './utils/person';
import Counter from "./Components/Counter.js.js";

function App() {
  return (
    // <>
    //   {Person.map((item) =>{
    //     return(
    //       <Card
    //         name={item.name}
    //         institution={item.institution}
    //         address={item.address}
    //         phone={item.phone}
    //       />
    //     );
    //   })}
    // </>
    <>
    <Counter title = "Counter Component"/>
    </>
  );
}

export default App;