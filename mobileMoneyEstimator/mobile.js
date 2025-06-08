let amountTosend = prompt("unatuma Ngapi?(KES)")
    amountTosend = parseFloat(amountTosend)
    let transcationFee = 0.015 * amountTosend
    
     if (transcationFee <10)
        transcationFee = 10
    else if (transcationFee >70)
        transcationFee = 70

    let totalAmount = amountTosend + transcationFee
    
       console.log(`sending KES ${amountTosend}:`)
        console.log(`calculated Transaction Fee: KES ${transcationFee}`)
        console.log(`Total amount to be debited : KES ${totalAmount}`)
        console.log('\nsend money securely!')