// Exercises: Level 2

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// 1. Find the person who has many skills in the users object.
let currentAmountSkills = 0
let amountOfSkillsUserSelected = 0
let userSelected = ''
for (user in users) {
    currentAmountSkills = Object.values(users[user])[1].length

    if (currentAmountSkills > amountOfSkillsUserSelected) {
        amountOfSkillsUserSelected = currentAmountSkills
        userSelected = user
    }
    // console.log(`key-> ${user} | value -> ${Object.values(users[user])}`)
}

// console.log(`
//     User Selected = ${userSelected}
//     Amount of Skills = ${amountOfSkillsUserSelected}
// `)

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedUsers = 0
let usersOver50Points = 0
let isLogged
let userPoint

for (user in users) {
    isLogged = Object.values(users[user])[3]
    isLogged === true ? loggedUsers++ : ''

    userPoint = Object.values(users[user])[4]

    isLogged === true ? loggedUsers++ : ''
    userPoint >= 50 ? usersOver50Points++ : ''
}

// console.log(`
//     Users logged = ${loggedUsers}
//     Users having greater than equal to 50 points = ${usersOver50Points}
// `)


// 3. Find people who are MERN stack developer from the users object
let userMernDev = []
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let array = []
let boolean = false
// mernStack.sort()
// console.log(mernStack)

for (user in users) {
    array = Object.values(users[user])[1]
    for (element of mernStack) {
        if (array.indexOf(element) === -1) {
            boolean = false
            break
        }
        boolean = true
    }
    boolean ? userMernDev.push(user) : ''
}

// console.log(`
//     Usuarios con MERN Stack:
//     ${userMernDev}
// `)


// 4. Set your name in the users object without modifying the original users object
const newObject = Object.assign(users)
newObject.Nico = []
console.log(Object.entries(newObject))


// 5. Get all keys or properties of users object
const allKeys = Object.keys(users)
console.log(`All keys of users object:
    ${allKeys}
`)

// 6. Get all the values of users object
const allValues = Object.values(users)
console.log(`All values of users object:
    ${allValues}
`)

// 7. Use the countries object to print a country name, capital, populations and languages.
// ?? did not find the material