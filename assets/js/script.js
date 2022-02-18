
let headsRolled = 0;
let tailsRolled = 0;

document.addEventListener('DOMContentLoaded', function () {

    console.log('Hi')

    const flipBtn = document.querySelector('#flip');
    const pennyImg = document.getElementById('penny-image');
    const message = document.getElementById('message');
    const tails = document.getElementById('tails');
    const heads = document.getElementById('heads');
    const tailsPerc = document.getElementById('tails-percent');
    const headsPerc = document.getElementById('heads-percent');

    flipBtn.addEventListener('click',()=>{

        let flippedHeads = Math.random() < 0.5

        if(flippedHeads){
            pennyImg.src = 'assets/images/penny-heads.jpg';
            message.textContent = "You Flipped Heads!"
            headsRolled++
        }else{
            pennyImg.src = "assets/images/penny-tails.jpg";
            message.textContent = "You Flipped Tails!"
            tailsRolled++
        }

               heads.textContent = headsRolled;
               tails.textContent = tailsRolled;


        let total = tailsRolled + headsRolled;
        let percentHeads = 0;
        let percentTails = 0;

        if(total > 0){
            percentHeads = Math.round((headsRolled / total) * 100);
            percentTails = Math.round((tailsRolled / total) * 100);
        }

        tailsPerc.textContent = percentTails + '%';
        headsPerc.textContent = percentHeads + '%';
    })

    const clearBtn = document.getElementById('clear');

    clearBtn.addEventListener('click', ()=> {
       tailsRolled = 0;
       headsRolled = 0;
       percentHeads = 0;
       percentTails = 0;
        heads.textContent = headsRolled;
        tails.textContent = tailsRolled;
        headsPerc.textContent = percentHeads;
        tailsPerc.textContent = percentTails;
message.textContent ="Let's Get Rolling!"

    })
        

})