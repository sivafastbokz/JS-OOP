class Person {
    constructor(name,age){
       this.name = name
       this.age = age
       this.job = ''
    }
    getName = () =>{
        return this.name
    }
    getAge = () =>{
        return this.age
    }
    SetJob = (job)=>{
        this.job = job
    }
}

const person1 = new Person('pedro',20)
const person2 = new Person('john',21)
console.log(person1.getName())
console.log(person2.getName())

class House {
    constructor(address,residents){
          this.address = address
          this.residents = residents
    }
    getAddress = () =>{
        return this.address
    }
    getResidents = () =>{
        return this.residents
    }
    addResident = (resident) =>{
        this.residents.push(resident)
    }
}

const house = new House('rs puram coimbatore,tamil nadu-641026',[person1,person2])
const pereson3 = new Person('tony',23)
person1.SetJob('developer')
person2.SetJob('accountant')
pereson3.SetJob('youtuber')
house.addResident(pereson3)
console.log(house.getResidents())

class developer extends Person{
    constructor(name,age,company, salary){
        super(name,age)
         this.company = company
         this.salary = salary
    }
    sayHi = ()=>{
        console.log(`hello i am a developer and my name is ${this.name} and  works for this company ${this.company} `)
    }
}
 
const employee = new developer('pedro',19,'fastbokz',25000)
employee.sayHi()
