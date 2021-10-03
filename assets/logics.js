$('#ped_btn').click(function () {

    $.ajax({
        url: "ajax/list.html",
        type: 'GET',
        success: function (data) {
            $("#list").html(data);
        }
    });

    slide('home', 'list');

});

function home_btn() {
    slideBack('list', 'home');
}





function note1() {

    $.ajax({
        url: "ajax/pedro_clinic.html",
        type: 'GET',
        success: function (data) {
            $("#pedro_clinic").html(data);
        }
    });

    slide('list', 'pedro_clinic');
}

function pedroBack() {
    slideBack('pedro_clinic', 'list');
}






function appoinmentFunc() {

    $.ajax({
        url: "ajax/bookingPage.html",
        type: 'GET',
        success: function (data) {
            $("#bookingPage").html(data);
        }
    });

    slide('pedro_clinic', 'bookingPage');
}

function appoinmentBack() {
    slideBack('bookingPage', 'pedro_clinic');
}




function bookFunc() {

    $.ajax({
        url: "ajax/payment.html",
        type: 'GET',
        success: function (data) {
            $("#payment").html(data);
        }
    });

    slide('bookingPage', 'payment');
}

function bookingBack() {
    slideBack('payment', 'bookingPage');
}



function seeDetail() {

    $.ajax({
        url: "ajax/recordDetails.html",
        type: 'GET',
        success: function (data) {
            $("#recordDetails").html(data);
        }
    });

    slide('record', 'recordDetails');
}

function recordBack() {
    slideBack('recordDetails', 'record');
}






$('.inactivated').click(function () {



    // console.log($(this).attr("id"));
    // console.log($(this).attr("id") + $('.activated').attr("id"));

    if (($('.activated').attr("id")) == ($(this).attr("id"))) {
        // do nothing 
        // alert("Same");
    }

    else if ((($('.activated').attr("id")) == "notifications") && (($(this).attr("id")) != "account")) {
        // slideBack($(this).attr("id"), $('.activated').attr("id"));
        $(".page").addClass("hidden");
        $("#notifications").removeClass("hidden");
        slideBack($('.activated').attr("id"), $(this).attr("id"));


    }

    else if ((($('.activated').attr("id")) == "record") && (($(this).attr("id")) == "home")) {
        $(".page").addClass("hidden");
        $("#record").removeClass("hidden");
        slideBack($('.activated').attr("id"), $(this).attr("id"));
    }

    else if ((($('.activated').attr("id")) == "account")) {
        $(".page").addClass("hidden");
        $("#account").removeClass("hidden");
        slideBack($('.activated').attr("id"), $(this).attr("id"));
    }


    else {
        $(".page").addClass("hidden");
        slide($('.activated').attr("id"), $(this).attr("id"));
    }








    $('.activated').removeClass('activated');
    $('.nav').addClass('inactivated');
    $(this).removeClass('inactivated').addClass('activated');

});





