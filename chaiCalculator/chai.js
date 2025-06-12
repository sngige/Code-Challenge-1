 //prompt user to enter distance in km
let numberOfCups =prompt("karibu! How many cups would you like to make?")
// Convert the string input to an integer
numberOfCups = parseInt(numberOfCups)
//ingredients needed
    let waterPerCup = 200 //200ml water per cup
    let milkPerCup = 50; //50 ml milk per cup
    let teaLeavesPerCup = 1; //1 tablespoon of tea leaves per cup
    let sugarPerCup = 2;  // 2 teaspoons of sugar per cup

//Calculate total quantities needed based on number of cups
    let totalWater = waterPerCup * numberOfCups  // Total water required
    let totalMilk = milkPerCup * numberOfCups  // Total milk required
    let totalTeaLeaves = teaLeavesPerCup * numberOfCups // Total tea leaves required
    let totalSugar = sugarPerCup * numberOfCups // Total sugar required
    // Display to the user
      console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`)
    console.log(`Water: ${totalWater} ml`)
    console.log(`Milk: ${totalMilk} ml`)
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`)
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`)
    console.log("\nEnjoy your Chai Bora!")
