import './App.css'

function App() {
  return (
    <>
      <h1>React</h1>
      <Person></Person>
      <Student></Student>
      <Student></Student>
      <Student></Student>
    </>
  )
}

function Person() {
  const age = 32;
  const money = 120;
  const person = {name: 'sakib', age: 35}
  return <h3>I am {person.name}. with age: {age} my money: {money}</h3>
}


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
