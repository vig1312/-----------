function sayHi() {
    alert("Hello")
}

for(let i = 0;i < 10;i++) {
    console.log(i)
}

let data = [
    {
        name: "vigen",
        lastName:"Vardanyan"
    }
]

function newPromise(data) {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            data.forEach((member,index) => {
                if(member.name.toLowerCase().includes("Vigen")) {
                    resolve(`Hello ${member.name} in ${index} index`)
                } else {
                    reject(`not found ${index} index`)
                }
            })
        })
    })
}

let promise = newPromise(data)

promise.ther(function(result) {
    console.log(result)
}).catch(function(result) {
    console.log(result)
})