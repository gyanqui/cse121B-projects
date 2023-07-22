let currentDateAndTime = Date()

console.log("It is now " + currentDateAndTime)

let theTotal = total(1,2,3,4,5,6,7,8,9,10)

console.log("The total is " + theTotal)

function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		sum += aNumber * 1//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
	}
	return sum
}



if (gab==="hermoso") {
	console.log("Gab es hermoso")
}

else{
	console.log("Gab siempre es hermoso")
}

console.log(gab === "hermoso" ? "Gab es hermoso" : "Gab siempre es hermoso");

// condición ? valor_si_verdadero : valor_si_falso