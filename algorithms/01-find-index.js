const persons = [
    { name: 'Nurkadyr', age: 23 },
    { name: 'Asan', age: 27 },    
    { name: 'Uson', age: 19 },    
    { name: 'Aman', age: 17 },  
    { name: 'Uson', age: 17 },  
    { name: 'Askar', age: 22 }    
  ]

const index = persons.findIndex((person) => person.name === "Uson" )
console.log(index)