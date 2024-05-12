import React from 'react';
import ReactDOM from 'react-dom';

// // for write js in html we use of {}
// const timer = () => {
//   const elem = (
//     <div>
//       <h2>This is timer</h2>
//       {new Date().toLocaleTimeString()}
//     </div>
//   )
//   ReactDOM.render(elem, document.getElementById('root'))// show time for 1 second in div root
// }

// // each 1 second refresh time for show current time 
// setInterval(() => {
//   timer()
// }, 1000);


// create component for timer



class Describe extends React.Component {
  render() {
    return (
      <h2>This is timer</h2>
    )
  }
}


class Timer extends React.Component {

  render() {
    return (
      <div>
        <Describe />
        {new Date().toLocaleTimeString()}

      </div>
    )
  }
}


ReactDOM.render(<Timer />, document.getElementById('root'))