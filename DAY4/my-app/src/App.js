import React from 'react'
function Events() {
    function clickHere() {
        alert("Hello! Good morning")
    }
    return (
        <div>
            <button onClick={clickHere}>Click Here</button>
        </div>
    )
}
export default Events
