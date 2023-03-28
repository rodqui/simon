
$(document).ready(function(){



    var start = true;
    var simonSequence = [];
    
    var randomNum; 
    var contPlayer = 0;


    if(start){

        
        selectPiece(pushPlayer());

    }

    $(".piece").click(function(){

        var pieceNumber = $(this).attr("class").split(' ')[1].substring(7,6);
        insertPiece(pieceNumber);
        console.log(pieceNumber);
        pushPlayer();
        setTimeout(function(){
            showOldPiecesAndNews();
        },2000);

        
        
        
    });


    function pushPlayer(){
        randomNum = Math.floor(Math.random()*4)+1;
        simonSequence.push(randomNum);

        return randomNum;
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


    function insertPiece(piece){

        
        for(var i=0;i<simonSequence.length;i++){


            if(contPlayer<=simonSequence.length){
                if(piece==simonSequence[i]){
                    pushPlayer();
                    contPlayer++;
                }
            }
            
    
        }
       
     
        
    }

    function compareSequencePlayerVsCPU(){

    }

    async function showOldPiecesAndNews(){

                    for(var i=0;i<simonSequence.length;i++){
                        console.log(simonSequence);
                        selectPiece(simonSequence[i]);
                        await sleep(500);
                   
                    }

    }


    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms))
    }


});


/*for(var i=0;i<simonNumbers.length;i++){
    if(simonNumbers[i]==playerNumbers[i]){
        start = true;
        console.log(simonNumbers[i]+" - "+playerNumbers[i]);
        
        selectPiece(simonNumbers[i]);
    }
}*/