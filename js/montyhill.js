var selected = false;
var selectedBox;
var randomInteger = getRandomInt(1, 3);
var wrongAnsw = [];

if(randomInteger==1){
    wrongAnsw=[2,3];
} else if(randomInteger==2){
    wrongAnsw=[1,3];
} else
    wrongAnsw=[1,2];

$("img").click(select);
$(ContButton).click(c1);
$(SwButton).click(Sw1);
$(StButton).click(St1);
$(ResButton).click(refresh);

function select(){
    if (selected){
        console.log("ape");
    } else{
        $(this).addClass("selected1");
        selected = true;
        selectedBox = $(this).attr("id");
        console.log("selected box is " + selectedBox);
    }
}

function c1(){
    if(selected){
        //changing buttons
        $(ContButton).addClass("hide");
        $(SwButton).addClass("show");
        $(StButton).addClass("show");
        
        //$("#car" + randomInteger).removeClass("hide");
        //$("#car" + randomInteger).addClass("show");
        if(randomInteger!=selectedBox){
            console.log("else called");
            var showThisOne = displayWrongChoice();
            
            //showing goat and open door
            $('#g' + showThisOne).removeClass("hide");
            $('#g' + showThisOne).addClass("show");
            $('#d' + showThisOne).removeClass("hide");
            $('#d' + showThisOne).addClass("show");
            //hiding close door
            $('#' + showThisOne).addClass("hide");
        }
        
        else if(randomInteger==selectedBox){
            var r1 = getRandomIndex(wrongAnsw);
            console.log("r1 is " + r1);
            var r2 = wrongAnsw[r1];
            console.log("r2 is " + r2);
            wrongAnsw.splice(r1,1);
            console.log(wrongAnsw);
            //showing goat and open door
            $('#g' + r2).removeClass("hide");
            $('#g' + r2).addClass("show");
            $('#d' + r2).removeClass("hide");
            $('#d' + r2).addClass("show");
            //hiding close door
            $('#' + r2).addClass("hide");
        }
    }
}

function Sw1(){
    if(selectedBox==wrongAnsw[0]){
        var x = randomInteger;
        $('#car' + x).removeClass("hide");
        $('#car' + x).addClass("show");
        $('#d' + x).removeClass("hide");
        $('#d' + x).addClass("show");
        
        $('#' + randomInteger).addClass("hide");
        
        $("#prompt").text("Congradulations! You Win!");
        
        $(SwButton).removeClass("show");
        $(StButton).removeClass("show");
        $(SwButton).addClass("hide");
        $(StButton).addClass("hide");
        $(ResButton).removeClass("hide");
        $(ResButton).addClass("show");
    }
    
    else{
        var y = wrongAnsw[0];
        $('#g' + y).removeClass("hide");
        $('#g' + y).addClass("show");
        $('#d' + y).removeClass("hide");
        $('#d' + y).addClass("show");
        
        $('#' + y).addClass("hide");
        
        $("#prompt").text("Sorry! You Lose!");
        
        $(SwButton).removeClass("show");
        $(StButton).removeClass("show");
        $(SwButton).addClass("hide");
        $(StButton).addClass("hide");
        $(ResButton).removeClass("hide");
        $(ResButton).addClass("show");
    }
}

function St1(){
    if(selectedBox!=wrongAnsw[0]){
        var x = randomInteger;
        $('#car' + x).removeClass("hide");
        $('#car' + x).addClass("show");
        $('#d' + x).removeClass("hide");
        $('#d' + x).addClass("show");
        
        $('#' + randomInteger).addClass("hide");
        
        $("#prompt").text("Congradulations! You Win!");
        
        $(SwButton).removeClass("show");
        $(StButton).removeClass("show");
        $(SwButton).addClass("hide");
        $(StButton).addClass("hide");
        $(ResButton).removeClass("hide");
        $(ResButton).addClass("show");
    }
    
    else{
        var y = wrongAnsw[0];
        $('#g' + y).removeClass("hide");
        $('#g' + y).addClass("show");
        $('#d' + y).removeClass("hide");
        $('#d' + y).addClass("show");
        
        $('#' + y).addClass("hide");
        
        $("#prompt").text("Sorry! You Lose!");
        
        $(SwButton).removeClass("show");
        $(StButton).removeClass("show");
        $(SwButton).addClass("hide");
        $(StButton).addClass("hide");
        $(ResButton).removeClass("hide");
        $(ResButton).addClass("show");
    }
}

function refresh(){
    location.reload();
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function displayWrongChoice(){
    if(randomInteger==1 && selectedBox==2) {
        wrongAnsw.splice(1,1);
        return 3; 
    } else if(randomInteger==1 && selectedBox==3){
        wrongAnsw.splice(0,1);
        return 2;
    } else if(randomInteger==2 && selectedBox==3){
        wrongAnsw.splice(0,1);
        return 1;
    } else if(randomInteger==2 && selectedBox==1){
        wrongAnsw.splice(1,1);
        return 3;
    } else if(randomInteger==3 && selectedBox==2){
        wrongAnsw.splice(0,1);
        return 1;
    } else
        wrongAnsw.splice(1,1);
        console.log("splice city")
        return 2;
}