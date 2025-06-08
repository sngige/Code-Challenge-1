 let distanceInKm = prompt("unafika wapi mkubwa? kilometer ngapi?")
    distanceInKm = parseFloat(distanceInKm)
    let basefare = 50
    let chargeperkm = 15
    let totalfare = basefare + (distanceInKm*chargeperkm)
     console.log(`uko kwote? Io ni ${distanceInKm} KM :`)
     console.log(`ukikalia pikipiki:KES ${basefare}`)
     console.log(`mpaka uko:KES ${distanceInKm*chargeperkm}`)
     console.log(`Total:KES ${totalfare}KSH`)