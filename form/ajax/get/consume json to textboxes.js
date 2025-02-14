$(document).ready(function()
{
   $("#Panel1EditableGrid1ListBox1").change(function(){
                
		//$(".Controls2").show();
                var id=$(this).val();
		var myurl = "http://192.104.1.13/oasissewer/service/c_data.asp?myclient="+id;
                //alert(myurl);

                //ajax...
  		 $.ajax
                ({
                
 			type: "GET",
			url: myurl,
                        //data: JSON.stringify(dataString),
                        contentType: "application/json; charset=utf-8",
                        cache: false,
                        success: function(data)
                        {
  
			//  alert(data);
			var dd = JSON.parse(data);
			//alert(dd.pdesc);
			$("#Panel1EditableGrid1ProgramName").val(dd.pname);
			$("#Panel1EditableGrid1ProjectDescription").val(dd.pdesc);
			$("#Panel1EditableGrid1BeginDate").val(dd.bdate);
			$("#Panel1EditableGrid1EndDate").val(dd.edate);
						
					
						  
                        } 
                }); //end ajax...

                
        });// end function...


//////////////////////////////////////////



 $("#Panel1EditableGrid1Typeofprogram").change(function(){
                
		var id2=$(this).val();
		var myurl2 = "http://192.104.1.13/oasissewer/service/c_data2.asp?myclient="+id2;
                //alert(myurl);

                //ajax...
  		 $.ajax
                ({
                
 			type: "GET",
			url: myurl2,
                        //data: JSON.stringify(dataString),
                        contentType: "application/json; charset=utf-8",
                        cache: false,
                        success: function(data)
                        {
  
			//  alert(data);
			var dd2 = JSON.parse(data);
			//alert(dd2.pdesc);
			$("#Panel1EditableGrid1Notes1").val(dd2.n1);
			$("#Panel1EditableGrid1Notes2").val(dd2.n2);
			$("#Panel1EditableGrid1Notes3").val(dd2.n3);
			$("#Panel1EditableGrid1Notes4").val(dd2.n4);
			$("#Panel1EditableGrid1Notes5").val(dd2.n5);
						
					
						  
                        } 
                }); //end ajax...

                
        });// end function...







}); //jquery document...