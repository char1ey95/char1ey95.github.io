let article = document.querySelectorAll('article')
let project = document.querySelectorAll('.project_board')

let observer = new IntersectionObserver((e)=>{
    e.forEach((box) => {
        if(box.isIntersecting){
            box.target.style.opacity = 1;
        } else {
            box.target.style.opacity = 0;
            // box.target.style.background = tranparent;
        }
    })
})

observer.observe(article[0])
observer.observe(article[1])
observer.observe(article[2])

let observer_proj = new IntersectionObserver((e)=>{
    e.forEach((box) => {
        if(box.isIntersecting){
            box.target.style.left = 0;
        } else {
            box.target.style.left = "-800px";
        }
        // if(box.isIntersecting){
        
        // } else {
        //     box.target.style.left = "-600px";
        // }
    })
},{
    threshold:0.1
})
observer_proj.observe(project[0])
observer_proj.observe(project[1])
observer_proj.observe(project[2])
observer_proj.observe(project[3])
observer_proj.observe(project[4])