import Todo from './todo'
import Actor from './Actor'
import './App.css'

function App() {
  const singers = [ 'sakib', 'rakib', 'sojib', 'mujib'];

  const songs =[
    {name: 'sakil', time: 51},
    {name: 'sakil', time: 51},
    {name: 'sakil', time: 51},
    {name: 'sakil', time: 51},
    {name: 'sakil', time: 51},
  ]
  return (
    <>
      <h1>React</h1>
      <Actor name= "Mehedi"></Actor>
      {
        singers.map(singer => <Actor name = {singer}></Actor>)
      }
      {
        songs.map(song => <Actor name = {song.name} time = {song.time}></Actor>)
      }
      {/* <Todo task='Project' isDone={true}></Todo>
      <Device name='laptop' price = '18000'></Device>
      <Device name='phone' price = '9000'></Device>
      <Person></Person>
      <Student grade="3" roll = '1'></Student>
      <Student roll = '5'></Student>
      <Student></Student> */}
    </>
  )
}


// use props or propertes 
function Device({name, price}) {
  return <h2>This device: {name}  price: {price} </h2>
}
//  style use in same jsx file type of object
function Person() {
  const personStyle = {
    color: 'blue',
    fontSize: '34px',
    fontWeight: '700'
  }
  const age = 32;
  const money = 120;
  const person = {name: 'sakib', age: 35}
  return <h3 style={personStyle} >I am {person.name}. with age: {age} my money: {money}</h3>
}


// use style another  file 
// and import this file
// use className this css / style
function Student({grade=1, roll=0 }) {
  return(
    <div className='student'>
      <h3>This is a student.</h3>
      <p>Class: {grade}</p>
      <p>Roll: {roll}</p>
    </div>
  )
}

export default App
