const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

console.log(user)

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

console.log(user)

// for (const key in user) { 
//     console.log(`${key}: ${user[key]}`);
// }

const userKeys = Object.keys(user);

for (const key of userKeys) {
    console.log(`${key}: ${user[key]}`);
 }