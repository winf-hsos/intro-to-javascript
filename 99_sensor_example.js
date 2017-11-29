var giveMeAName = function(temperature, ledBricklet) {

    if (temperature > 2400 && temperature < 2900)
        ledBricklet.setRGBValue(0, 255, 0);
    else
        ledBricklet.setRGBValue(255, 0, 0);
};



giveMeAName(1, 2);