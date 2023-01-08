// Exercises: Level 3

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]


// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'fulano',
    lastName: 'perez',
    incomes: [[1000, 'salary'], [350, 'Freelancer'],],
    expenses: [[75, 'food'], [250, 'house rent'],],

    totalIncomes: function () {
        let amount = 0
        for (income of this.incomes) {
            amount = income[0] + amount
        }
        return amount
    },
    totalExpenses: function () { // if I want to use 'this' keyword cannot use arrow function
        let amount = 0
        for (expense of this.expenses) {
            amount = expense[0] + amount
        }
        return amount
    },
    accountInfo: function () {
        return `
            First Name -> ${this.firstName}
            Last Name -> ${this.lastName}

            incomes -> [${this.incomes}]
            Total Incomes -> $${this.totalIncomes()}

            expenses -> [${this.expenses}]
            Total Expenses -> $${this.totalExpenses()}

            Account Balance -> $${this.accountBalance()}
        `
    },
    addIncome: function (amount, description) {
        this.incomes.push([amount, description])
    },
    addExpense: function (amount, description) {
        this.expenses.push([amount, description])
    },
    accountBalance: function () {
        let balance = this.totalIncomes() - this.totalExpenses()
        return balance
    }
}

// console.log(`Total Income ${personAccount.totalIncomes()}`)
// console.log(`Total Expense ${personAccount.totalExpenses()}`)

// console.log(`\n\nAdding an income of 50 from a friend gift`)
// personAccount.addIncome(50, 'gift')
// console.log(`\n\nAdding an expense of 50 from restaurant dinner`)
// personAccount.addExpense(50, 'Restaurant')

// console.log(`Current Total Income ${personAccount.totalIncomes()}`)
// console.log(`Current Total Expense ${personAccount.totalExpenses()}`)
// console.log(`Current Account Balance ${personAccount.accountBalance()}`)

// console.log(personAccount.accountInfo())


// 2. **** Questions:2, 3 and 4 are based on the two arrays:users and products created at the beggining of the file.
// Imagine you are getting the above users collection from a MongoDB database. 

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = function (emailProvided) {
    let condition = false
    let emailObtained = ''

    for (user of users) {
        emailObtained = Object.values(user)[2]
        if (emailProvided === emailObtained) {
            condition = true;
            break
        }
    }
    return condition ? 'You already has an account' : 'Signing Up'
}

// console.log(signUp('asab@asab.com')) // you already has an account
// console.log(signUp('mymail@gmail.com')) // Signing Up

// b. Create a function called signIn which allows user to sign in to the application
const signIn = function (username, password) {
    let condition = false
    let usernameObtainedMongo = ''
    let passwordObtainedMongo = ''

    for (user of users) {
        usernameObtainedMongo = Object.values(user)[1]
        passwordObtainedMongo = Object.values(user)[3]
        if ((usernameObtainedMongo === username) && (passwordObtainedMongo === password)) {
            condition = true;
            break
        }
    }
    return condition ? 'Signing In' : 'username/password might be incorrect'
}

// console.log(signIn('Thomas', '123333')) // Signing In
// console.log(signIn('Thomas', 'AnotherPassword')) // username/password might be incorrect


// 3. The products array has three elements and each of them has six properties.

//  a. Create a function called rateProduct which rates the product 
const rateProduct = function (productId, userId, userRate) {
    let ratings, _idProduct, found = false
    for (product of products) {
        product = Object.values(product)
        _idProduct = Object.values(product)[0]
        ratings = Object.values(product)[4]
        console.log('ratings before adding: ')
        console.log(ratings)

        if (_idProduct === productId) {
            ratings.push({ userId: userId, rate: userRate })
            console.log('ratings after adding: ')
            console.log(product)
            found = true
            break
        }
        else {
            found = false
        }
    }
    !found ? console.log('Product not found.') : ''
}

// rateProduct('eedfcf', 'ab12ex', 8)

// b. Create a function called averageRating which calculate the average rating of a product
const averageRating = function () {
    let rating, ratingValue

    for (product of products) {
        rating = Object.values(product)[4]

        Object.keys(rating).length > 0 ? ratingValue += Object.values(rating[0])[1] : ""
        console.log(rating)
        // break
    }
    console.log(`Average Rating -> `)
}

averageRating()


// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = function () {

}