function sayHi() {
    alert("Hello")
}

for(let i = 0;i < 10;i++) {
    console.log(i)
}

let data = [
    {
        name: "Vigen",
        lastName:"Vardanyan"
    },
    {
        name: "Ruben",
        lastName:"Vardanyan"
    },
    {
        name: "Vigen",
        lastName:"Vardanyan"
    },
    {
        name: "Gevor",
        lastName:"Vardanyan"
    },
]

function newPromise(data,searchingMember) {
    return new Promise(function(resolve,reject) {
        setInterval(function() {
            data.forEach((member,index) => {
                if(member.name.toLowerCase().includes(searchingMember.toLowerCase())) {
                    resolve(`Hello ${member.name} in ${index} index`)
                } else {
                    reject(`not found ${index} index`)
                }
            })
        },1000)
    })
}

let promise = newPromise(data,"Vigen")

promise.then(function(result) {
    console.log(result)
}).then(function() {
    console.log(result)
}).catch(function(result) {
    console.log(result)
})
