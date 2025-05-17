<!-- main.js -->
import { links } from "./links.js";
const linkContainer = document.getElementById("links");
function addLink(name, link, image) {
  return `
  
    
    ${name}  
    
  
  `;
}
let allLinks = "";
links.forEach((ele) => {
  let link = ele.link;
  let name = ele.name;
  let image = ele.image;
  allLinks += addLink(name, link, image);
});
linkContainer.innerHTML = allLinks;
