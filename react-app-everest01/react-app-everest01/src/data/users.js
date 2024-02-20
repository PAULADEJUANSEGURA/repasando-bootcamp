const users = []
users.count = 0

// El array de users tiene a John Doe en el indice 0
users.push(
    { id: ++users.count ,
    name: 'John', 
    lastName: 'Doe',
    email: 'john@doe.com', 
    password: '123123123',
    subscribe: false })

// El array de users tiene a Ada Lovelace en el indice 1    
users.push(
    { id: ++users.count , 
    name: 'Ada', 
    lastName: 'Lovelace',
    email: 'ada@love.com', 
    password: '123123123',
    subscribe: true })

// Pero la longitud del array users es 2
// users.length = 2
// Mientras no se registre un tercer usuario mediante la app
