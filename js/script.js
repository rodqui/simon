
$(document).ready(function(){



    var start = false;
    var simonSequence = [];
    
    var randomNum; 
    var contPlayer = 0;
    let canClick = false;
    let audio = document.getElementById("sound1");
    

    if(start){

        
        selectPiece(randomPiece());

    }
    
 
    
    simonSequence.push(randomPiece());
 

    /*we do a copy from simonSequence*/
    let secondSimonSequence = [...simonSequence];

    $(".piece").click(function(){

        if(!canClick) return;


        var pieceNumber = $(this).attr("class").split(' ')[1].substring(7,6);
        //insertPiece(pieceNumber);
        
        //pushPlayer();
        /*setTimeout(function(){
            showOldPiecesAndNews();
        },2000);*/

       const expectedPanel = secondSimonSequence.shift();
       console.log("mirando second: "+secondSimonSequence);
       if(expectedPanel == pieceNumber){
            if(secondSimonSequence == 0){
                
                
                
                simonSequence.push(randomPiece()); //next round
                secondSimonSequence = [...simonSequence];
                
              
                startSimonSequenceFlash();
         
            }


       }else{
            alert("game over");
       }
        console.log(pieceNumber);
        audio.play();
    
    });

    
    function randomPiece(){
        randomNum = Math.floor(Math.random()*4)+1;
        //simonSequence.push(randomNum);

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
                    randomPiece();
                    contPlayer++;
                }
            }
            
    
        }
       
     
        
    }

    

    async function startSimonSequenceFlash(){
        canClick = false;
        for(var i=0;i<simonSequence.length;i++){
            console.log("tamaño araay"+ i+" hay"+simonSequence[i]);
            selectPiece(simonSequence[i]);
           
            
            await sleep(500);
            
            
        }
        canClick = true; //When all panels are flashed, player can click panel
        
    }

    async function showOldPiecesAndNews(){

                  startSimonSequenceFlash();
                  

    }


    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms))
    }


    

   
    startSimonSequenceFlash();

    console.log(simonSequence);
    console.log(secondSimonSequence);

});


/*

for(var i=0;i<simonNumbers.length;i++){
    if(simonNumbers[i]==playerNumbers[i]){
        start = true;
        console.log(simonNumbers[i]+" - "+playerNumbers[i]);
        
        selectPiece(simonNumbers[i]);
    }
}
*/