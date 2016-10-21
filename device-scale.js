
function DevicePower(state) {
    player = GetPlayer();
    var devicePower = player.SetVar("devicePower", state);
    devicePower = player.GetVar("devicePower");
    switch (devicePower) {
        case "on":
            // SetDeviceUnits("kgs");
            break;
        case "off":
            // alert("Device is Off");
            break;
        default:
            alert("x_x");
    }
}

function ToggleDeviceUnits() {
    var currentUnits = player.GetVar("deviceUnits");
    // GetWeight();
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
    // var temp = GetWeight() + player.GetVar("tareWeight");
    GetWeight();
    // SetTare();
    player.SetVar("netWeightLbs", parseFloat(player.GetVar("weightLbs")) + parseFloat(player.GetVar("tareLbs")));
    player.SetVar("netWeightKgs", parseFloat(player.GetVar("weightKgs")) + parseFloat(player.GetVar("tareKgs")));
    // var netWeightKgs = player.GetVar("weightKgs") + player.GetVar("tareKgs");
    // var temp = GetWeight();
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

    // return temp;
}

function GetWeight() {
    // var currentUnits = player.GetVar("deviceUnits");
    var containerWeight = parseFloat(player.GetVar("containerState")) * parseFloat(player.GetVar("containerWeight"));
    var lrgBMC = parseFloat(player.GetVar("lrgBMCState")) * parseFloat(player.GetVar("lrgBMC"));
    var medBMC = parseFloat(player.GetVar("medBMCState")) * parseFloat(player.GetVar("medBMC"));
    var smBMC = parseFloat(player.GetVar("smBMCState")) * parseFloat(player.GetVar("smBMC"));

    var weightLbs = parseFloat(containerWeight + lrgBMC + medBMC + smBMC);
    var weightKgs = weightLbs * 0.45359237;

    player.SetVar("weightLbs", weightLbs);
    player.SetVar("weightKgs", weightKgs);

    // return weight;
}

function tempDrop() {
    Weigh();
}

function SetTare() {
    // var tareLbs = player.GetVar("weightLbs") * - 1;
    // var tareKgs = player.GetVar("weightKgs") * - 1;
    player.SetVar("tareKgs", parseFloat(player.GetVar("weightKgs")) * -1);
    player.SetVar("tareLbs", parseFloat(player.GetVar("weightLbs")) * -1);
    Weigh();
    // SetDisplayValue(player.GetVar("tareWeight") + parseFloat(GetWeight()));
    // player.SetVar("displayWeight", tareWeight);
}

function SetDisplayValue(value) {
    player.SetVar("displayWeight", value);
    // return value;
}

