/* 
 *@Version: 0.1
 *@Author: Davis Dong
 *@Function: ProblemDisplay
 */
 
/*
 * Enum of ProblemSection CSS
 * Properties: top, left, height, width
 */
ProblemPositions = {
	0 : {top:-800, left: -800, HTML5Tag:"'#default"},
	11: {top:200, left: 400, height:300, width:300, HTML5Tag:"'#default'"},
	12: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	13: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	14: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	15: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	21: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	22: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	23: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	24: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	25: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	26: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	31: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	32: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	33: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"},
	34: {top:300, left: 200, height:300, width:300, HTML5Tag:"'#default'"}
}
/*
 *@Function: Display Problem Section 0 Arg 0 Return
 * Setting css value for the HTML5 Elements.
 */
function ProblemDisplay()
{
	var problem = ProblemPositions[ProblemState];
	var controller = $(problem.HTML5Tag);
	controller.fadeIn();
	controller.css('top',problem.top);
	controller.css('left',problem.left);
	controller.css('height',problem.height);
	controller.css('width',problem.width);
}

	