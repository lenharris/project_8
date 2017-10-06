var friends = ['Marbury', 'Rob', 'Bro', 'Dej', 'B3'];
var cities  = ['ATL', 'LA', 'MIA', 'Houston', 'CHI', 'NY', 'Rio De Janeiro','Bogota','Paris','Tokyo'];
var weapons = ['axe', 'saw', 'hurricane', 'gun', 'jack knife',
               'hammer', 'bomb', 'screwdriver', 'panty hose', 'waterhose',
               'zip tie', 'shovel', 'scalpel', 'grenade', 'rocket',
               'sword', 'sniper rifle', 'revolvers', 'torpedoes', 'nuke'
              ],
accuseCount = 0;


// document.addEventListener('DOMContentLoaded', function() {
                     
//                       document.createElement('h3');
    
//                       document.body.append('h3');

//                       document.createElementById
    
//                     //   accuse.addEventListener('click', function() {})
                        
//                         for (i = 0; i < 101; i++) {
//                             accuse.id = accuseCount++;
//                             var accuse = innerText('Accusation' + accuse.id)
//                             document.body.append(accuse);
//                           }
                      
// });
                  

            
    
             
$(document).ready(function() { 
      for (i = 0; i<101 ; i++) {
          accuseCount++;
          
          var header = $(`<h3 id='${accuseCount}'> Accusations ${accuseCount} </h3>`).appendTo('body');

          var array  = {
              myPeeps: friends[Math.floor((Math.random() * friends.length) + 0)],
              myPlace: cities[Math.floor((Math.random() * cities.length) + 0)],
              decisions: weapons[Math.floor((Math.random() * weapons.length) + 0)]
          }
        header.click(whoDidIt.bind(array));
      }
});


function whoDidIt() {
    alert(`I accuse ${this.myPeeps}, with the ${this.decisions} in the ${this.myPlace}.`)
}


// function header() {
//     var accuse = 'Accusations';
//     var i,
//     text;

//     for (i = 0; i < 101; i++) {
//      text = accuse[i];
//     }

// }

// for (var i = 0; i<friends.length; i++) {
//     for (var j = 0; j < cities.length; j++) { 
//         for (var k = 0; k < weapons.length; k++) {
//             console.log('I accuse '+ friends[i]+ ', with the ' + weapons[k] + ' in the '+ cities[j])
//         }
//     }
    
// }
