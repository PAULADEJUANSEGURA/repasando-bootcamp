function registerUser(name, lastName, email, password, subscribe) {
    let user;
    /* Este bucle for hace tantas iteraciones como usuarios haya en el array de users. (John Doe y Ada Lovelace)
    Por eso toma la longitud del array de usuarios que es 2 por origen de la capa de data del archivo users.js
    */
    for (let i = 0; i < users.length; i++) {
        /* 
        const _user = users[i] 
        Esta constante guarda el objeto user correspondiente sacandolo del array de users y coge el indice para distinguir si en la primera iteracion del for es John Doe y en la segunda iteracion del for es Ada Lovelace.
        En resumen guarda el objeto del usuario mediante el indice del array de users.       
        */
        const _user = users[i]
       
        /*
        Sobre el if comento que la condicion del if lo que hace es comprobar del objeto usuario la propiedad del email y la comprueba con el input del email del usuario que intenta registrarse para ver si esta en nuestra base de datos de la capa de data.
        */

        if (_user.email === email) {
            /* 
            Aqui cogemos la variable user que teniamos declarada en la linea 2 de este mismo archivo con la palabra reservada let user y le introducimos o le reasignamos el valor del objeto usuario que estamos registrando  */
            user = _user
            break;
        }
    }
    /* Este if lo que hace es comprobar que hemos dado valor a la variable user y mira si tiene valor. Lo hace mirando si es estrictamente diferente de undefined. */
    if (user !== undefined) {
        return false;
        /* Si fuera cierto que es diferente de undefined entonces es que ya tiene valor y entonces entra en este bloque y la función retorna un valor booleano falso*/
    }
    else {
        /* Si por el contrario user todavia valiese undefined, entraria en el else y crearía el objeto con las propiedades siguientes que vemos aqui debajo */
        user = {}
        /* user es igual a un objeto vacio */

        /* user va teniendo las propiedades de los inputs del formulario o mejor dicho de los parametros de arriba de nuestra funcion register user*/
        user.id = ++users.count;
        user.name = name;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        user.subscribe = subscribe;

        /* Por ultimo mediante el metodo de array push añade el usuario a nuestro array de users */
        users.push(user);
        /* Y la funcion devuelve el valor booleano true*/
        return true;

    }
}