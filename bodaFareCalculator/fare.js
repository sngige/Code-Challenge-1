 //prompt user to enter distance in km
 let distanceInKm = prompt("unafika wapi mkubwa? kilometer ngapi?")
//input string(unafika wapi mkubwa?) to a number 
 distanceInKm = parseFloat(distanceInKm)
    let basefare = 50 // basefare in kes
    let chargeperkm = 15 //cost per km
    //calculate total fare
    let totalfare = basefare + (distanceInKm*chargeperkm)
    //show entered distance
     console.log(`uko kwote? Io ni ${distanceInKm} KM :`)
     //show base fare
     console.log(`ukikalia pikipiki:KES ${basefare}`)
     //show distance and the charge
     console.log(`mpaka uko:KES ${distanceInKm*chargeperkm}`)
      //show total fare
     console.log(`Total:KES ${totalfare}KSH`)