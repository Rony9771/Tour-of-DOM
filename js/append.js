console.log("append.js");

//where to add
const add = document.getElementById("dom-3");
console.log(add);

//what to add
const li =document.createElement('li');
li.innerText = "amr cholei nh";

//add the child
add.appendChild(li);


//where to add 
const sectionAdd =document.getElementById("main-content");

//what to adeded
const section =document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText = "My priyo khabar";
section.appendChild(h1);

const ul =document.createElement('ul');

const li1 =document.createElement('li');
li1.innerText = "Biriyani";
ul.appendChild(li1);

const li2 =document.createElement('li');
li2.innerText = "Khichuri";
ul.appendChild(li2);

const li3 =document.createElement('li');
li3.innerText = "Kobutor";
ul.appendChild(li3);

section.appendChild(ul);
sectionAdd.appendChild(section);


// set innerHtml  -ShortCut

const sectionDress = document.createElement('section');
sectionDress.innerHTML =`
<h1>My priyo dress </h1>
<ul>
  <li>lungi</li>
  <li>Jeans</li>
  <li>T-Shirt</li>
</ul>
`
sectionAdd.appendChild(sectionDress);
