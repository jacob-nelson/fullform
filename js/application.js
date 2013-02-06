/**
 * @author jacob
 */

Zepto(function($){
	var jqtouch = $.jQTouch({
	    //icon: 'mail.png',
	});

	getFullFormList("All");

	    
	$("#categories-page ul.plastic li").bind("click", function(){
		getFullFormList($(this).text());
	}); 
	    
    $('#home ul a, #mailbox ul a').click(function(){
        $( $(this).attr('href') + ' h1' ).html($(this).html());
    });
});

function getFullFormList(category){
	$("#home-page .plastic").remove()
    var ffHTML = '<ul class="plastic">';
	if(category == "All"){	
		for(i=0;i<fullforms.details.length;i++){
			items = fullforms.details[i].items;
			ffHTML += '<li class="sep">'+fullforms.details[i].category+'</li>';
			for(j=0;j<items.length;j++){
				item = items[j];
		        ffHTML += '<li>'+item.SF+'<span class="expansion" >'+item.FF+'</span></li>'
			}
		}
	}
	else{
		ffHTML += '<li class="sep">'+category+'</li>';
		for(i=0;i<fullforms.details.length;i++){
			if(fullforms.details[i].category == category){
				items = fullforms.details[i].items;
				break;
			}
		}
			for(j=0;j<items.length;j++){
				item = items[j];
		        ffHTML += '<li>'+item.SF+'<span class="expansion" >'+item.FF+'</span></li>'
			}		
	}
	
    ffHTML += '</ul>'
	$(ffHTML).insertAfter($('#ffl'))
	
//	return ffHTML;
}
