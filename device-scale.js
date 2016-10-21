
function DevicePower(state) {
    player = GetPlayer();
    var devicePower = player.SetVar("devicePower", state);
    devicePower = player.GetVar("devicePower");
    switch (devicePower) {
        case "on":
            SetDeviceUnits("kgs");
            break;
        case "off":
            alert("Device is Off");
            break;
        default:
            alert("x_x");
    }
}

function ToggleDeviceUnits() {
    var currentUnits = player.GetVar("deviceUnits");
    var weight = GetWeight();
    switch (currentUnits) {
        case "lbs":
            player.SetVar("deviceUnits", "kgs");
            weight = (parseFloat(weight) + parseFloat(player.GetVar("tareWeight"))) * 0.45359237;
            SetDisplayValue(weight);
            break;
        case "kgs":
            player.SetVar("deviceUnits", "lbs");
            break;
        default:
            player.SetVar("deviceUnits", "x_x");
    }
}

function Weigh() {
    // var temp = GetWeight() + player.GetVar("tareWeight");
    var temp = GetWeight();
    if (temp < 0) {
        temp = parseFloat(temp) + (player.GetVar("tareWeight") * -1);
    } else {
         temp = parseFloat(temp) + (player.GetVar("tareWeight"));
    }
    SetDisplayValue(temp);
    //player.SetVar("displayWeight", temp);

    return temp;
}

function GetWeight() {
    var currentUnits = player.GetVar("deviceUnits");
    var containerWeight = parseFloat(player.GetVar("containerState")) * parseFloat(player.GetVar("containerWeight"));
    var lrgBMC = parseFloat(player.GetVar("lrgBMCState")) * parseFloat(player.GetVar("lrgBMC"));
    var medBMC = parseFloat(player.GetVar("medBMCState")) * parseFloat(player.GetVar("medBMC"));
    var smBMC = parseFloat(player.GetVar("smBMCState")) * parseFloat(player.GetVar("smBMC"));
    var weight = parseFloat(containerWeight + lrgBMC + medBMC + smBMC);

    // if (currentUnits === "kgs") {
    //     weight = (parseFloat(weight) + parseFloat(player.GetVar("tareWeight"))) * 0.45359237;
    // }
     return weight;
}

function tempDrop() {
    Weigh();
}

function setTare() {
    var tareWeight = player.SetVar("tareWeight", parseFloat(GetWeight()) * -1);
    SetDisplayValue(player.GetVar("tareWeight") + parseFloat(GetWeight()));
    // player.SetVar("displayWeight", tareWeight);
}

function SetDisplayValue(value) {
    player.SetVar("displayWeight", value);
    return value;
}