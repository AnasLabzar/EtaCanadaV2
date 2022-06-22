import React from 'react'

function ScriptBundle() {

    document.getElementById("body").onmousemove = function(event) {myFunction(event)};
    function myFunction(e) {
      var x = e.clientX;
      var y = e.clientY;

      if (x > 0 && y > 0) {
        localStorage.setItem('access', 'true')
      } else { 
        localStorage.setItem('access', 'false')
      }
    }
  return (
    <div id='demo'>

    </div>
  )
}

export default ScriptBundle