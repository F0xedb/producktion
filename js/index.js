function MainbtnClick(){
    if(GET["ref"] != null && (allowed.all || contains(allowed.people,GET["ref"]))){
        travelLoc(GET["ref"]);
    }else {
        if (Math.random() > 0.5) {
            travelbart();
        } else {
            travelivan()
        }
    }
}

function travelbart(){
    window.location.href='people.html?ref=proost.futurenet.xyz';
}

function travelivan() {
    window.location.href='people.html?ref=ivanow.fn.xyz';
}

function travelLoc(location){
    window.location.href='https://' + location;
}