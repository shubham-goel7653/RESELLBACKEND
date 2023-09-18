setImmediate(() => {
    console.log("in setImmediate")
})

setTimeout(()=>{
    console.log("hello")
},1000)


setTimeout(()=>{
    console.log("hey")
},1000)

setInterval(() => {
    console.log('set interval')
},1000)

console.log("abcd")

process.nextTick(() => {
    console.log('in process')
})
console.log("xyz")
const wait = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve()},time)
    })
}
wait(3000).then(() => {console.log('heelo ')})

console.log("start")


const promise  = new Promise((resolve,reject)=>{
    console.log(1)
    resolve(2)
})

promise.then((data)=>{
    console.log(data)
})

console.log("end")