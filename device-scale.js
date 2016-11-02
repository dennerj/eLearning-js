
function DevicePower() {
    player = GetPlayer();
    //var devicePower = player.SetVar("devicePower", state);
    var devicePower = player.GetVar("devicePower");
    switch (devicePower) {
        case "off":
			player.SetVar("devicePower" , "on");
            // alert("Device is Off");
			break;
		case "on":
			player.SetVar("devicePower" , "off");
            // SetDeviceUnits("kgs");
            break;
        default:
            alert("x_x");
    }
}

function ToggleDeviceUnits() {
    var currentUnits = player.GetVar("deviceUnits");
    switch (currentUnits) {
        case "lbs":
            player.SetVar("deviceUnits", "kgs");
            SetDisplayValue(player.GetVar("netWeightKgs"));
            break;
        case "kgs":
            player.SetVar("deviceUnits", "lbs");
            SetDisplayValue(player.GetVar("netWeightLbs"));
            break;
        default:
            player.SetVar("deviceUnits", "x_x");
    }
}

function Weigh() {
    GetWeight();
    player.SetVar("netWeightLbs", parseFloat(player.GetVar("weightLbs")) + parseFloat(player.GetVar("tareLbs")));
    player.SetVar("netWeightKgs", parseFloat(player.GetVar("weightKgs")) + parseFloat(player.GetVar("tareKgs")));
    var currentUnits = player.GetVar("deviceUnits");
    switch (currentUnits) {
        case "lbs":
        SetDisplayValue(player.GetVar("netWeightLbs"));
        break;
        case "kgs":
        SetDisplayValue(player.GetVar("netWeightKgs"));
        break;
        default:
        player.SetVar("deviceUnits", "x_x");
    }
}

function GetWeight() {
    var containerWeight = parseFloat(player.GetVar("containerState")) * parseFloat(player.GetVar("containerWeight"));
    var lrgBMC = parseFloat(player.GetVar("lrgBMCState")) * parseFloat(player.GetVar("lrgBMC"));
    var medBMC = parseFloat(player.GetVar("medBMCState")) * parseFloat(player.GetVar("medBMC"));
    var smBMC = parseFloat(player.GetVar("smBMCState")) * parseFloat(player.GetVar("smBMC"));

    var weightLbs = parseFloat(containerWeight + lrgBMC + medBMC + smBMC);
    var weightKgs = weightLbs * 0.45359237;

    player.SetVar("weightLbs", weightLbs);
    player.SetVar("weightKgs", weightKgs);
}

function tempDrop() {
    Weigh();
}

function SetTare() {
    player.SetVar("tareKgs", parseFloat(player.GetVar("weightKgs")) * -1);
    player.SetVar("tareLbs", parseFloat(player.GetVar("weightLbs")) * -1);
    Weigh();
}

function SetDisplayValue(value) {
    player.SetVar("displayWeight", value);
}