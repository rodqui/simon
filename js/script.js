
$(document).ready(function(){



    var start = true;
    var simonNumbers = [];
    var playerNumbers = [];

    


    if(start){

        var randomNum = Math.floor(Math.random()*4)+1;
    simonNumbers.push(randomNum);

   selectPiece(randomNum);

        $(".piece").click(function(){


           

            
            selectPieceAndCheck($(this).attr("class").split(' ')[1]);

            
            
            console.log(simonNumbers);
            console.log(playerNumbers);
        });
       /* var randomNum = Math.floor(Math.random()*4)+1;
        num.push(randomNum);

        var piece = prompt("numero: ");
        for(var i=0;i<num.length;i++){
            if(numplayer[i]==num[i]){

            }
        }*/
    }


    function selectPiece(randomNum){


        if("piece-"+randomNum==="piece-1"){
            setTimeout(function(){
                $(".piece-1").toggleClass("piece-1-press");
            },100);
            $(".piece-1").toggleClass("piece-1-press");
        }else if("piece-"+randomNum==="piece-2"){
            setTimeout(function(){
                $(".piece-2").toggleClass("piece-2-press");
            },100);
            $(".piece-2").toggleClass("piece-2-press");
        }else if("piece-"+randomNum==="piece-3"){
            setTimeout(function(){
                $(".piece-3").toggleClass("piece-3-press");
            },100);
            $(".piece-3").toggleClass("piece-3-press");
        }else if("piece-"+randomNum==="piece-4"){
            setTimeout(function(){
                $(".piece-4").toggleClass("piece-4-press");
            },100);
            $(".piece-4").toggleClass("piece-4-press");
        }
        
    }
    function selectPieceAndCheck(piece){

        if(piece==="piece-1"){
            playerNumbers.push(1);
        }else if(piece==="piece-2"){
            playerNumbers.push(2);
        }else if(piece==="piece-3"){
            playerNumbers.push(3);
        }else if(piece==="piece-4"){
            playerNumbers.push(4);
        }


        for(var i=0;i<simonNumbers.length;i++){
            if(simonNumbers[i]!==playerNumbers[i]){
                start = false;
            }
        }
    }

});