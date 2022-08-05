let string = "Hover Me!"
let chars= [...string]
console.log(chars)

const Hover = (chars) =>{
    let html = '';
    for (const value of chars) {
        html += `<span>${value}</span>`;
        document.querySelector('h2').innerHTML= html;
        
    }
}
window.onload = function(){
    // brownser vừa load lên làm gì thì sẽ code ở đây
    Hover(chars);
    
  }

