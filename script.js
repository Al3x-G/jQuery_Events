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

   /*
   below is an example of method chaining 
    */
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream').addClass('highlight_stream'); // same as above, cleaner code
   });

   /*
   The example below is unrelated to this project but is a good example of event method chaining

   $("#mybutton").removeclass("bluebox").addClass("border");
   $("p").css("color","blue").slideUp(2000).slideDown(2000);
   $("a").attr("href", "http://www.example.com");

   Here, we have the slideUp() followed by the slideDown() chained together. 
   An element's attributes can contain useful information, so it's important to be able to access 
   and manipulate them. The attr() function acts both as a getter and a setter. 
   As with the CSS function, we can query with one parameter, here we're looking for an href, 
   and update the attribute for the second parameter, in this case, to example.com
   */

}); 
