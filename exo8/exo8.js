const user={
    name:"Duong",
    age:24,
    ability:['coding']
};

const copyUser=user;
copyUser.name="Pierre";
console.log(copyUser.name);
console.log(user.name);
