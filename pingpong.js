

var num = prompt('Please choose a number');
function newNumber() {
for (var i = 1; i <= num; i = i + 1){

  if(( i % 3 === 0) && (i % 5 === 0 )) {
    document.write("<li><b>ping-pong</b></li>");
  }  else if (i % 3 === 0) {
            document.write("<li><b>ping</b></li>");
        }
        else if (i % 5 === 0) {
          document.write("<li><b>pong</b></li>");
        }
        else {
            document.write('<li><b>' +i + '</li></b>');
        }
    }


} newNumber();
