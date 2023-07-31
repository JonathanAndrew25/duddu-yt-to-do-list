import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items, handleCheck, handleDelete}) => {


  // const numbers = [-2,-1,0,1,2]
  // const itemss = numbers.filter(n => n>=0).map(n => ({number:n}))
  // console.log(itemss);

    // const [name, setName] = useState("Earn");
    // function handleNameChange() {
    //     const names = ["Earn", "Grow", "Give"];
    //     const int = Math.floor(Math.random()*3);
    //     setName (names[int])
    //   }

      // function namee() {
      //   return console.log("visit Andrew");
      // }

      // const [count, setCount] = useState(99);
      // const [name, setName] = useState();

      // function incrementFunction() {
      //   setCount(prevCount => prevCount + 1)
      // }

      // function decrementFunction() {
      //   setCount(prevCount => prevCount - 1)
      // }

  return (
    <main>
      {(items.length) ? (
          <ItemsList 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
          />
    ) : (
      <p style={ {marginTop:'2rem'} }> Your list is empty</p>
    )
  } 


    {/* <p>Lets {name} Money</p>
    <button onClick={handleNameChange}> Subscribe </button> */}

    {/* <button onClick={decrementFunction}>-</button>
    <span>{count}</span>
    <button onClick={incrementFunction} >+</button> */}
    </main>
  )
}

export default Content