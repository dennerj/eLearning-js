function DevicePower() {
    player = GetPlayer();
    var devicePower = player.GetVar("devicePower");
    switch (devicePower) {
        case "off":
			player.SetVar("devicePower" , "on");
			break;
		case "on":
			player.SetVar("devicePower" , "off");
            break;
        default:
            alert("x_x");
    }
}

function EStopState() {
    player = GetPlayer();
    var eStopState = player.GetVar("eStopState");
    switch (eStopState) {
        case "off":
			player.SetVar("eStopState" , "on");
			break;
		case "on":
			player.SetVar("eStopState" , "off");
            break;
        default:
            alert("x_x");
    }
}

function GuardState1() {
    player = GetPlayer();
    var guardState1 = player.GetVar("guardState1");
    switch (guardState1) {
        case "off":
			player.SetVar("guardState1" , "on");
			break;
		case "on":
			player.SetVar("guardState1" , "off");
            break;
        default:
            alert("x_x");
    }
}

function GuardState2() {
    player = GetPlayer();
    var guardState2 = player.GetVar("guardState2");
    switch (guardState2) {
        case "off":
			player.SetVar("guardState2" , "on");
			break;
		case "on":
			player.SetVar("guardState2" , "off");
            break;
        default:
            alert("x_x");
    }
}

function GuardState3() {
    player = GetPlayer();
    var guardState3 = player.GetVar("guardState3");
    switch (guardState3) {
        case "off":
			player.SetVar("guardState3" , "on");
			break;
		case "on":
			player.SetVar("guardState3" , "off");
            break;
        default:
            alert("x_x");
    }
}

function GuardState4() {
    player = GetPlayer();
    var guardState4 = player.GetVar("guardState4");
    switch (guardState4) {
        case "off":
			player.SetVar("guardState4" , "on");
			break;
		case "on":
			player.SetVar("guardState4" , "off");
            break;
        default:
            alert("x_x");
    }
}

//Might not need lotoState dude to having 4 guardState vars
function LotoState() {
    player = GetPlayer();
    var lotoState = player.GetVar("lotoState");
    switch (lotoState) {
        case "off":
			player.SetVar("lotoState" , "on");
			break;
		case "on":
			player.SetVar("lotoState" , "off");
            break;
        default:
            alert("x_x");
    }
}

function PumpState() {
    player = GetPlayer();
    var pumpState = player.GetVar("pumpState");
    switch (pumpState) {
        case "off":
			player.SetVar("pumpState" , "on");
			break;
		case "on":
			player.SetVar("pumpState" , "off");
            break;
        default:
            alert("x_x");
    }
}

function PressState() {
    player = GetPlayer();
    var pressState = player.GetVar("pressState");
    switch (pressState) {
        case "off":
			player.SetVar("pressState" , "off");
			break;
		case "manual":
			player.SetVar("pressState" , "manual");
            break;
		case "auto":
			player.SetVar("pressState" , "auto");
        default:
            alert("x_x");
    }
}

function MachineType() {
	
}

function Panel() {
	
}

function PressPosition1() {
	
}

function PressPosition2() {
	
}

