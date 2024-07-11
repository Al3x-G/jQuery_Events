$(document).ready(function() {
    $("#stream1_btn").click(function() { //.click works the same as .on("click"
        $(".stream1").show(); // opposite of .show is .hide
        $(".stream1").show('slow');
        $(".stream1").show('medium');
        $(".stream1").show('fast');
        $(".stream1").show(1000); // speed of show in milliseconds
   });

   /*
   .toggle is similar to show/hide works both ways like an on/off switch, 
   use this with a button rather than the element itself.
   see jQuery api doc for more examples such as .slideup() and .fadeout()
   which all can be given a time parameter the same as above.

   .fadeto(medium, 0.5) has two parameters, first is the speed, second is the opacity, 
   0 is fully transparent (hidden) and 1 is fully opaque (shown).
   */

   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 
