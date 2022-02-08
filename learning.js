// ----------Добавление методов объекта и создани объектов на основе объекта----------------
function simple() {
    const FrstUs =
    {
        name: 'Alex'

    }
    const ScndUs = Object.assign({}, FrstUs)
    ScndUs.age = 23
    const ThrddUs = { ...ScndUs, counrty: "Russia" }
    const FrthUs = JSON.parse(JSON.stringify(ThrddUs))
    FrthUs.car = 2
    function calling(a) {
        console.table(a)


    }
    calling(FrstUs)
    console.log("***")
    calling(ScndUs)
    console.log("***")
    calling(ThrddUs)
    console.log("***")

    calling(FrthUs)

    console.log("***")
}


// --------Добавление даты------------------------
function adddate() {
    const newPost = (post, addedAt = Date()) => ({ ...post, addedAt })
    const firstPost = { id: 1, author: "Bogdan" }
    console.log(newPost(firstPost))
}
// ------ Массивы ---------
function Arrayes() {
    const MyArray = [1, 2, 3]
    console.log(MyArray)
    console.log(MyArray.length)
    MyArray[3] = (MyArray.length)
    console.log(MyArray.length)
    console.log(MyArray)
    MyArray.push(MyArray.length)
    console.log(MyArray)
    MyArray.forEach(el => console.log(el * 2))
    const NextArray = MyArray.map(el => el * 3)
    console.table(NextArray)









}
//-----Деструктуризация-----
function distrution() {
    const UserInfo =
    {
        name: "Alex",
        surname: "Hoddie",
        city: "Moscow",
        year: 1999,
        status: true
    }
    console.table(UserInfo)
    const { name, city } = UserInfo
    const { status } = UserInfo
    console.log(name)
    console.log(city)
    console.log(status)

    console.table(UserInfo)

}
//---------Деструктуризация в функциях----
function distrfunc() {
    const UsersInfo =
    {
        nameofus: "Alex",
        age: 26,
        levelofus: 'Leader'
    }
    const UsersInf = ({ nameofus, levelofus, age }) => {

        if (!levelofus) { return `${age}` }

        console.log(`${nameofus} is ${levelofus}`);

    }

    console.log(UsersInf(UsersInfo))

}


//----- If в функциях----

function PosSum() {
    const sumPosNum = (a, b) => {
        console.log(typeof a)
        console.log(typeof b)
        if (typeof a !== 'number' || typeof b !== 'number') {
            return "some of num not number!"
        }

        if (a <= 0 || b <= 0) {
            return 'Not possitive number'
        }

        return a + b
    }
    console.log(sumPosNum(-3, 5))
}
// ----- Switch-----
function Switch() {
    let object = 3
    switch (typeof object) {

        case ('number'):
            message('number')
            break
        case ('string'):
            message('string')
            break
        case ('Boolean'):
            message('boolean')
            break
        default: console.log("some error")
            function message(word) {
                console.log(`${object} is ${word}`)


            }

    }


}
//---Тернарный оператор----
function Ternar() {

    const valueOne = 23
    const valueTwo = 33
    valueOne && valueTwo
        ? console.log("TRUE")


        : console.log("FALSE")


    let value = 'Alex'

    value
        ? console.log(value.length)
        : console.log('Error')

    const res = value.leng >= 5 ? console.log('Long name') : console.log('Short name')




}
// ---- Циклы ----
function circles() {
    for (let i = 0; i < 5; i++) {
        let alex = 0 + i
        console.log(alex)

    }

    const MyArray = ['Wot', 'GTA', 'CoD']
    MyArray.forEach((Element, index) => {
        console.log(Element, index);
    })
    for (const key in MyArray) { console.log(key, MyArray[key]) }
    const UsInformation = {
        name: "alex",
        age: 23
    }

    Object.keys(UsInformation).forEach(key => { console.log(key, UsInformation[key]) })
    Object.values(UsInformation).forEach(value => (console.log(value)))
    for (const oneletter of MyArray) { console.log(oneletter) }

}


//----модули----

function Models() {




}


// --- Классы ---
// прототипы для объектов, те создание экзепляров
function classes() {

    class Car {
        constructor(model) {

            this.value = 0,
                this.name = text

        }



    }
    class Comment {

        constructor(text) {
            this.text = text
            this.votesQty = 0
        }

        upvote(number) {
            this.votesQty = this.votesQty + number

        }
        downvote() {
            this.votesQty -= 1

        }
        static QuadroVots(votesQty) {
            votesQty = votesQty * votesQty
        }
    }


    //  const UserComment = new Comment ('User`s comment')

    //  console.log(UserComment)
    //  UserComment.upvote(23)

    //  console.log(UserComment)
    //  UserComment.downvote()
    //  console.log(Comment.QuadroVots(UserComment.votesQty))
    //  console.log(UserComment instanceof Car)

    class UpdatedArray extends Array {

        sum() {
            return this.reduce((el, acc) => acc += el, 0)
        }
    }
    const ArRay = new UpdatedArray(2, 3, 5)
    console.log(ArRay.sum())

}
// --- Промиссы ---
function Promises() {


    const MyPromise = new Promise((resolve, reject) => { });
    MyPromise

        .then(value => { })
        .then(value => { })
        .catch(error => { })
    //  fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json=> console.log(json))
    //   .catch(error=>console.error(error))  

//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => {
//             console.log(response)
//             return response.json()
//         })
            
//         .then(json => console.log(json))
//         .catch(error => console.error(error))
// Метод Fetch  внутри промиса

            function FetchPromise()
                {
                    const getData = (url) =>
                    new Promise((resolve, reject)=>
                    fetch(url)
                        .then(Response => Response.json()) // получение пакета
                        .then(json => resolve(json))//передача данных Data
                        .catch(error => reject(error)))

                    getData('https://jsonplaceholder.typicode.com/todos')
                        .then (data => console.log(data))
                        .catch (error => console.log(error.message))

                }
 }
 // ---- Асинхронные функции ---
 function Asyncs()
 {
        async function asyncFn()
        {


        }
        const AsFn = async () => 
        {   
                throw new Error("ERROR!")

    
        }
        AsFn()
            .then (value = console.log(value))
            .catch(error = console.log(error.message))


        const AppforTimer = () => new Promise ((resolve, reject)=> setTimeout(()=>resolve(), 5000))
        const asFnct = async () =>
        {
                console.log('Timer Started!')
                const StartTime = performance.now()
                await AppforTimer()
                const EndTime = performance.now()
                console.log('Timer ended after 5 sec!', EndTime-StartTime)
        
        }

        asFnct()



 }
 function AsyncAwait ()
 {

        const GetData = async () =>
        {
            const res = await fetch(url)
            const json = await res.json()
            return json


        }

        const url =' http://vk.com/user_123?dsfs'
        try {const data = await GetData (url)
            console.log (data)} catch (error)
            {
                console.log(error.message)
            }


 }

