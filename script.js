// workout the height of the window:
var windowHeight = $(window).height(); // jquery
var menuBarHeight = $("#menuBar").height();
var codeContainerHeight = windowHeight - menuBarHeight;

$(".codeContainer").height(codeContainerHeight + "px");

$(".toggle").click(function() {
    // console.log(this + " is toggled.");
    $(this).toggleClass("selected");

    var activeDiv = $(this).html(); // inner html is same name as div

    $("#" + activeDiv + "Container").toggle();

    var showingDivs = $(".codeContainer").filter(function() {
        // return true if current div is display true:
        return($(this).css("display") != "none");

    }).length; // return length of divs showing

    var divWidth = 100/showingDivs; // reduce size by amount of divs showing

    $(".codeContainer").css("width", divWidth + "%");
}); //-----------------------toggle-end--------------------------------

$("#runBtn").click(function() {
    // search iframe contents and find the html tag and replace innerHTML
    $("iframe").contents().find("html").html('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val());

    // JS eval should NOT be used online:
    document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
});
