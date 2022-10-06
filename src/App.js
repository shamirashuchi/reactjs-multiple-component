import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [{name:'Dr. Mahfuz', job: 'Singer'},
                 {name: 'Eva Rahman',job:'Singer2'},
                 {name: 'Agun',job:'sopno'},
                 {name: 'shuvro',job:'pathor'}]

const singerStyle={
  color: 'purple',
  backgroundColor:'white'
}



function App() {
  const nayoks = ['Rubel','Bapparaj','Kuber','Jashim','salmanshah','Riyaj','Razzak','Anwar'];
  return (
    <div className="App">
      {
        //nayoks.map(nayok => nayok)
        nayoks.map(nayok => <li>Name:{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]}nayika="Kopila"></Person> */}
      <h5>New component. yay</h5>
      <p id="totocompany">rock mama react mama</p>
      <Friend movie="shingham"phone='o1777'></Friend>
      <Friend phone="01999"></Friend>
    </div>
  );
}

function Person(props){
  //console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p> {props.nayika}</p>
    </div>
  )
}

function Friend(props){
  //console.log(props);
  return (
    <div className="container">
      <h1>Name:{props.movie}</h1>
      <p>phone:{props.phone}</p>
    </div>
  )
}

export default App;
