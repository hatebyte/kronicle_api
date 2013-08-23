$(document).ready(function() {
	$('#btn-add').on('click', function(){
		var num		= $('.step').length, // amount of "duplicatable" items we have
		newNum	= new Number(num+1),
		newElem = $('#step-'+num).clone().attr('id', 'step-'+newNum).fadeIn('slow');
		changeIndex(newElem,newNum);
		newElem.find(':input').val('');
		$('#step-'+num).after(newElem);
		$('#ms-title-'+newNum).focus();
		return false;
	});
	$('.btn-del').live('click', function(event){
		var thisId = $(this).attr('id').replace('del-','');
		var thisIdInt = parseInt(thisId);
		$('#step-'+thisIdInt).nextAll().each(function(index){
			var eachStep = $(this);
			var currentIndex = parseInt($(this).attr('id').replace('step-',''));
			var freshIndex = currentIndex-1;
			console.log('step: '+eachStep+' || currentIndex: '+currentIndex);
			changeIndex(eachStep, freshIndex);
		});
		$('#step-'+thisId).fadeOut('250').remove();
		return false;
	});
	function changeIndex(thisStep, newIndex){
		thisStep.attr('id','step-'+newIndex);
		thisStep.find('legend').attr('id','legend-'+newIndex).html('Step '+newIndex);
		// title
		thisStep.find('.ms-title-label').attr('for', 'ms-title-'+newIndex);
		thisStep.find('.ms-title').attr('id', 'ms-title-'+newIndex);
		// description
		thisStep.find('.ms-description-label').attr('for', 'ms-description-'+newIndex);
		thisStep.find('.ms-description').attr('id', 'ms-description-'+newIndex);
		// image
		thisStep.find('.ms-imageUrl-label').attr('for', 'ms-imageUrl-'+newIndex);
		thisStep.find('.ms-imageUrl').attr('id', 'ms-imageUrl-'+newIndex);
		// dial image
		thisStep.find('.ms-dialImageUrl-label').attr('for', 'ms-dialImageUrl-'+newIndex);
		thisStep.find('.ms-dialImageUrl').attr('id', 'ms-dialImageUrl-'+newIndex);
		// dial image
		thisStep.find('.ms-time-label').attr('for', 'ms-time-'+newIndex);
		thisStep.find('.ms-time').attr('id', 'ms-time-'+newIndex);
		// index
		thisStep.find('.ms-indexInKronicle').attr('id', 'ms-indexInKronicle-'+newIndex).attr('value', newIndex-1);
		// delete button
		thisStep.find('.btn-del').attr('id','del-'+newIndex).attr('disabled', false);
	}
});