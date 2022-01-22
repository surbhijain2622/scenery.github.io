//detecting button press
for(var i=0;i<document.querySelectorAll('.imag').length;i++){
  document.querySelectorAll(".imag")[i].addEventListener("click",handleClick);

  function handleClick(){
    // this.style.color="white";
    var identity=this.innerHTML;

    makesound(identity);
    animation(identity);



  }
}
function makesound(key){
  switch (key) {
    case 'sparrow':
    var audio=new Audio('sounds/sparrow.mp3');
    audio.play();
      break;
      case 'robin':
      var audio=new Audio('sounds/robin.mp3');
      audio.play();
        break;
        case 'tortoise':
        var audio=new Audio('sounds/tortoise.mp3');
        audio.play();
          break;
          case 'lion':
          var audio=new Audio('sounds/lion.mp3');
          audio.play();
            break;
            case 'finch':
            var audio=new Audio('sounds/finch.mp3');
            audio.play();
              break;
              case 'dove':
              var audio=new Audio('sounds/dove.mp3');
              audio.play();
                break;
                case 'rabbit':
                var audio=new Audio('sounds/rabbit.mp3');
                audio.play();
                  break;
                  case 'snake':
                  var audio=new Audio('sounds/snake.mp3');
                  audio.play();
                    break;
                    case 'swan':
                    var audio=new Audio('sounds/swan.mp3');
                    audio.play();
                      break;
                      case 'magpie':
                      var audio=new Audio('sounds/magpie.mp3');
                      audio.play();
                        break;
                        case 'bird':
                        var audio=new Audio('sounds/bird.mp3');
                        audio.play();
                          break;

    default:

  }
}
//detecting keyboard press
//event ki bajaye you can use any keyword
document.addEventListener("keydown",function(event){makesound(event.key); animation(event.key);});


function animation(currkey){
  var activeelement=document.querySelector("."+currkey);
  activeelement.classList.add("pressed");

  // to remove the effect
  setTimeout(function(){activeelement.classList.remove("pressed");}, 500);
}
