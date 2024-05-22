let lys_aflæst = 0
let temperatur_nu = Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C)
let lys_nu = Environment.ReadLightIntensity(AnalogPin.P0)
temperatur_nu = Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C)
wappsto.configureName("\"Lysniveau\"")
wappsto.configureValue(1, "\"Lysniveau\"", WappstoValueTemplate.Light)
wappsto.configureValue(2, "MyValue", WappstoValueTemplate.Number)
basic.forever(function () {
    lys_aflæst = Environment.ReadLightIntensity(AnalogPin.P0)
    if (lys_aflæst != lys_nu) {
        lys_nu = lys_aflæst
    }
    wappsto.sendNumberToWappsto(lys_nu, 1, WappstoTransmit.ASAP)
    basic.pause(120000)
})
