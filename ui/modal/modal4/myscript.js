// JavaScript Document

	var modal = (function(){
				var 
				method = {},
				$overlay,
				$modal,
				$content,
				$close;

				// Center the modal in the viewport
				method.center = function () {
					var top, left;

					top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
					left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

					$modal.css({
						top:top + $(window).scrollTop(), 
						left:left + $(window).scrollLeft()
					});
				};

				// Open the modal
				method.open = function (settings) {
					$content.append(settings.content);

					$modal.css({
						width: settings.width || 'auto', 
						height: settings.height || 'auto'
					})

					method.center();

					$(window).bind('resize.modal', method.center);

					$modal.show();
					$overlay.show();
				};

				// Close the modal
				method.close = function () {
					$modal.hide();
					$overlay.hide();
					$content.empty();
					$(window).unbind('resize.modal');
				};

				// Generate the HTML and add it to the document
				$overlay = $('<div id="ioverlay"></div>');
				$modal = $('<div id="imodal"></div>');
				$content = $('<div id="icontent"></div>');
				$close = $('<a id="iclose" href="#">close</a>');

				$modal.hide();
				$overlay.hide();
				$modal.append($content, $close);

				$(document).ready(function(){
					$('body').append($overlay, $modal);						
				});

				$close.click(function(e){
					e.preventDefault();
					method.close();
				});

				return method;
			}());

			// Wait until the DOM has loaded before querying the document
			$(document).ready(function(){

				$.get('ajax.html', function(data){
					modal.open({content: data});
				});


				$('#howdy').click(function(e){
					var addressValue = $(this).attr("href");
			        //alert(addressValue );
					modal.open({content: "<iframe src="+ addressValue +" frameborder=0 height=200 width=500></iframe>"});
					e.preventDefault();
				});
				
					$('#pt-anonlogin').click(function(e){
					var addressValue = $(this).attr("href");
			        //alert(addressValue );
					modal.open({content: "<iframe src="+ addressValue +" frameborder=0 height=200 width=500></iframe>"});
					e.preventDefault();
				});
				
				
			});
			
			
			
			
			
			