class RightSide{
    static create(){
        const right = document.createElement("div")
        right.className = "RightSide"
        const ul = document.createElement("ul")
        ul.innerHTML = `<li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>`
        right.append(ul)

        return right
    }
}
export default RightSide