// let btnSubmit = $("#btn-submit");

$("#btn-submit").click(function(e){
    e.preventDefault();
    $("#xuxu").val();
    insereTweet();
})

function insereTweet(){
    let divInserir = document.querySelector(".tweets");
    divInserir.innerHTML = `
        <p id="pzinho">${$("#xuxu").val()}</p>
    `
}