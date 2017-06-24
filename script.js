websocket = new WebSocket(server);
window.addEventListener("deviceorientation", orientationHandler, true);

function startForm()
{
	websocket.send(accelerometer data here);
}

function stopForm()
{

}

function orientationHandler()
{
	var absolute = event.absolute;
	var alpha = event.alpha; //motion of device around z axis
	var beta = event.beta; //motion of device around x axis
	var gamma = event.gamma; //motion of device around y axis

	//check MDN for values of degrees for these variables when using them
	
}