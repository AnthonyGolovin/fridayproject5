//1. User can input value for their Earth birthday in the input field; X
//2. User can then from a drop down menu select a planet to convert their age to the selected planets age; X
//3. From there the user can click sumbit, and .click function will take in the users input via .val() method; X
//4. The planet age converter will be in the form of if/else statements apply math operators to the users age birthday based the selected planet;
// If the user selects the planet Mercury returns their age in Mercury years. (A Mercury year is .24 Earth years.) The following math would occur in the if/else statement: Todaysdate (via getFullYear()) - Date of birth * .24 = return;
// If the user selects the planet Venus returns their age in Venus years. (A Venus year is .62 Earth years.) The following math would occur in the if/else statement: Todaysdate (via getFullYear()) - Date of birth * .62 = return;
// If the user selects the planet Mars returns their age in Mars years. (A Mars year is 1.88 Earth years.)  The following math would occur in the if/else statement: Todaysdate (via getFullYear()) - Date of birth * 1.88 = return;
// If the user selects the planet Jupiter returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)  The following math would occur in the if/else statement: Todaysdate (via getFullYear()) - Date of birth * 11.86 = return;
//5. Once the age is calculated there will be a second aspect to the if/else statement that assumes everyones life expectancy is 80 years old.
//6. From there 80 would be multiplied in the function by the planets unique year (EX. 80 * .24 = 19.2) and it would take the product and subtract it from the users planet age. (EX. 49.6(lifeExpectancy) - 13.02(myPlanetAge)= specified planets life expectancy.)
//7. The results would be spitted back to the user in a <p> tag and then everyone is happy.

describe('GalacticCalculator', function() {

  it('should test whether a Triangle has three sides', function() {
    //Test content will go here.
  });
});
