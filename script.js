/* .js files add interaction to your website */
var factsList = [ /*array, also similar to python lists*/
  "The ocean absorbs most of the heat we produce",/*index position 0*/
  "C02 is at its highest levels in 2 million years",/*index position 1*/
  "The Earth loses 1.2 trillion tons of ice each year",/*index position 2*/
  "The last decade was the hottest in 125,000 years",/*index position 3*/
  "Global warming is partially reversible"/*index position 4*/
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0; /*initialize starting values for variable*/

myButton.addEventListener("click",displayFact);
function displayFact(){
  fact.innerHTML = factsList[count];
  count++;
  if (count == factsList.length){
    count = 0;
  }
    
}
