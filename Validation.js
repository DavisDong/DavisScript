/* 
 *@Version: 0.1
 *@Author: Davis Dong
 *@Function: Validation
 */

//Need Modified
var url = "";

/* @Function: Post answer to database 0 Arg 0 Return
 * Need to add more stuff  
 */
function PostAnswer()
{
	var prob = ProblemStates[ProblemState];
	SubmitTag = "#" + prob + "submit";
	FormTag = "#" + prob + "form";
	TextTag = "#" + prob + "text";
	$(SubmitTag).click(function(){   
	   $(FormTag).submit(function() {
		   var key = $(TextTag).val();
		   key = $.trim(key.toLowerCase());
		   $.post(url, {
			   dataType: 'json',
			   prob: prob,
			   key: key
		   }).done(function(data) {
			   if (data.success == 1) {
				   AnimationControl(ProblemState);
				   ProblemState = 0;
				   //Add _gaq code?
			   }
			   else if (data.success == 0) {
				   alert("Try Again!");
				   //Add _gaq code?
			   }
		   }).fail(function() {
			   //Add local validation?Or...
	   	   });
	   	   return false;
	   });
	});
}
/* @Function: Get problem description from database 0 Arg 0 Return
 * Need to add more stuff  
 */

function GetProblemInfo()
{
	//Using $.get() method;
}

$(document).ready(function() {
	PostAnswer();
	GetProblemInfo();
});
