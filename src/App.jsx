import './App.css'

function App() {
  return (
    <>
      <h1>React</h1>
      <Device name='laptop' price = '18000'></Device>
      <Person></Person>
      <Student></Student>
      <Student></Student>
      <Student></Student>
    </>
  )
}


// use props or propertes 
function Device(props) {
  return <h2>This device: {props.name}  price: {props.price} </h2>
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
function Student() {
  return(
    <div className='student'>
      <h3>This is a student.</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}

export default App
