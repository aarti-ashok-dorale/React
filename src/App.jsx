import './App.css';
import Counter from "./Counter";
import LikeButton from "./LikeButton";
import LudoBoard from './LudoBoard';
import TodoList from './TodoList';
import Lottery from "./Lottery";
import {sum} from ".helper/";


function App() {
  // functions as props : this means they can be passed to a function as argument, returned from it and assigned to a variable
    let winCondition = (ticket) => {
      return sum(ticket) === 15; // sum of all three nos. is 15
      // return ticket.every((num)) => num === ticket[0]; //all 3 nos. should be equal to each other
      // return ticket[0] === 0; //first no. is eqal to 0
    }

 return ( 
  <>
   <Lottery n={3} winningSum={15} winCondition={winCondition} />
   
  </>
 );
}

export default App;


