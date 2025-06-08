let numberOfCups =prompt("karibu! How many cups would you like to make?")
numberOfCups = parseInt(numberOfCups)

    let waterPerCup = 200
    let milkPerCup = 50;
    let teaLeavesPerCup = 1; 
    let sugarPerCup = 2;

    let totalWater = waterPerCup * numberOfCups
    let totalMilk = milkPerCup * numberOfCups
    let totalTeaLeaves = teaLeavesPerCup * numberOfCups
    let totalSugar = sugarPerCup * numberOfCups
    
      console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`)
    console.log(`Water: ${totalWater} ml`)
    console.log(`Milk: ${totalMilk} ml`)
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`)
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`)
    console.log("\nEnjoy your Chai Bora!")
