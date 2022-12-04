const project_buttons = document.querySelector(".project_buttons")
const project_button = document.querySelectorAll(".project_button")
const project_board = document.querySelectorAll(".project_board")

// const prev = document.querySelectorAll(".project_prev")
const next = document.querySelectorAll(".project_next")
const img = document.querySelectorAll(".project_img_wrapper")

// console.log(project_button[0])
// console.log(project_board[0])

project_button[0].addEventListener("click", (e) => {
    img[0].classList.add("img_display")
    project_board[0].classList.add("project_display")
    project_board[1].classList.remove("project_display")
    project_board[2].classList.remove("project_display")
    project_board[3].classList.remove("project_display")
})

project_button[1].addEventListener("click", (e) => {
    img[5].classList.add("img_display")
    project_board[0].classList.remove("project_display")
    project_board[1].classList.add("project_display")
    project_board[2].classList.remove("project_display")
    project_board[3].classList.remove("project_display")
})

project_button[2].addEventListener("click", (e) => {
    img[10].classList.add("img_display")
    project_board[0].classList.remove("project_display")
    project_board[1].classList.remove("project_display")
    project_board[2].classList.add("project_display")
    project_board[3].classList.remove("project_display")
})

project_button[3].addEventListener("click", (e) => {
    img[15].classList.add("img_display")
    project_board[0].classList.remove("project_display")
    project_board[1].classList.remove("project_display")
    project_board[2].classList.remove("project_display")
    project_board[3].classList.add("project_display")
})





// const img_display = document.querySelector(".img_display")


// prev[0].addEventListener("click",() => {
    //     if( i = 0){
//         img[0].classList.remove("img_display")
//         img[4].classList.add("img_display")
//         i = 4
//     } else if ( i > 0) {
//         img[i-1].classList.remove("img_display")
//         img[i].classList.add("img_display")
//         i = i - 1
//     }
// })

let i_1 = 0

next[0].addEventListener("click",() => {
    if( i_1 >= 4){
        img[0].classList.add("img_display")
        i_1 = 0
    } else if ( i_1 < 4) {
        img[i_1].classList.remove("img_display")
        img[i_1+1].classList.add("img_display")
        i_1 = i_1 + 1
    }
})

let i_2 = 5

next[1].addEventListener("click",() => {
    if( i_2 >= 9){
        img[5].classList.add("img_display")
        i_2 = 5
    } else if ( i_2 < 9) {
        img[i_2].classList.remove("img_display")
        img[i_2+1].classList.add("img_display")
        i_2 = i_2 + 1
    }
})

let i_3 = 10

next[2].addEventListener("click",() => {
    if( i_3 >= 14){
        img[10].classList.add("img_display")
        i_3 = 10
    } else if ( i_3 < 14) {
        img[i_3].classList.remove("img_display")
        img[i_3+1].classList.add("img_display")
        i_3 = i_3 + 1
    }
})

let i_4 = 15

next[3].addEventListener("click",() => {
    if( i_4 >= 19){
        img[15].classList.add("img_display")
        i_4 = 15
    } else if ( i_4 < 19) {
        img[i_4].classList.remove("img_display")
        img[i_4+1].classList.add("img_display")
        i_4 = i_4 + 1
    }
})