var data = 0;

document.getElementById("count").innerHTML = data;

function increment(){
    data = data + 1;
    document.getElementById("count").innerHTML = data;
}

function decrement(){

    if(data == 0){
        return false;
    }else{
        data = data - 1;
    }
    
    document.getElementById("count").innerHTML = data;
}