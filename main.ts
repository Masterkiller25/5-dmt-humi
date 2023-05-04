input.onButtonPressed(Button.A, function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    basic.showString("" + (dht11_dht22.readData(dataType.humidity)))
})
dht11_dht22.selectTempType(tempType.celsius)
