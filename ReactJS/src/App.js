/*import React from 'react';import Counter from './components/MyComponents';function App() {  return (    <div>      <Counter />    </div>  );}export default App;


import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div id="zz">
      <Greeting name="Techno" />
      <Greeting name="Tree" />
      <Greeting name="Trainees" />
      <button className="btn" onClick={() => window.open("Counter.js")}>
        Click me
      </button>
    </div>
    
  );
}
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
  <center><form>
    <div id="btn">
        <div>
      <h1>Count: {count}</h1>
      <button class="b1" onClick={() => setCount(count + 1)}>Increment</button>
      <button class="b2" onClick={() => setCount(count - 1)}>Decrement</button>
    </div></div></form>
    </center>
  );
}

export default Counter;


export default App;*/
/*

import React from 'react';
import Greeting from './components/Greetings';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
function App() {
  return (<center>
    <div class="container">
      <div class="greeting">
        <h1>Greeting</h1>
        <Greeting /> </div><br></br><hr></hr>
      <div class="Counter">
        <h1> Counter</h1>
        <Counter /> </div><br></br><hr></hr>
      <div class="loginform">
        <h1>LoginForm</h1>
        <LoginForm /> </div>
    </div></center>);
}


import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Welcome to the home page!</h1>;
}

function About() {
  return <h1>About us</h1>;
}

function Contact() {
  return <h1>Contact us</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';

class App extends Component {
    
    constructor(){
        super();
        this.state={
            value1:"",
            value2:""
        }
        
        this.handleChange1=(event)=>{
            this.setState({
                value1:event.target.value
            })
        }
        
        this.handleChange2=(event)=>{
            this.setState({
                value2:event.target.value
            })              
        }
    }
     
  render() {
      
      let colour1="red",colour2="red",colour3="red",colour4="red",colour5="red";
      if(this.state.value1.length >= "8")
      {
          colour1="green";    
      }
      if(this.state.value1.match(/[A-Z]/))
      {
          colour2="green";    
      }
      if(this.state.value1.match(/[a-z]/))
      {
          colour3="green";    
      }
      if(this.state.value1.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/))
      {
          colour4="green";    
      }
      if(this.state.value1 === this.state.value2 && this.state.value1!=="" )
      {
          colour5="green";    
      }
      
      const style={
         
          padding:"20px",
          marginTop:"25px"
      }
           
    return (
        
    <div className="container"> 
    <div className="row">
    <div className="col-md-4"></div>
        
    
    <div className="col-md-4">
    <div style={style}><center>
    <form> 
          <p style={{fontWeight:"bold"}}>All checkmarks must turn green, password must have:</p>
          <p><i style={{color:colour1,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 8 characters</p>
          <p><i style={{color:colour2,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 1 uppercase letter</p>
          <p><i style={{color:colour3,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 1 lowercase letter</p>
          <p><i style={{color:colour4,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 1 number or special character</p>
          <p><i style={{color:colour5,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> Password === Confirm Password</p>
        
          <div class="form-group">
            <label for="password">Password</label>
            <input type="text" class="form-control" value={this.state.value1} onChange={this.handleChange1} placeholder="Password"/>
          </div><br></br>
          <div class="form-group">
            <label for="password">Confirm Password</label>
            <input type="text" class="form-control" value={this.state.value2} onChange={this.handleChange2} placeholder="Confirm Password"/>
          </div> 
         {this.state.value2 === "" ? "" :
         (this.state.value1 === this.state.value2  ? <p style={{color:"green",fontWeight:"bold"}}> Passwords match </p> :
         <p style={{color:"red",fontWeight:"bold"}}> Passwords not match </p>
          )}
    </form></center>
    </div>
    </div>
   
        
    <div className="col-md-4"></div>
    </div>
    </div>
    );
  }
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  return (<center>
    <div className="App">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type={isShown ? "text" : "password"}
          placeholder="Password"
          className="input"
        />

        <div className="checkbox-container">
          <label htmlFor="checkbox">Show password?</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
        </div>
        <button
          className="button"
          onClick={() => {
           
          }}
        >
          Sign In
        </button>
      </form>
    </div></center>
  );
}

export default App;*/

/*
import React, { useState } from "react";
import ReactDOM from "react-dom";


function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;*/



//FIRST PROGRAM
/*
import React from 'react';
import ItemList from './components/pr1';

const items = [
  { id: 1, name: 'Dilwale' },
  { id: 2, name: 'Raees' },
  { id: 3, name: 'Pathan' },
];

function App() {
  return (
    <div>
      <center>
      <h1 >List of Movies</h1>
      <ItemList items={items} />
      </center>
    </div>
  );
}

export default App;*/

//PROGRAM 2

// import React from 'react';
// import ItemList from './components/pr1';
// import ListForm from './components/pr2';

// const items = [
//  { id: 1, name: 'Dilwale' },
//   { id: 2, name: 'Raees' },
//   { id: 3, name: 'Pathan' },
// ];

// function App() {
//   return (
//     <div>
//       <h1 >List of Movies</h1>
//       <ItemList items={items} />
      

//     <div>
//       <ListForm />
//     </div>
//     </div>
//   );
// }



// export default App;

//program 3


// import React from 'react';
// import CountdownTimer from './components/pr3';

// function ParentComponent() {
//   return (
//     <div>
//       <CountdownTimer seconds={30} />
//     </div>
//   );
// }

// export default ParentComponent;


//program 4

// import React from 'react';
// import ExampleComponent from './components/pr4';

// const App = () => {
//   return (
//     <div className="App">
//       <ExampleComponent />
//     </div>
//   );
// };

// export default App;

//program 5

// import React from 'react';
// import Slideshow from './components/pr5';

// const App = () => {
//   const images = [
//     'https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png',
//     'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png',
//     'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png',
//     ];
//   const duration = 5000; // 5 seconds

//   return (
//     <div className="App">
//       <Slideshow images={images} duration={duration} />
//     </div>
//   );
// };

// export default App;


// //PROGRAM 6

// import React from 'react';
// import ContactForm from './components/pr6';

// function App() {
//   return (<center>
//     <div className="App">
//       <h1>Contact Us</h1>
//       <ContactForm />
//     </div></center>
//   );
// }

// export default App;

// PROGRAM 7

// import React from "react";
// import Modal from "./components/pr7";

// function App() {
//   return (
//     <div>
//       <h1>how are you today?</h1>
//       <Modal />
//     </div>
//   );
// }
// export default App;




//PROGRAM 8

// import React from 'react';
// import DataFetcher from './components/pr8';

// function App() {
//   return (
//     <div>
//       <DataFetcher />
//     </div>
//   );
// }

// export default App;

//PROGRAM 9

// import React from 'react';
// import Header from './components/pr9.js';

// function App() {
//   return (
//     <div>
//       <Header title="My App" subtitle="Welcome to my app!" />
//     </div>
//   );
// }

// export default App;

//PROGRAM 10
// import React from 'react';
// import Counter from './components/pr10';

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
//   }

// export default App;




//project 2 program 1


// import React from 'react';
// import TributePage from './components/pr1.1';

// function App() {
//   return (
//     <div>
//       <TributePage />
//     </div>
//   );
// }

// export default App;

//program 2

// import React from 'react';
// import StudentRegistrationForm from './components/pr1.2';

// function App() {
//   return (
//     <div><center>
//       <h1>Student Registration Form</h1></center>
//       <StudentRegistrationForm />
//     </div>
//   );
// }

// export default App;

//PROGRAM 3

// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <img src="C:\Users\tajamre\Downloads\virat.jpg" alt="Example Image"></img>
//         <h1>About Me</h1>
//         <p>To work in a professional 
// work driven environment 
// that motivates me to utilize 
// my potential efficaciously 
// with ample opportunities for 
// the up-gradation and growth 
// of the company and myself.</p>
//       </header>

//       <section>
//         <h2>Projects</h2>
//         <ul>
//           <li>
//             <h3>Project 1</h3>
//             <p>Technical information Portal website to manage the details of News, Jobs, Internships, 
// Courses and Placement preparation.
// Components used: operating system-windows XP and above, software- XAMPP/WAMP</p>
//           </li>
//           <li>
//             <h3>Project 2</h3>
//             <p>Myntra Hacker ramp - Gamify, built a website to represent idea in gamify section for Myntra 
// shopping app
// Components used: IDE- Visual Studio, Web browser- Google Chrome, Microsoft Edge, 
// Mozilla</p>
//           </li>
//         </ul>
//       </section>

//       <section>
//         <h2>Skills</h2>
//         <ul>
//           <li>ReactJS</li>
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JavaScript</li>
//           <li>MySQL</li>
//         </ul>
//       </section>

//       <section>
//         <h2>Resume</h2>
//         <a href="" target="_blank">Download My Resume</a>
//       </section>

//       <section>
//         <h2>Contact</h2>
//         <p>Feel free to contact me at tajamreen2001@gmail.com</p>
//       </section>
//     </div>
//   );
// }

// export default App;


//Program 4
// import React, { useEffect, useState } from "react";
// import Recipe from "./components/pr1.4";




// const App = () => {
//   const APP_ID = "6d6687a7";
//   const APP_KEY = "276a106691ab94fd9dec2d5082fe0965";

//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState();
//   const [query, setQuery] = useState("avocado");

//   useEffect(() => {
//     getRecipes();
//   }, [query]);

//   const getRecipes = async () => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     );
//     const data = await response.json();
//     setRecipes(data.hits);
//     console.log('data.hits',data.hits)
//   };

//   const updateSearch = e => {
//     setSearch(e.target.value);
//     console.log(search);
//   };

//   const getSearch = e => {
//     e.preventDefault();
//     setQuery(search);
//   };

//   return (
  
//     <div className="App">
//       <h1>Welcome to my App</h1>
//       <form onSubmit={getSearch} className="search-form">
//         <input
//           className="search-bar"
//           type="text"
//           value={search}
//           onChange={updateSearch}
//         />
//         <button className="search-button" type="submit">
//           search
//         </button>
//       </form>
//       {recipes.map(recipe => (
//         <Recipe
//           key={recipe.recipe.label}
//           title={recipe.recipe.label}
//           calories={recipe.recipe.calories}
//           image={recipe.recipe.image}
//           ingredients={recipe.recipe.ingredients}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;

//PROGRAM 5

// import React, { useState } from 'react';
// const api = {
//   key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// function App() {
//   const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState({});

//   const search = evt => {
//     if (evt.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
//         .then(res => res.json())
//         .then(result => {
//           setWeather(result);
//           setQuery('');
//           console.log(result);
//         });
//     }
//   }

//   const dateBuilder = (d) => {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`
//   }

//   return (
//     <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
//       <main>
//         <div className="search-box">
//           <input 
//             type="text"
//             className="search-bar"
//             placeholder="Enter your location...."
//             onChange={e => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}
//           />
//         </div>
//         {(typeof weather.main != "undefined") ? (
//         <div>
//           <div className="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{dateBuilder(new Date())}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">
//               {Math.round(weather.main.temp)}°c
//             </div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
//         </div>
//         ) : ('')}
//       </main>
//     </div>
//   );
// }

// export default App;


//PROGRAM 6

// import React from 'react';
// import CountdownTimer from './components/pr1.6';

// function App() {
//   return (
//     <div>
//       <CountdownTimer seconds={30} />
//     </div>
//   );
// }

// export default App;


//Program 7

// import React, { useState } from 'react';

// function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (inputValue.trim()) {
//       setTasks([...tasks, { id: Date.now(), text: inputValue }]);
//       setInputValue('');
//     }
//   };

//   const handleDelete = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   const handleEdit = (taskId, newText) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, text: newText } : task
//     );
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <h1>To-do List</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button type="submit">Add Task</button>
//       </form>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <span>{task.text}</span>
//             <button onClick={() => handleDelete(task.id)}>Delete</button>
//             <button onClick={() => handleEdit(task.id, prompt('Edit Task', task.text))}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;


// Program 8

// import React from 'react';
// import Calculator from './components/pr1.8';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>CALCULATOR</h1>
//       <Calculator />
//     </div>
//   );
// }
// export default App;

//PROGRAM 9

// import React from 'react';
// import Home from './components/pr1.9';

// function App() {
//   return (
//       <Home />
//   );
// }

// export default App;

//Program 11


// import React from 'react';
// import About from './components/pr1.11';


// function App() {
//   return (
//     <About />
//   );
// }

// export default App;