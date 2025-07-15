// // Highlight các element demo
// document.querySelectorAll(`
//   h1#main-title,
//   p.description,
//   input[name="email"],
//   button.btn[type="submit"],
//   div[class^="user-start"],
//   div[class$="user-end-xyz"],
//   div[class*="mid-match"],
//   ul.menu li,
//   .parent > .child,
//   .parent .sub-child,
//   ol.steps li:nth-child(2)
// `).forEach(el => {
//   el.classList.add("outlined");
// });

//HTML DOM
//1.Element : ID, class, tag ,css selector, html collection 
//2.Attribute
//3. Text

// var ex1= document.getElementById('main-title');
// console.log(ex1);
var ex2 = document.querySelector('h1#main-title');
console.log(ex2);
var ex3 = document.querySelector('p.description');
console.log(ex3);