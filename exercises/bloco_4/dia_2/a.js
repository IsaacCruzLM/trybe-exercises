let createPhoneNumber =[1,2,3,4,5,6,7,8,9,0];

let phone = "";
    
phone = "(";

for (let index = 0; index <= 2; index += 1) {
    phone = phone + createPhoneNumber[index];
}
    
phone = phone + ") ";
    
for (let index = 3; index <= 5; index += 1) {
    phone = phone + createPhoneNumber[index];
}

    phone = phone + "-";
    
for (let index = 6; index <= 9; index += 1) {
    phone = phone + createPhoneNumber[index];
}
    
console.log(phone)
