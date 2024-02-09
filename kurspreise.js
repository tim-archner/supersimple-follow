
    function showNumber() {
    var inputElement = document.getElementById("inputNumber");
    var inputValue = parseInt(inputElement.value); // Parse input value as an integer

    var result = calculatePrice(inputValue).toFixed(2);
    var preisGesamt = (result*inputValue).toFixed(2);
    var monate = Math.ceil(inputValue/4);
    var monatsRate = (preisGesamt/monate).toFixed(2);
    var ersparnisGesamt = ((37.46*inputValue)-preisGesamt).toFixed(2);

    if (isNaN(inputValue)) {

        document.getElementById("outputNumber").textContent = "";
        document.getElementById("ganzerPreis").textContent = "";
        document.getElementById("anzahlMonate").textContent = "";
        document.getElementById("monatsRate").textContent = "";
        document.getElementById("ersparnisGesamt").textContent = "";

    } else {

    // Update the content of the outputNumber div with the entered value
        document.getElementById("outputNumber").textContent = result + " €";
        document.getElementById("ganzerPreis").textContent = preisGesamt + " €";
        document.getElementById("anzahlMonate").textContent = monate + " Monate";
        document.getElementById("monatsRate").textContent = monatsRate + " €";
        document.getElementById("ersparnisGesamt").textContent = ersparnisGesamt + " €";
    }
    }

    function calculatePrice(inputValue) {
    var limit1 = 30;
    var limit2 = 38;
    var factor = -0.07;

    var result;

    result = limit1-(limit1-limit2)*Math.pow(Math.E, factor*inputValue);

    // Calculate the result using the formula
    return result;
    }