document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })

})

function handleClick(event){

       let square = event.target
       let postion = square.id

       if(handleMove(postion)){
       
        setTimeout(() => {

            alert("O jogo Acabou - O Vencedor foi " + playerTime)

        }, 10)
     
       }

       updateSqueres()

       handleMove(postion)
}

function updateSqueres(){

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]

        if(symbol != ''){
              square.innerHTML = `<div class='${symbol}'></div>`
        }
        
    })

}