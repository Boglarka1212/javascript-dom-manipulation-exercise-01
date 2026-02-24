"use strict";

const websiteBody = document.body;

const headingOne = document.querySelector("h1");
const paragraph = document.querySelector("p");

const listItemOne = document.querySelector("#list-item-one");
const listItemTwo = document.querySelector("#list-item-two");
const listItemThree = document.querySelector("#list-item-three");

const ul = document.querySelector("ul");


websiteBody.style.background = "pink";

headingOne.style.fontSize = "3rem";
headingOne.style.color = "Maroon";

paragraph.style.fontSize = "2rem";
paragraph.style.fontWeight = "700";

listItemOne.style.listStyleType = "circle";
listItemTwo.style.listStyleType = "disc";
listItemThree.style.listStyleType = "square";

ul.style.fontSize = "22px";