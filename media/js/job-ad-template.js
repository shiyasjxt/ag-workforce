$(document).ready(function(){
	// view job, remove empty optional field on job ad template.
	$(".job-ad-option").each(function(){
		if ("" == $.trim($(this).children(".job-ad-optional-text").text()))
		{
			$(this).hide();
		}
	});
	$(".job-ad-bullets").each(function(){
		if ( !$.trim( $(this).text() ).length )
		{
			$(this).hide();
		}
	});
});