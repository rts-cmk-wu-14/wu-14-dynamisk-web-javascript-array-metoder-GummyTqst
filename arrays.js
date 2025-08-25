document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 
    //opgave 1: Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle de tal som er større end 20.
    let num = numbersArray.filter((num) => num > 20)
    console.log(num);

    // Opgave 2
    // Tilføj katten "Sniffles" til catsArray.
    // Udskriv arrayet i konsollen.
    // console.log("Opgave 2", ...)
    catsArray.push('sniffles')
    console.log(catsArray);
    

    // Opgave 3a
    // Check om der i dogsArray er en hund som hedder "Trixie".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    // console.log("Opgave 3a", ...)
    let trixie = dogsArray.includes('Trixie')
    console.log(trixie);
   
    // Opgave 3b
    // Check om der i dogsArray er en hund som hedder "Baxter".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    // console.log("Opgave 3b", ...)
    let baxter = dogsArray.includes('Baxter')
    console.log(baxter);
    

    //Opgave 4a
    // Check om der i catsArray er en kat som hedder "Bagheera".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    // console.log("Opgave 4a", ...)
    let bagheera = catsArray.includes('Bagheera')
    console.log(bagheera ? 'Bagheera' : undefined)
    

    // Opgave 4b
    // Check om der i catsArray er en kat som hedder "Salem".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    // console.log("Opgave 4b", ...)
    let salem = catsArray.includes('Salem')
    console.log(salem ? 'Salem' : undefined)

    //     Opgave 5
    // Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
    // Udskriv det nye array i konsollen:
    // console.log("Opgave 5", ...)
    let numTimes3 = numbersArray.map((num) => num * 3)
    console.log(numTimes3);

    //     Opgave 6
    // Udskriv alle hundene i dogsArray i én lang streng.
    // (Sådan her: BarneyMollyBaxter...)
    // Udskriv strengen konsollen:
    // console.log("Opgave 6", ...)
   let dogString = dogsArray.join('')
   console.log(dogString);

    //     Opgave 7a
    // Find ud af hvilket index "Mango" har i fruitsArray.
    // Udskriv indexet i konsollen.
    let mango = fruitsArray.indexOf('Mango')
    console.log(mango);

    // Opgave 7b
    // Find ud af hvilket index "Blåbær" har i fruitsArray.
    // Udskriv indexet i konsollen.
    let blueberry = fruitsArray.indexOf('Blåbær')
    console.log(blueberry);
    

    // Opgave 8
    // Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling.
    // Den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen.
    // Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
    //  ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let polly = dogsArray.indexOf('Polly')
    if (polly > -1) {
        dogsArray.splice(polly, 1)
    }
    console.log(dogsArray);
    
}) // ends DOMContentLoaded

