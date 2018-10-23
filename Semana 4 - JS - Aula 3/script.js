// let btnSubmit = $("#btn-submit");

$(document).ready(function(){
$("#btn-submit").click(function(e){
    e.preventDefault();
    $("#xuxu").val();
    insereTweet();
})

function insereTweet(){
    var data=new Date()
    var dia=data.getDate();
    var mes=data.getMonth();
    var ano=data.getFullYear();
    data = dia + '/' + (mes+1) + '/' + ano;
    $(".tweets").prepend(`
    <div class="bg-light col-6">
        <p class="">${$("#xuxu").val()}</p>
        <p class="">${data}</p>
    </div>
    `)
}

function formatDate(data){
    let dia=data.getDate();
    let mes=data.getMonth();
    let ano=data.getFullYear();
    return dia + '/' + (mes+1) + '/' + ano;
}

function getNunberChar(){
    return $("#contador").text(`Você ainda tem ${280 - $("#xuxu").val().length} caracteres`)
}

$('#xuxu').keyup(function(){
    getNunberChar()
});

});