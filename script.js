
function checkLovePercentage(){
    var loveData = Math.floor(Math.random()*100)+1;
    var name = document.getElementById('name');
    var lName= document.getElementById('loveName');
    if(name.value==""){
        alert("Please enter your name")
    }
    else if(lName.value==""){
        alert("Please enter your love name")
    }
    else if(name.value.length<3){
        alert("Name length should greater than 3")
    }
    else if(lname.value.length<3){
        alert("Love Name length should greater than 3")
    }
    else{
        document.getElementById('loveValue').value=loveData+"%";
    }

}