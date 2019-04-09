document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('button1').addEventListener('click',(event)=>{
        document.getElementById('modal1').classList.add('is-active');
        console.log( document.getElementById('modal1').classList)
    })
})

function closeModal(){
    document.getElementById('modal1').classList.remove('is-active')
    console.log( document.getElementById('modal1').classList)
}