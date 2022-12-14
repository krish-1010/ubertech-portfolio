// import React from 'react';
// import Main from './components/Main';
// import Box from './components/Box';
// import Contact from './Contact';
// import './App.css';
// import Navbar from './components/Navbar';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// function App() {
//   const [darkMode, setDarkMode] = React.useState(true)
//   function toggleDarkMode(){
//     setDarkMode(prevMode => !prevMode)
//   }
//   return (
//     <Router >
//       <div className="App">
//           {/* <Box darkMode={darkMode} /> */}
//           <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Navbar>
//         <div className='content'>
//           <Routes>
//             <Route path='/portfolio' element={<Main darkMode={darkMode}/>} />
//             <Route path="/contact" element={<Contact darkMode={darkMode}/>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { NavLink } from "react-router-dom";

// export default function Navbar(props) {
//   return (
//     <div id="Nav" className={props.darkMode ? "dark" : ""}>
//       <div className="left">
//         {/* <input type="image" className="btn toggle" src={sun}></input> */}
//         {/* <span className="darkmode">
          
//         </span> */}
//         <button className="mode" onClick={props.toggleDarkMode}>
//           {props.darkMode ? (
//             <svg
//               stroke="currentColor"
//               fill="none"
//               stroke-width="2"
//               viewBox="0 0 24 24"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               className="moon"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//             </svg>
//           ) : (
//             <svg
//               className="sun nsvg"
//               fill="#000000"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               width="1.25rem"
//               height="1.25rem"
//             >
//               <path d="M 11.875 0.1875 C 11.371094 0.25 10.996094 0.679688 11 1.1875 L 11 3.1875 C 10.996094 3.546875 11.183594 3.882813 11.496094 4.066406 C 11.808594 4.246094 12.191406 4.246094 12.503906 4.066406 C 12.816406 3.882813 13.003906 3.546875 13 3.1875 L 13 1.1875 C 13.003906 0.898438 12.878906 0.625 12.664063 0.433594 C 12.449219 0.242188 12.160156 0.152344 11.875 0.1875 Z M 4 3.375 C 3.625 3.441406 3.324219 3.714844 3.21875 4.078125 C 3.113281 4.445313 3.222656 4.835938 3.5 5.09375 L 4.90625 6.5 C 5.148438 6.796875 5.535156 6.933594 5.910156 6.847656 C 6.28125 6.761719 6.574219 6.46875 6.660156 6.097656 C 6.746094 5.722656 6.609375 5.335938 6.3125 5.09375 L 4.90625 3.6875 C 4.71875 3.488281 4.460938 3.378906 4.1875 3.375 C 4.15625 3.375 4.125 3.375 4.09375 3.375 C 4.0625 3.375 4.03125 3.375 4 3.375 Z M 19.6875 3.375 C 19.460938 3.40625 19.25 3.519531 19.09375 3.6875 L 17.6875 5.09375 C 17.390625 5.335938 17.253906 5.722656 17.339844 6.097656 C 17.425781 6.46875 17.71875 6.761719 18.089844 6.847656 C 18.464844 6.933594 18.851563 6.796875 19.09375 6.5 L 20.5 5.09375 C 20.796875 4.808594 20.886719 4.367188 20.726563 3.988281 C 20.570313 3.609375 20.191406 3.367188 19.78125 3.375 C 19.75 3.375 19.71875 3.375 19.6875 3.375 Z M 12 5.1875 C 8.15625 5.1875 5 8.34375 5 12.1875 C 5 16.03125 8.15625 19.1875 12 19.1875 C 15.84375 19.1875 19 16.03125 19 12.1875 C 19 8.34375 15.84375 5.1875 12 5.1875 Z M 12 7.1875 C 14.753906 7.1875 17 9.433594 17 12.1875 C 17 14.941406 14.753906 17.1875 12 17.1875 C 9.246094 17.1875 7 14.941406 7 12.1875 C 7 9.433594 9.246094 7.1875 12 7.1875 Z M 0.8125 11.1875 C 0.261719 11.238281 -0.144531 11.730469 -0.09375 12.28125 C -0.0429688 12.832031 0.449219 13.238281 1 13.1875 L 3 13.1875 C 3.359375 13.191406 3.695313 13.003906 3.878906 12.691406 C 4.058594 12.378906 4.058594 11.996094 3.878906 11.683594 C 3.695313 11.371094 3.359375 11.183594 3 11.1875 L 1 11.1875 C 0.96875 11.1875 0.9375 11.1875 0.90625 11.1875 C 0.875 11.1875 0.84375 11.1875 0.8125 11.1875 Z M 20.8125 11.1875 C 20.261719 11.238281 19.855469 11.730469 19.90625 12.28125 C 19.957031 12.832031 20.449219 13.238281 21 13.1875 L 23 13.1875 C 23.359375 13.191406 23.695313 13.003906 23.878906 12.691406 C 24.058594 12.378906 24.058594 11.996094 23.878906 11.683594 C 23.695313 11.371094 23.359375 11.183594 23 11.1875 L 21 11.1875 C 20.96875 11.1875 20.9375 11.1875 20.90625 11.1875 C 20.875 11.1875 20.84375 11.1875 20.8125 11.1875 Z M 5.46875 17.59375 C 5.25 17.632813 5.054688 17.742188 4.90625 17.90625 L 3.5 19.28125 C 3.101563 19.667969 3.097656 20.304688 3.484375 20.703125 C 3.871094 21.101563 4.507813 21.105469 4.90625 20.71875 L 6.3125 19.3125 C 6.636719 19.011719 6.722656 18.535156 6.527344 18.140625 C 6.335938 17.742188 5.902344 17.523438 5.46875 17.59375 Z M 18.1875 17.59375 C 17.8125 17.660156 17.511719 17.933594 17.40625 18.296875 C 17.300781 18.664063 17.410156 19.054688 17.6875 19.3125 L 19.09375 20.71875 C 19.492188 21.105469 20.128906 21.101563 20.515625 20.703125 C 20.902344 20.304688 20.898438 19.667969 20.5 19.28125 L 19.09375 17.90625 C 18.886719 17.683594 18.585938 17.570313 18.28125 17.59375 C 18.25 17.59375 18.21875 17.59375 18.1875 17.59375 Z M 11.875 20.1875 C 11.371094 20.25 10.996094 20.679688 11 21.1875 L 11 23.1875 C 10.996094 23.546875 11.183594 23.882813 11.496094 24.066406 C 11.808594 24.246094 12.191406 24.246094 12.503906 24.066406 C 12.816406 23.882813 13.003906 23.546875 13 23.1875 L 13 21.1875 C 13.003906 20.898438 12.878906 20.625 12.664063 20.433594 C 12.449219 20.242188 12.160156 20.152344 11.875 20.1875 Z" />
//             </svg>
//           )}
//         </button>

//         <NavLink to="/portfolio" className="Link">
//           <button className="btn home">Home </button>
//         </NavLink>

//         <NavLink to="/contact" className="Link">
//           <button className="btn contactbtn">
//             <span>Contact</span>
//           </button>
//         </NavLink>
//       </div>
//       <div className="right">
//         <a href="https://google.com" target="_blank" rel="noopener">
//           <svg
//             className="pointer github nsvg"
//             id="github"
//             fill="#000000"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 30 30"
//             width="30px"
//           >
//             <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
//           </svg>
//         </a>

//         <a href="https://google.com" target="_blank" rel="noopener">
//           <svg
//             className="pointer twitter nsvg"
//             fill="#000000"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 30 30"
//             width="29px"
//           >
//             <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
//           </svg>
//         </a>

//         <a href="https://google.com" target="_blank" rel="noopener">
//           <svg
//             className="pointer steam nsvg"
//             width="25px"
//             height="30"
//             viewBox="0 0 32 32"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M15.974 0c-8.401 0-15.292 6.479-15.943 14.714l8.573 3.547c0.729-0.495 1.604-0.786 2.552-0.786 0.083 0 0.167 0.005 0.25 0.005l3.813-5.521v-0.078c0-3.328 2.703-6.031 6.031-6.031s6.036 2.708 6.036 6.036c0 3.328-2.708 6.031-6.036 6.031h-0.135l-5.438 3.88c0 0.073 0.005 0.141 0.005 0.214 0 2.5-2.021 4.526-4.521 4.526-2.177 0-4.021-1.563-4.443-3.635l-6.135-2.542c1.901 6.719 8.063 11.641 15.391 11.641 8.833 0 15.995-7.161 15.995-16s-7.161-16-15.995-16zM10.052 24.281l-1.964-0.813c0.349 0.724 0.953 1.328 1.755 1.667 1.729 0.719 3.724-0.104 4.443-1.833 0.349-0.844 0.349-1.76 0.005-2.599-0.344-0.844-1-1.495-1.839-1.844-0.828-0.349-1.719-0.333-2.5-0.042l2.026 0.839c1.276 0.536 1.88 2 1.349 3.276s-2 1.88-3.276 1.349zM25.271 11.875c0-2.214-1.802-4.021-4.016-4.021-2.224 0-4.021 1.807-4.021 4.021 0 2.219 1.797 4.021 4.021 4.021 2.214 0 4.016-1.802 4.016-4.021zM18.245 11.87c0-1.672 1.349-3.021 3.016-3.021s3.026 1.349 3.026 3.021c0 1.667-1.359 3.021-3.026 3.021s-3.016-1.354-3.016-3.021z" />
//           </svg>
//         </a>

//         <a href="https://google.com" target="_blank" rel="noopener">
//           <svg
//             className="pointer NavLinkedin nsvg"
//             fill="#000000"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 50 50"
//             width="30px"
//           >
//             <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
//           </svg>
//         </a>

//         <a href="https://google.com" target="_blank" rel="noopener">
//           <svg
//             className="pointer mail nsvg"
//             id="mail"
//             xmlns="http://www.w3.org/2000/svg"
//             width="23px"
//             height="30"
//             x="0px"
//             y="0px"
//             viewBox="0 0 474 474"
//           >
//             <g>
//               <path
//                 d="M437.5,59.3h-401C16.4,59.3,0,75.7,0,95.8v282.4c0,20.1,16.4,36.5,36.5,36.5h401c20.1,0,36.5-16.4,36.5-36.5V95.8
// 		C474,75.7,457.6,59.3,437.5,59.3z M432.2,86.3L239.5,251.1L46.8,86.3H432.2z M447,378.2c0,5.2-4.3,9.5-9.5,9.5h-401
// 		c-5.2,0-9.5-4.3-9.5-9.5V104.9l203.7,174.2c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.5,0.4,0.8,0.5
// 		c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.2,0.8,0.4,1.2,0.6c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0.3,1,0.4c0.1,0,0.3,0.1,0.4,0.1
// 		c0.3,0.1,0.6,0.2,0.9,0.2c0.1,0,0.3,0.1,0.4,0.1c0.3,0.1,0.7,0.1,1,0.2c0.1,0,0.2,0,0.3,0c0.4,0,0.9,0.1,1.3,0.1l0,0l0,0
// 		c0.4,0,0.9,0,1.3-0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.7-0.1,1-0.2c0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.2c0.1,0,0.3-0.1,0.4-0.1
// 		c0.3-0.1,0.6-0.2,1-0.4c0.1,0,0.2-0.1,0.3-0.1c0.4-0.2,0.8-0.4,1.2-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.3-0.2,0.5-0.3,0.8-0.5
// 		c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.3-0.2,0.4-0.3L447,109.2V378.2z"
//               />
//             </g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//             <g></g>
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// }
// // import { Link } from "react-router-dom";
// import NavBox from './NavBox'

// export default function Navbar(props) {

//   return (
//     <div id="Navbar" className={props.darkMode ? "dark":""}>
//       <NavBox darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
//     </div>
//   );
// }
// import Tools from "./Tools";
// import Footer from "./Footer";

// export default function Container(props) {
//   return (
//     <div id="wrapper" className={props.darkMode ? "dark" : ""}>
//       <div className="Container">
//       <h1 className="h11">Hey, I'm Krishna &#128075;</h1>
//       <p className="p1">
//         <span>
//           gm??????! I am Krishna, a 15-year-old blockchain-cum-web developer from
//           India. <br></br> My main professionalism is in web development, but I
//           also have experience working with latest tech-stacks. <br></br> Apart
//           from web dev, I have learned blockchain development and worked with
//           big companies like <a className="bluetext" href="https://www.google.com">Layer3</a> and <a className="bluetext" href="https://www.google.com">Thirdweb</a> by building smart contracts for
//           their projects using solidity. I am a part-time freelancer :)
//         </span>
//       </p>

//       <h2 className="h22">What I Do ????</h2>

//       <p className="p2">
//         I'm passionate about everything technology; from designing and
//         developing software, to understanding how the many moving parts of the
//         internet work together, to cybersecurity, systems, programming, and so
//         much more. I strive to learn more about these things every day, and
//         utilize my knowledge to further understand how or why the technology
//         around us works.
//       </p>

//       <h2 className="h23">Technologies ????</h2>

//       <p className="p3">
//         I use a variety of tools to streamline my development process and
//         increase the quality of both my code, and my projects. Below is a list
//         of technologies and languages I've had experience with in the past, or
//         use currently.
//       </p>

//       <Tools></Tools>

//       <h2 className="h24">Projects ???????</h2>

//       <p className="p4">
//         In my free time, I enjoy creating open source projects on <a className="bluetext" href="https://www.google.com">GitHub</a>, so I
//         can learn from others and showcase what I know. In total, all of my open
//         sourced projects have earnt me 118 stars on GitHub, and 10 forks.
//       </p>

//       <p className="p5">
//         if you looking to hire me for any freelancing or consulting work, please
//         reach out to me at <a className="bluetext" href="https://www.google.com">Email</a>.
//       </p>
//       <hr></hr>
//       <Footer></Footer>
//     </div>
//     </div>
//   );
// }