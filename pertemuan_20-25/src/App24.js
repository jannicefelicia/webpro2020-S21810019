import React, {Component} from 'react'
import Card from "./Components/Card.js.js"
import "./App.css"
import axios from 'axios';

// class App extends Component {
//   state = {
//     user: [],
//   };

//   componentDidMount(){
//     // fetch("https://jsnoplaceholder.typicoe.com/user")
//     //   .then((response) => response.json())
//     //  .then ((json) => this.setState({users: json}));

//     axios
//       .get("https://jsnoplaceholder.typicoe.com/user")
//       .then ((response) => this.setState({users: response.data}));
//   }
  
//   render(){
//     return (
//       <>
//       {this.state.user.map((item) => {
//         return (
//           <Card
//           name={item.user.name}
//           username={item.username}
//           email={item.email}
//           phone={item.phone}
//           />
//         );
//       })}
//       </>
//     );
//   }
// }

const App = () =>{
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
    }, [])
    console.log(users)
    return(
        <>
            {
                users.map((item) =>{
                    return(
                        <Card
                            name={item.name}
                            username={item.username}
                            email={item.email}
                            phone={item.phone} 
                        />
                    )
                })
            }
        </>
    )
}