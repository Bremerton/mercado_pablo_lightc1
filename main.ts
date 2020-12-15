console.log("Light Level" + input.lightLevel())
while (true) {
    if (input.lightLevel() < 8) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() < 32) {
        light.clear()
    }
    
}
