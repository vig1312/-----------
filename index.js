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
