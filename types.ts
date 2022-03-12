//boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('text', "text", `text`)
let message: string
message = `text ${isOpen}`

//number (int , float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: number[]
items = [1, 2, 3]

let items2: string[]
items2 = ['text', 'text', 'text']

//or 

let values: Array<number>
values = [1, 2, 3]

//tuple 
let title: [number, string, boolean]
title = [1, 'text', true]

// enum
enum colors {
    white = '#fff',
    black = '#000',
}

// any (anything) not recomended!
let thing: any
thing = true
thing = "text"
thing = [1]

// void (function without return)
function logger() {
    console.log('text')
}

// null / undefined
let variable: null //don't do it!

type variable = string | undefined //Better option

//never
function error(): never {
    throw new Error("error");
}

// object
let cart: object
cart = {
    key: 'text'
}

//Type inference
let message2 = "message defined"
message2 = "new string"
