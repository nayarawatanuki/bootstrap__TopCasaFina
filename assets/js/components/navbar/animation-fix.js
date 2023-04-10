import "../../jquery.js";
import "../../../bootstrap/js/bootstrap.min.js";

$("#navbar__collapse").on("show.bs.collapse", function() {
    $(".banner").css("transform", "translate(-50%, 10%)");
})

$("#navbar__collapse").on("hide.bs.collapse", function() {
    $(".banner").css("transform", "translate(-50%, -50%)");
})