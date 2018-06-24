//Function that show profile section 
$('#news-feed').click(function(){
    $('#left-section').css('display', 'block');
    $('#rigth-section').css('display', 'block');
    $('#newsfeed-section').css('display', 'block');
    $('#profile-section').css('display', 'none');
})

//Function that show news feed section
$('#profile').click(function(){
    $('#left-section').css('display', 'none');
    $('#rigth-section').css('display', 'none');
    $('#newsfeed-section').css('display', 'none');
    $('#profile-section').css('display', 'block');
})

//Function that obtains data
function getTextData(){
    var textInfo = $('#exampleFormControlTextarea1').val();

    //Empty fields validation 
    /*
    if(textInfo.length > 1 || textInfo != null) {
        $('#publish').removeAttr("disabled");
    }
    */
    addTextData(textInfo);

    //Clean input
    $('#exampleFormControlTextarea1').val('');
}

var template = '<div class="card">'+
                    '<div class="card-body">'+
                        '<h3>User Name</h3>'+
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

//Function for

$(document).ready(function(){
    $('#publish').click(getTextData);
});