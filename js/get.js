var GET = {};
if(document.location.toString().indexOf('?') !== -1) {
    var query = document.location
        .toString()
        .replace(/^.*?\?/, '')
        .replace(/#.*$/, '')
        .split('&');

    for(var i=0, l=query.length; i<l; i++) {
        var aux = decodeURIComponent(query[i]).split('=');
        GET[aux[0]] = aux[1];
    }
}

function contains(array,string){
    for(var i=0; i < array.length; i++){
        if(array[i]==string){
            return true;
        }
    }
    return false;
}

function GetIndex(array,string){
    for(var i=0; i < array.length; i++){
        if(array[i]==string){
            return i;
        }
    }
    return -1;
}

var fill= document.getElementById("person");
if(allowed.all || contains(allowed.people,GET["ref"])) {
    fill.innerHTML = "Join " + allowed.text[GetIndex(allowed.people,GET["ref"])];
    fill.href = "http://" + GET["ref"];
} else{
    fill.innerHTML = "Join Bart";
    fill.href = "http://proost.futurenet.xyz";
}