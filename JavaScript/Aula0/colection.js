const usuarios = new Map()


usuarios.set('Wander', 'Admin');
usuarios.set('Luciana','Admin');
usuarios.set('Marcos','Admin');
usuarios.set('Lucas','User');
usuarios.set('Samuel','User');
usuarios.set('Kauan', 'User');

function getAdmins(map) {
    let admins = [];
    for([key,value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

console.log(getAdmins(usuarios));