"use strict";
// S => State
// T => Type
// V => Value
// K => Key
// E => Element
// function useState<S extends numOrStr = string>() // poderia ser assim tambem
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
newState.setState("foo"); // String
console.log(newState.getState());
// newState.setState(123); // da erro pois o padrão definido foi string
// console.log(newState.getState())
newState.setState("bla");
console.log(newState.getState());
