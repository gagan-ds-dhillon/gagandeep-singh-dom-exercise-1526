const tagline = document.getElementById('tag-line');
console.log(tagline.textContent);

console.log("-------------------");
const headings = document.querySelectorAll('H2');

var collect = tagline.textContent;
console.log(collect);

for(let a= 0; a<headings.length; a++){
    collect = headings[a].textContent;
    console.log(collect);
}

const box = document.querySelectorAll('.box');
//console.log(headings[12].textContent);
//console.log("-------------------");
console.log(box[13].textContent);
