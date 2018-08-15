
var options = {
    strings: ["^3500A TUS IDEAS^1000."],
    typeSpeed: 90,
    backDelay: 200,
    loop: false
}
var optionsDesc = {
    strings: ["SOMOS UN ESTUDIO ENFOCADO AL USO DE NUEVAS TECNOLOGÍAS"],
    typeSpeed: 26,
    backDelay: 200,
    loop: false
}

var typed = new Typed("#texto-fx", options);
var typed = new Typed("#desc-fx", optionsDesc);

$('#top .navbar-nav a').on('click', function () {
    $('#top .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});

$('#tec1').hover(function() {
    $("#desc1").show("slow");
}, function() {    
    $("#desc1").hide("slow");
});

$('#tec2').hover(function() {
    $("#desc2").show("slow");
}, function() {    
    $("#desc2").hide("slow");
});

$('#tec3').hover(function() {
    $("#desc3").show("slow");
}, function() {    
    $("#desc3").hide("slow");
});

$('#tec4').hover(function() {
    $("#desc4").show("slow");
}, function() {    
    $("#desc4").hide("slow");
});

$('#tec5').hover(function() {
    $("#desc5").show("slow");
}, function() {    
    $("#desc5").hide("slow");
});

$('#tec6').hover(function() {
    $("#desc6").show("slow");
}, function() {    
    $("#desc6").hide("slow");
});

(function() {
    setTimeout(function() {
        $('.vuelo-fx').removeClass('hidden');
    }, 500);
})();

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('blackNav');
    } else {
        $('nav').removeClass('blackNav');
    }
})