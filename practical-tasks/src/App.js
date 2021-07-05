import React, { Component } from 'react';
import axios from 'axios';
import Button from './components/buttons/buttons';
import Code from './components/code/code';
class App extends Component {
  // state = { 
  //   users:[]
  //  }
   
   

  //  componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const users = res.data;
  //       this.setState({ users });
  //       console.log(this.state);
  //     })
  // }

  // deleteHandler=id=> {
  //   return users.filter(user.id!=id);
  // }

  render() { 
    return ( 
      <div>
        {/* <ul>
         {this.state.users.map(user=>
           <li>
             <h4>{user.name}</h4>
             <p>know more about this person at <a href="https://www.google.com"> {user.website}</a></p>
          <button  onClick={deleteHandler(user.id)}>delete</button>
             </li>
           )}
        </ul> */}
         <div className="mr-5"> 
         <p> hi there, i need to write some code here, <Code Font="14px"> let diameter = radius*2</Code>, click the button to run this</p>
         <Button styleName="mr-5" Textcolor="blue" onClick={()=> console.log("clicked")} > Click this</Button>
         </div>
      </div>
     );
  }
}
 
export default App;