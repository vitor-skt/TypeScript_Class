//@Component
//@Selector
//@useState("bla")

//Factory
function logger1(prefix: string) {
    return (target: any) => {
        console.log(`${prefix} - ${target}`);
    };
}

@logger1("awesome")

class Foo { }

//Class decorator
//Property decorator
//Method decorator
//Parameter decorator
//Acessor decorator
