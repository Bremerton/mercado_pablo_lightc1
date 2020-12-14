console.log("Light Level" + input.lightLevel())
while (true) {
    if (input.lightLevel() < 60) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() < 50) {
        light.setAll(light.rgb(255, 255, 0))
    } else if (input.lightLevel() > 40) {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
