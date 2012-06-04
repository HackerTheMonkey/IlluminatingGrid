/*
 * This function sets various timeouts and use the jQuery library in order to illuminate (change the background-color
 * CSS property back and forth) of the selected div tags. A better approach for re-factoring this method is by allowing
 * the caller to pass an associative array (JSON Array) with a key-value pair whereby the key will be the index of the cell
 * that its color need to be changed and the value will be the desrired color to change to.
 */
function doLightenUp(lightInterval, transitionTimeout)
{
	var timeoutInterval = lightInterval;    			
	$("#22").css("background-color", "yellow");
	setTimeout('$("#22").css("background-color", "#545454") ; $("#33").css("background-color", "green")', timeoutInterval);				
	timeoutInterval += lightInterval;
	setTimeout('$("#33").css("background-color", "#545454")', timeoutInterval);
	timeoutInterval += transitionTimeout;
	setTimeout('$("#13").css("background-color", "blue")', timeoutInterval);
	timeoutInterval += lightInterval;
	setTimeout('$("#13").css("background-color", "#545454")', timeoutInterval);
	timeoutInterval += transitionTimeout;
	setTimeout('$("#41").css("background-color", "white")', timeoutInterval);
	timeoutInterval += lightInterval;
	setTimeout('$("#41").css("background-color", "#545454")', timeoutInterval);
}
/*
 * This function is to be invoked right after the document is finished loading, it will simply
 * draw a series of div tags that will be arranged in a grid-like fashion. The location of the grid
 * and the number of rows and columns can be changed as desired.
 */
function drawGrid(rows, cols)
{
	var htmlText = "<p id='mainBanner' align='center' style='border: 1px; border-style: solid ; border-color: #BBE5FA; padding: 7px; width: 11%'><font color='#16ABF5'>BSkyB</font> Coding Test <sub><font color='#F0F2D8'>Hasanein Khafaji</font></sub></p>";
	/*
	 * Generate the htmlText of the grid to be created as per the passed dimensions
	 */
	 var topValue = 20;
	 for(var i = 1 ; i <= rows ; i++)
	 {
		var leftValue = 20;
		for(var j = 1  ; j <= cols ; j++)
		{
			leftValue += 10;
			var divId = i + "" + j;
			var divTag = "<div id='" + divId  + "' class='column_cell_01' style='top: " + topValue + "%; left:" + leftValue + "%'></div>";				 		
			htmlText = htmlText + divTag;
		}
		topValue += 10;
	 }				 
	 $("body").html(htmlText);
}		
/*
 * This function is an event handler function that is going to be invoked after receiving the "ready" jQuery event when
 * the document finished loading. It will call the drawGrid function to draw a 4 X 4 grid and later on invoke the doLightenUp()
 * function to change the colors of some of the selected DIV tags.
 */
function documentReadyEventHandler()
{	
	drawGrid(4, 4);
	var lightInterval = 125; // Change this to increase the period of time the light stays on
	var transitionTimeout = 2; // change this to increase/decrease the time between lights get turned on, the smaller the smother transition.
	var setIntervalTimeout = 2 * (2 * lightInterval + transitionTimeout);// When changing the implementation of doLightenUp(), this equation need to be changed to a more generic one that fits any number of cells being illuminated.
	var functionIntervalString = "doLightenUp(" + lightInterval + ", " + transitionTimeout + ")";
	setInterval(functionIntervalString, setIntervalTimeout);
}

$(document).ready(documentReadyEventHandler);