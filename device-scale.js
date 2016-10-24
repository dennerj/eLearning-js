"use strict";

function DevicePower(state) {
    var player = GetPlayer();
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
    var player = GetPlayer();
    var currentUnits = player.GetVar("deviceUnits");
    switch (currentUnits) {
        case "lbs":
            player.SetVar("deviceUnits", "kgs");
            setDisplayValue(player.GetVar("netWeightKgs"));
            break;
        case "kgs":
            player.SetVar("deviceUnits", "lbs");
            setDisplayValue(player.GetVar("netWeightLbs"));
            break;
        default:
            player.SetVar("deviceUnits", "x_x");
    }
}

function Weigh() {
    var player = GetPlayer();
    GetWeight();
    player.SetVar("netWeightLbs", parseFloat(player.GetVar("weightLbs")) + parseFloat(player.GetVar("tareLbs")));
    player.SetVar("netWeightKgs", parseFloat(player.GetVar("weightKgs")) + parseFloat(player.GetVar("tareKgs")));
    var currentUnits = player.GetVar("deviceUnits");
    switch (currentUnits) {
        case "lbs":
            setDisplayValue(player.GetVar("netWeightLbs"));
            break;
        case "kgs":
            setDisplayValue(player.GetVar("netWeightKgs"));
            break;
        default:
            player.SetVar("deviceUnits", "x_x");
    }
}

function GetWeight() {
    var player = GetPlayer();
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
    var player = GetPlayer();
    player.SetVar("tareKgs", parseFloat(player.GetVar("weightKgs")) * -1);
    player.SetVar("tareLbs", parseFloat(player.GetVar("weightLbs")) * -1);
    Weigh();
}

function setDisplayValue(value) {
    var player = GetPlayer();
    player.SetVar("displayWeight", value);
}