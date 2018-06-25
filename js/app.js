//Function that show profile section
$('.menu-newsfeed').click(function(){
    $('#left-section').css('display', 'block');
    $('#rigth-section').css('display', 'block');
    $('#newsfeed-section').css('display', 'block');
    $('#profile-section').css('display', 'none');
    $('#profile-section-content').css('display', 'none');
    $('#images-right').css('display', 'none');
})

//Function that show news feed section
$('.menu-profile').click(function(){
    $('#left-section').css('display', 'none');
    $('#rigth-section').css('display', 'none');
    $('#newsfeed-section').css('display', 'none');
    $('#profile-section').css('display', 'block');
    $('#profile-section-content').css('display', 'block');
    $('#images-right').css('display', 'block');
})

//Function that obtains data
function getTextData(){
    var textInfo = $('.exampleFormControlTextarea').val();

    //Empty fields validation
    /*
    if(textInfo.length > 1 || textInfo != null) {
        $('#publish').removeAttr("disabled");
    }
    */
    addTextData(textInfo);

    //Clean input
    $('.exampleFormControlTextarea').val('');

}

var template = '<div class="card">'+
                    '<div class="card-body">'+
                        '<h3><img class="sofia2" src="assets/images/chica1.png" alt="profile-section-picture">Sofia Rosas</h3>'+
                        '<p>_Text_</p>'+
                        '<a href="#"><i class="fas fa-heart"></i></a>'+
                        '<a onClick="deletePost()" href="#"><i class="far fa-trash-alt"></i></a>'+
                    '</div>'+
                '</div>';

//Function that print the text

function addTextData(text){
    var finalTemplate = "";
    finalTemplate = template.replace("_Text_", text);
    $('#newsfeed-section').append(finalTemplate);
    $('#profile-section-content').append(finalTemplate);
}

//Function that delete post

function deletePost(){
    var item = $(event.currentTarget);
    var info = item.parent();
    var contInfo = info.parent();

    contInfo.remove();
}

//Like function
$('.fa-heart').click(function(){
    var elemSelecc = $(event.currentTarget);
    elemSelecc.css('color', 'red');
});

//Recomve like function
$('.fa-heart').dblclick(function(){
    var elemSelecc = $(event.currentTarget);
    elemSelecc.css('color', 'grey');
});


/*

var templateAda = '<div class="card">'+
                    '<div class="card-body">'+
                        '<h3>Adalu Ramirez</h3>'
                        '<p>_Estoy aprendiendo sobre Java, ¿alguna recomendación?_</p>'+
                        '<a href="#"><i class="fab fa-python"></i></a>'+
                    '</div>'+
                '</div>';

//Function that print the text

function addPostData(post){
    var finalTemplateAda = "";
    finalTemplate = template.replace("_Estoy aprendiendo sobre Python, ¿alguna recomendación?_", post);
    $('#newsfeed-section').append(finalTemplateAda);
}
*/

//Click to obtain info new followed

$('#btn-follow1').click(function(){
    $('#postAda').show();
    var infoFollowing = $('#follow1').text();
    addNewFollowed(infoFollowing);

    var item = $(event.currentTarget);
    var info = item.parent();

    info.remove();

})

$('#btn-follow2').click(function(){
    var infoFollowing = $('#follow2').text();
    addNewFollowed(infoFollowing);

    var item = $(event.currentTarget);
    var info = item.parent();

    info.remove();
})

$('#btn-follow3').click(function(){
    var infoFollowing = $('#follow3').text();
    addNewFollowed(infoFollowing);

    var item = $(event.currentTarget);
    var info = item.parent();

    info.remove();
})

$('#btn-follow4').click(function(){
    $('#postLaboratoria').show();
    $('#postLaboratoria2').show();
    var infoFollowing = $('#follow4').text();
    addNewFollowed(infoFollowing);

    var item = $(event.currentTarget);
    var info = item.parent();

    info.remove();

})

$('#btn-follow5').click(function(){
    $('#postLevitha').show();
    var infoFollowing = $('#follow5').text();
    addNewFollowed(infoFollowing);

    var item = $(event.currentTarget);
    var info = item.parent();

    info.remove();
})


var template2 = '<ul class="list-group">'+
                    '<li class="list-group-item d-flex justify-content-between align-items-center">'+
                        '<i class="confirm-conected fas fa-bolt"></i>'+
                        '<h5 class="mb-1">_Adalu Ramirez_</h5>'+
                    '</li>'+
                '</ul>';

//Function that print followers

function addNewFollowed(newFollow){
    var finalTemplate2 = "";
    finalTemplate2 = template2.replace("_Adalu Ramirez_", newFollow);

    $('#following').append(finalTemplate2);
}

function move() {
    var elem = document.getElementById("statusBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
    if (width >= 100) {
        clearInterval(id);
    } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width * 1  + '%';
        }
    }
}

var config = {
apiKey: "AIzaSyD7m-SNXr4XUXFoX9AqQTjIUW0cqxkTNKg",
authDomain: "easy-code-sn.firebaseapp.com",
databaseURL: "https://easy-code-sn.firebaseio.com",
projectId: "easy-code-sn",
storageBucket: "easy-code-sn.appspot.com",
messagingSenderId: "1075281073613"
};
firebase.initializeApp(config);

//Get elements
var uploader = document.getElementById('uploder');
var fileButton = document.getElementById('fileButton');

//Listen to file selection
fileButton.addEventListener('change', function(e) {
//Get file
var file = e.target.files[0];
//Create a storage ref
var storageRef = firebase.storage().ref('user_fotos/' + file.name);
var imageRef = storageRef.child('')
//Upload file
var task= storageRef.put(file);
//Update progress bar
task.on('state_changed',

function progess(snapshot){
    var percentage = (snapshot.bytesTransferred /
    snapshot.totalBytes) * 100;
    uploder.value= percentage;
}

);
});

$("#upload-picture").click(function(){
    var img = $("#repl-img img");
    img.attr("src", img.attr("src").replace("albumCover.png", "we-can-do-it.jpg"));
})

//Function ready document

$(document).ready(function(){
    $('#publish').click(getTextData);
    $('#publish2').click(getTextData);

});



