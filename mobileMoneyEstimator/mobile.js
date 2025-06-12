    // Prompt user to enter amount to send in Kenyan Shillings (KES)
let amountTosend = prompt("unatuma Ngapi?(KES)")
//input string(unatuma ngapi?) to a number 
    amountTosend = parseFloat(amountTosend)
// Calculate transaction fee as 1.5% of the amount to send
    let transcationFee = 0.015 * amountTosend
// Apply minimum and maximum fee limits
     if (transcationFee <10)
        transcationFee = 10
    else if (transcationFee >70)
        transcationFee = 70
    // Calculate total amount (amount + fee)
    let totalAmount = amountTosend + transcationFee
    // Display transaction details
       console.log(`sending KES ${amountTosend}:`)
        console.log(`calculated Transaction Fee: KES ${transcationFee}`)
        console.log(`Total amount to be debited : KES ${totalAmount}`)
        console.log('\nsend money securely!')