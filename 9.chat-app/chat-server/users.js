const users = [];

const addUser = ({id, name, room})=>{
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    const existingUser = users.find(user => user.name === name);
    if(existingUser){
        return {error: 'username already taken'};
    }
    const user = {name, room, id};
    users.push(user);
    return {user};
}

const removeUser = (id)=>{
    const index = users.findIndex(u => u.id === id);
    if(index != -1){
        return users.splice(index, 1);
    }
}

const getUser = (id)=> users.find(u => u.id === id);

const getUsersInRoom = (room)=> users.filter(u => u.room === room);

module.exports = {addUser, removeUser, getUser, getUsersInRoom};