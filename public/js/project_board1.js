const project_buttons = document.querySelector(".project_buttons")
const project_button = document.querySelectorAll(".project_button")
const project_board = document.querySelectorAll(".project_board")


// console.log(project_button[0])
// console.log(project_board[0])

project_button[0].addEventListener("click", (e) => {
    project_board[0].classList.add("project_display")
    project_board[1].classList.remove("project_display")
    project_board[2].classList.remove("project_display")
    project_board[3].classList.remove("project_display")
})

project_button[1].addEventListener("click", (e) => {
    project_board[0].classList.remove("project_display")
    project_board[1].classList.add("project_display")
    project_board[2].classList.remove("project_display")
    project_board[3].classList.remove("project_display")
})

project_button[2].addEventListener("click", (e) => {
    project_board[0].classList.remove("project_display")
    project_board[1].classList.remove("project_display")
    project_board[2].classList.add("project_display")
    project_board[3].classList.remove("project_display")
})

project_button[3].addEventListener("click", (e) => {
    project_board[0].classList.remove("project_display")
    project_board[1].classList.remove("project_display")
    project_board[2].classList.remove("project_display")
    project_board[3].classList.add("project_display")
})
