// Write your JavaScript code here
var planets=[ 
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
 ];
 
 
 //var resultLocation = ;
 var planetOptions = document.getElementById('planets');
 var fragment = document.createDocumentFragment();
 var result;
 
 planets.forEach(
    function(planet,index){        
        var opt =document.createElement('option');
        opt.innerHTML = planet[0];
       // opt.value = planet[0];
        fragment.appendChild(opt);   
        planetOptions.appendChild(fragment);                
 });
    
 function handleClickEvent(){
    
    var planetGravity = planets[planetOptions.selectedIndex][1];
    var userWeight = document.getElementById('user-weight').value;
    var planetName = planetOptions.value;
    result = planetGravity*userWeight;
    document.getElementById('output').innerHTML = 'If you were on '+planetName+', you would weigh '+result+'lbs!' ;
 
 }
 
 var buttonClick = document.getElementById('calculate-button');
 buttonClick.addEventListener('click',function(){
    handleClickEvent();
 });
 
