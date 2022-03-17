// S => State
// T => Type
// V => Value
// K => Key
// E => Element

//-------------------"____Definição de tipo____""_valor default"
// function useState<"S extends number | string""= string">() 

type numOrStr = number | string
// function useState<S extends numOrStr = string>() // poderia ser assim tambem

function useState<S extends number | string = string>() {
    let state: S;

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState };
}

const newState = useState();

newState.setState("foo"); // String
console.log(newState.getState())

// newState.setState(123); // da erro pois o padrão definido foi string
// console.log(newState.getState())

newState.setState("bla");
console.log(newState.getState())
