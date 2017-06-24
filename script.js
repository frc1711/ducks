websocket = new WebSocket("192.168.4.1");
window.addEventListener("devicemotion", orientationHandler(event), true);

//initial state
var initialAbsolute;
var initialAlpha;
var initialBeta;
var initialGamma;

var absolute;
var alpha;
var beta;
var gamma;

var enabled = true;

function startForm()
{
	console.log(websocket.readyState);

	initialAbsolute = absolute;
	initialAlpha = alpha;
	initialBeta = beta;
	initialGamma = gamma;
	
	sendData()
}

function stopForm()
{

}

function sendData()
{
	while(enabled)
	{
		websocket.send(alpha, beta, gamma);
	}
}

function orientationHandler(DeviceMotionEvent event)
{
	absolute = event.absolute;
	alpha = event.alpha; //motion of device around z axis
	beta = event.beta; //motion of device around x axis
	gamma = event.gamma; //motion of device around y axis

	//check MDN for values of degrees for these variables when using them
	
	//get the data
	//send a one time copy to save on start press
}