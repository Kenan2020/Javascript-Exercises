let fLi = document.querySelector(".chapter")

let x, y, z

x = fLi.closest(".book")//(ul) searching for the closest parent which have this class name
y = fLi.closest(".contents")//div
z = fLi.closest(".heading")//null (because h2 is not an ancestor)
//or we can use the tag name (x = fLi.closest("ul"))


console.log(x, y, z)
