

const arrColor = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

// hàm render ra bảng màu
const renderBtn = (arrColor) => {

  let stringBtn = '';
  for (const value of arrColor) {
    stringBtn += `<button class="color-button ${value}" onclick ="change('${value}')"></button>` // phải truyền vào value ở nút nhấn để đổi màu ngôi nhà chứ l nên truyền vào mảng
    document.querySelector('#colorContainer').innerHTML = stringBtn
    //console.log("stringBtn: ", stringBtn);
  }
}

/// nhấn nút đổi màu
const change = (color) => { // color tương đương với ${value}
  let stringColor = document.getElementById('house'); // cách để tạo thêm class vào để đổi màu ngôi nhà
  var a = `house ${color}`
  
  
  stringColor.className = a;
  
  const buttons = document.querySelectorAll("button") // nodelist buttons
  buttons.forEach(e => {
   // console.log(e)
    if(e.classList.contains(color)){
      e.classList.add("active")
    }
    else{
      e.classList.remove("active")
    }
    // console.log(e.classList.contains(color))
  })
  // console.log(buttons)

}

// load render ra bảng màu khi load trang wed
window.onload = function () {
  // brownser vừa load lên làm gì thì sẽ code ở đây
  renderBtn(arrColor);

}

