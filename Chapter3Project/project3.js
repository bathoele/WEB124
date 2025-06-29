// Brendan Thoele, 6.28.2025

var myName = "Brendan Thoele";
console.log(myName);
document.getElementById("p1").textContent = myName;

var salary = 89431;
console.log(salary);
document.getElementById("p2").textContent = salary;

var veteran = false;
console.log(veteran);
document.getElementById("p3").textContent = veteran;

var friends = ["Nick", "Andre", "Kyla"];
console.log(friends);
document.getElementById("p4").textContent = friends;

var fsalaries = [1000000, 100000, 500000];
console.log(fsalaries);
document.getElementById("p5").textContent = fsalaries;

var friend = {
  fname: "Matthew",
  lname: "Lee",
  salary: 100000
};
console.log(friend);
document.getElementById("p6").textContent = `${friend.fname} ${friend.lname}, ${friend.salary}`;