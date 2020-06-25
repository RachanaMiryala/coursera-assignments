var names=["John","joe","Roy","Tina"];
console.log(names[0]);
for(name=0 ; name<names.lenght ; name++) {
if(names[name].charAt(0)=='j' || names[name].charAt(0)=='J') {
console.log("Goodbye" + names[name]);
}
else {
 console.log("Hi" + names[name]);
}
}
