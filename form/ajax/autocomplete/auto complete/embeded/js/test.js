   $("#Haz_FindProbe").autocomplete({

         source: function(request, response) {

        $.ajax({
         url: "services/ECTourProbes1.php",
         dataType: 'json',
         data: {
         term : request.term,   //querystring
         ptype : '1'},  //added querystring
         success: function(data) {response(data);} }
         );},
         minLength: 1, //input character to trigger the ajax...

         select: function( event, ui ) {
         var selectedObj = ui.item; 
        $("#TextBox1").val(ui.item.value); //value to textbox...
        $("#TextBox1").focus();
        //return false;

 }

 

 }); 