// import { useState } from "react";
// import React from 'react'
// import "./app.css";

// export function App() {

//  const [state,setState]  = useState({
//     firstName:'',
//     lastName:'',
//     age:'',
//     gender:'',
//     location:'',
//     angular:false,
//     react:false,
//     node:false
//  });

//  const submitHandler=(e)=>{
//    e.preventDefault();
//    console.log(state);
//  }

//  const handleChange = (e)=>{
//     // setState({
//     //     ...state,
//     //     [e.target.name]:e.target.value
//     //  })

//     const {name,value}=e.target;
//     setState({
//         ...state,
//         [name]:value
//     })
//  }

//  const handleCheckboxChange = (e)=>{

//     const {name,checked}=e.target;
//     setState({
//         ...state,
//         [name]:checked
//     })
//  }

//  const {firstName,lastName,age,gender,location,angular,react,node} = state;

//  return (
//     <>
//      <h1>Registration Form</h1>
//      <form className="inputForm" onSubmit={submitHandler}>

//     <input type="text" className="text" name='firstName' placeholder="Enter First Name" value={firstName} onChange={handleChange} />
//     <br/>

//     <input type="text" className="text" name='lastName' placeholder="Enter Last Name" value={lastName} onChange={handleChange} />
//     <br/>

//     <input type="text" className="text" name='age' placeholder="Enter Age" value={age} onChange={handleChange} />
//     <br/>

//     <input type="radio" className="radiobutton" name='gender'  value='male' onChange={handleChange} /> Male

//     <input type="radio" className="radiobutton" name='gender'  value='female' onChange={handleChange} /> Female
//     <br/><br/>

//     <label htmlFor="location-header">Select Your Location</label>
//     <br />

//     <select className="location-input" name='location' value={location} onChange={handleChange}>

//      <option value="">---Select---</option>

//      <option value="UP">UP</option>

//      <option value="Delhi">Delhi</option>

//      <option value="Punjab">Punjab</option>

//     </select>

//     <br /> <br />
//     <div className='course' >
//     <label className="course-title">Course : </label>
//     <br/>

//     <input type="checkbox" name="angular" checked={angular} onChange={handleCheckboxChange} />
//     <span>Angular</span>
//     <br/>

//     <input type="checkbox" name="react" checked={react} onChange={handleCheckboxChange} />
//     <span>React</span>
//     <br/>

//     <input type="checkbox" name="node" checked={node} onChange={handleCheckboxChange} />
//     <span>Node</span>
//     <br/>
//     </div>

//     <button type="submit">Register</button>

//     </form>

//     </>
//   )

// }

// import { useState } from "react";
// import React from 'react'
// import "./app.css";

// export function App() {

//  const [state,setState]  = useState({
//     firstName:'',
//     lastName:'',
//     age:'',
//     gender:'',
//     location:'',
//     angular:false,
//     react:false,
//     node:false
//  });

//  const submitHandler=(e)=>{
//    e.preventDefault();
//    console.log(state);
//  }

//  const handleChange = (e)=>{

//     const {type,name,value,checked}=e.target;

//     // type=='checkbox'?setState({
//     //     ...state,
//     //     [name]:checked
//     // })
//     // : setState({
//     //     ...state,
//     //     [name]:value
//     // })

//     setState({...state,[name]:type=='checkbox'?checked:value});

//  }

//  const {firstName,lastName,age,gender,location,angular,react,node} = state;

//  return (
//     <>
//      <h1>Registration Form</h1>
//      <form className="inputForm" onSubmit={submitHandler}>

//     <input type="text" className="text" name='firstName' placeholder="Enter First Name" value={firstName} onChange={handleChange} />
//     <br/>

//     <input type="text" className="text" name='lastName' placeholder="Enter Last Name" value={lastName} onChange={handleChange} />
//     <br/>

//     <input type="text" className="text" name='age' placeholder="Enter Age" value={age} onChange={handleChange} />
//     <br/>

//     <input type="radio" className="radiobutton" name='gender'  value='male' onChange={handleChange} /> Male

//     <input type="radio" className="radiobutton" name='gender'  value='female' onChange={handleChange} /> Female
//     <br/><br/>

//     <label htmlFor="location-header">Select Your Location</label>
//     <br />

//     <select className="location-input" name='location' value={location} onChange={handleChange}>

//      <option value="">---Select---</option>

//      <option value="UP">UP</option>

//      <option value="Delhi">Delhi</option>

//      <option value="Punjab">Punjab</option>

//     </select>

//     <br /> <br />
//     <div className='course' >
//     <label className="course-title">Course : </label>
//     <br/>

//     <input type="checkbox" name="angular" checked={angular} onChange={handleChange} />
//     <span>Angular</span>
//     <br/>

//     <input type="checkbox" name="react" checked={react} onChange={handleChange} />
//     <span>React</span>
//     <br/>

//     <input type="checkbox" name="node" checked={node} onChange={handleChange} />
//     <span>Node</span>
//     <br/>
//     </div>

//     <button type="submit">Register</button>

//     </form>

//     </>
//   )

// }

//Class Based

// import { Component, useState } from "react";
// import React from 'react'
// import "./app.css";

// export class App extends Component {

// constructor()
// {
//     super();

//     this.state={
//         firstName:'',
//         lastName:'',
//         age:'',
//         gender:'',
//         location:'',
//         angular:false,
//         react:false,
//         node:false
//     }

// }

//  submitHandler=(e)=>{
//    e.preventDefault();
//    console.log(this.state);
//  }

//  handleChange = (e)=>{

//     const {type,name,value,checked}=e.target;
//     this.setState({...this.state,[name]:type=='checkbox'?checked:value});

//  }

//  render()
//  {
//    const {firstName,lastName,age,gender,location,angular,react,node} = this.state;
//     return (
//        <>
//         <h1>Registration Form</h1>

//         <form className="inputForm" onSubmit={this.submitHandler}>

//        <input type="text" className="text" name='firstName' placeholder="Enter First Name" value={firstName} onChange={this.handleChange} />
//        <br/>

//        <input type="text" className="text" name='lastName' placeholder="Enter Last Name" value={lastName} onChange={this.handleChange} />
//        <br/>

//        <input type="text" className="text" name='age' placeholder="Enter Age" value={age} onChange={this.handleChange} />
//        <br/>

//        <input type="radio" className="radiobutton" name='gender'  value='male' onChange={this.handleChange} /> Male

//        <input type="radio" className="radiobutton" name='gender'  value='female' onChange={this.handleChange} /> Female
//        <br/><br/>

//        <label htmlFor="location-header">Select Your Location</label>
//        <br />

//        <select className="location-input" name='location' value={location} onChange={this.handleChange}>

//         <option value="">---Select---</option>

//         <option value="UP">UP</option>

//         <option value="Delhi">Delhi</option>

//         <option value="Punjab">Punjab</option>

//        </select>

//        <br /> <br />
//        <div className='course' >
//        <label className="course-title">Course : </label>
//        <br/>

//        <input type="checkbox" name="angular" checked={angular} onChange={this.handleChange} />
//        <span>Angular</span>
//        <br/>

//        <input type="checkbox" name="react" checked={react} onChange={this.handleChange} />
//        <span>React</span>
//        <br/>

//        <input type="checkbox" name="node" checked={node} onChange={this.handleChange} />
//        <span>Node</span>
//        <br/>
//        </div>

//        <button type="submit">Register</button>

//        </form>

//        </>
//      )

//  }
// }

// import { useState } from "react";
// import React from 'react'
// import "./app.css";

// export function App() {

//  const [state,setState]  = useState({
//     firstName:'',
//     lastName:'',
//     age:'',
//     gender:'',
//     location:'',
//     angular:false,
//     react:false,
//     node:false
//  });

//  const submitHandler=(e)=>{
//    e.preventDefault();
//    console.log(state);
//  }

//  const handleChange = (e)=>{

//     const {type,name,value,checked}=e.target;

//     setState({...state,[name]:type=='checkbox'?checked:value});

//  }

//  const {firstName,lastName,age,gender,location,angular,react,node} = state;

//  return (
//     <>
//      <h1>Registration Form</h1>
//      <form className="inputForm" onSubmit={submitHandler}>

//     <input type="text" className="text" name='firstName' placeholder="Enter First Name" value={firstName} onChange={handleChange} />
//     <br/>

//     <input type="text" className="text" name='lastName' placeholder="Enter Last Name" value={lastName} onChange={handleChange} />
//     <br/>

//     <input type="text" className="text" name='age' placeholder="Enter Age" value={age} onChange={handleChange} />
//     <br/>

//     <input type="radio" className="radiobutton" name='gender'  value='male' onChange={handleChange} /> Male

//     <input type="radio" className="radiobutton" name='gender'  value='female' onChange={handleChange} /> Female
//     <br/><br/>

//     <label htmlFor="location-header">Select Your Location</label>
//     <br />

//     <select className="location-input" name='location' value={location} onChange={handleChange}>

//      <option value="">---Select---</option>

//      <option value="UP">UP</option>

//      <option value="Delhi">Delhi</option>

//      <option value="Punjab">Punjab</option>

//     </select>

//     <br /> <br />
//     <div className='course' >
//     <label className="course-title">Course : </label>
//     <br/>

//     <input type="checkbox" name="angular" checked={angular} onChange={handleChange} />
//     <span>Angular</span>
//     <br/>

//     <input type="checkbox" name="react" checked={react} onChange={handleChange} />
//     <span>React</span>
//     <br/>

//     <input type="checkbox" name="node" checked={node} onChange={handleChange} />
//     <span>Node</span>
//     <br/>
//     </div>

//     <button type="submit" className="submit">Register</button>

//     </form>

//     <br />

//     <hr />

//     <div className="entered-info">

//     <h2>Entered Info</h2>

//     <p>Your Name : {firstName} {lastName}</p>
//     <p>Your Age: {age}</p>
//     <p>Your Gender: {gender}</p>
//     <p>Your Location : {location}</p>
//     <p>Your Courses: </p>
//     <div className=".course">

//         <div>Angular: {angular?'Yes':'No'}</div>
//         <div>Angular: {react?'Yes':'No'}</div>
//         <div>Angular: {node?'Yes':'No'}</div>

//     </div>

//     </div>

//     </>
//   )

// }

// import { Component } from 'react'
// import './app.css'
// import Registration from './registration';
// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: '',
//       lastName: '',
//       age: '',
//       gender: '',
//       location: '',
//       angular: false,
//       react: false,
//       node: false
//     }
//   }
//   submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   }
//   handleChange = (e) => {
//     const { type, name, value, checked } = e.target;
//     this.setState({ ...this.state, [name]: type == 'checkbox' ? checked : value });
//   }

//   render() {
//     return (
//       <Registration  {...this.state} submitHandler={this.submitHandler} handleChange={this.handleChange} />
//     )
//   }
// }



import { Component } from "react";
import "./app.css";
import Registration from "./registration";
export class App extends Component {
  
  constructor() {
    super();
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        location: "",
        angular: false,
        react: false,
        node: false,
      },
    };
  }
  
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };


  handleChange = (e) => {
    const { type, name, value, checked } = e.target;

    this.setState({
      user: {
        ...this.state.user,
        [name]: type == "checkbox" ? checked : value,
      },
    });
  };

  render() {
    return (
      <Registration
        {...this.state.user}
        submitHandler={this.submitHandler}
        handleChange={this.handleChange}
      />
    );
  }
}



