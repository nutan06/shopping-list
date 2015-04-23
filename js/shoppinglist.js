$(document).ready(function(){
	/*Add the items to list*/
	var $entry=$('#entry');
	$textInput=$('input:text');
	$entry.on('submit',function(e){
		e.preventDefault();
		var newText=$textInput.val();
		if(newText==""){
			alert("Please enter a value.")
		}else
		$('li:first').before('<li class="item"><input type="checkbox" class="check">'+newText+'</li>');
		$textInput.val('');
		
		/*Remove the checked items*/
		$('.delete').on('click',function(){

			var checkeditem=$(this).closest('.container').find('.check:checked').parent();
			
			checkeditem.remove();
		});		
		/*sort items in list*/
		$('.items').sortable();
	});
		
});