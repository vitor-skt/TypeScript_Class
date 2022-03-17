//@Component
//@Selector
//@useState("bla")

//Factory
// function logger1(prefix: string) {
//     return (target: any) => {
//         console.log(`${prefix} - ${target}`);
//     };
// }

// @logger1("awesome")

// class Foo { }

// //Class decorator
// function setAPIVersion(apiVersion: string) {
//     return (constructor: any) => {
//         return class extends constructor {
//             version = apiVersion;
//         }
//     }
// }

// //decorator - anotar a versão da API
// @setAPIVersion("2.0.0")
// class API { }

// console.log(new API());

//Property decorator

function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val;

        const setter = (value: string) => {
            if (value.length < length) {
                console.log(`erro ${key} deve conter mais que ${length} letras.`)
            } else {
                val = value;
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    }
}

class Movie {
    //validação - se for menor que 5 = error
    @minLength(5)
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

const movie = new Movie("Interstellar");
console.log(movie);
console.log(movie.title);


//Method decorator
//Parameter decorator
//Acessor decorator
