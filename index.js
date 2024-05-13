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
        lastName:"Chibuxchyan"
    },
    {
        name: "Gevor",
        lastName:"Vardanyan"
    },
]

// function newPromise(data,searchingMember) {
//     return new Promise(function(resolve,reject) {
//         setInterval(function() {
//             data.forEach((member,index) => {
//                 if(member.name.toLowerCase().includes(searchingMember.toLowerCase())) {
//                     resolve(`Congtratulations,found ${member.name} in ${index} index`)
//                 } else {
//                     reject(`not found ${index} index`)
//                 }
//             })
//         },1000)
//     })
// }

// let promise = newPromise(data,"Vigen")

// promise.then(function(result) {
//     document.querySelector(".result").innerHTML = result
// }).catch(function(result) {
//     document.querySelector(".result").innerHTML = result
// })

function foundingMembers(data,searchingName) {
    let foundMembersCount = 0
    data.forEach((member,index) => {
        if(member.name.toLowerCase().includes(searchingName.toLowerCase())) {
            document.querySelector(".result").innerHTML +=  `Hello found your member: ${searchingName} at ${index} index` 
            foundMembersCount++;
        } else {
            document.querySelector(".result").innerHTML += "Not Found "
        }
    })
    console.log(`total ${foundMembersCount} members with ${searchingName} name`  )
    let foundMembersData = data.filter((member) => {
        return member.name === searchingName
    })
    console.log(JSON.stringify(foundMembersData,undefined,2))
}

foundingMembers(data,"Vigen")

let prog = document.getElementById("progress")
let progResult = document.querySelector("#progResult")

let progress = setInterval(function() {
    prog.value += 1
    progResult.innerHTML = prog.value

    if(prog.value === "100") {
    clearInterval(progress)
}
},200)

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "Application/json",
    }

}).then(resolve => resolve.json())
  .then(data => console.log(data))

  function asyncorunusPromise() {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            resolve(8)
        },1000)
    })
  }

  asyncorunusPromise().then(function(result) {
    console.log(result)
  })

  function numberToCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
    ".")
  }

console.log(numberToCommas(220000000))
 


