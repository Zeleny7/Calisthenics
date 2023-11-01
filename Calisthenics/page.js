const columns = [{test:"column1"}, {test:"column2"}, {test:"column3"}, {test:"column4"}, {test:"column5"}, {test:"column6"}, {test:"column7"}, {test:"column8"}]; 

let text1 ='';

for (let x in columns) {

  let col = '<div class="column2" id=col><p>'+columns[x].test+'</p></div>';
  text1 += col;

}
  document.getElementById("flex-c2").innerHTML += text1;


