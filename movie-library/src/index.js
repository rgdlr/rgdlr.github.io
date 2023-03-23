import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// [RENDER | WAY 1] DIRECTLY ADD COMPONENT
// ReactDOM.render(
//   <div>
//     <h1>Title</h1>
//     <div>Hello World!</div>
//   </div>,
//   document.getElementById("root")
// );

// [ELEMENT]
// const content = (
//   <div>
//     <h1>Title</h1>
//     <div>Hello World!</div>
//   </div>
// );
//
// [RENDER | WAY 2] ADD PREVIOUSLY DEFINED COMPONENT USING A CONSTANT
// ReactDOM.render(content, document.getElementById("root"));

// [PARAMETERS USAGE | WAY 1] DIRECT ACCESS
// function Component(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <div>{props.content}</div>
//     </div>
//   );
// }
//
// [PARAMETERS USAGE | WAY 2] ASSIGN TO VARIABLES
// function Component(props) {
// const title = props.title;
// const content = props.content;
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>{content}</div>
//     </div>
//   );
// }
//
// [PARAMETERS USAGE | WAY 3] DESTRUCTURING TO VARIABLES
// function Component(props) {
//   const { title, content } = props;
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>{content}</div>
//     </div>
//   );
// }
//
// [PARAMETERS USAGE | WAY 4] DESTRUCTURING IN PARAMETERS
// function Component({ title, content }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>{content}</div>
//     </div>
//   );
// }
//
// [RENDER | WAY 2] ADD PREVIOUSLY DEFINED COMPONENT USING A FUNCTION
// ReactDOM.render(
//   <Component title="Title" content="Hello World!" />,
//   document.getElementById("root")
// );

// BEST PARAMETERS USAGE : WAY 5
//
// [PARAMETERS USAGE | WAY 5] DESTRUCTURING IN PARAMETERS + USING {CHILDREN}
// function Component({ title, children }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>{children}</div>
//     </div>
//   );
// }
//
// ReactDOM.render(
//   <Component title="Title">Hello World!</Component>,
//   document.getElementById("root")
// );
