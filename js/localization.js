//var test = document.documentElement.lang;
var test = navigator.language.split("-")[0];
var content = "";


function init() {
    loadJSON(function(response) {
            // Parse JSON string into object
            content = JSON.parse(response);
        });
        setTimeout(function(){
            if(content!="") {
                setHTMLLang();
            }else{
                setDefault();
            }
        },data.delta);

}

function setDefault(){
    loadDefaultJSON(function(response) {
        // Parse JSON string into object
        content = JSON.parse(response);
    });
    setTimeout(function(){
            setHTMLLang();
    },data.delta);
}

function Lookup(string){
    for (var key in content) {
        if(key.toLowerCase() == string.toLowerCase()) {
            return content[key];
        }
    }
    return "error";
}


function setHTMLLang(){
    var langAttrib = getAllTagsWithAttribute(data.attribute);
    for (var i = 0; i < langAttrib.length; i++){
        var look = langAttrib[i].getAttribute(data.attribute);
        langAttrib[i].innerHTML = Lookup(look)
    }
    travelpdf();
}

function getAllTags(){
    return document.body.getElementsByTagName("*");;
}

function getAllTagsWithAttribute(attrib){
    var filtered = new Array();
    var tags = getAllTags();
    for (var i =0; i< tags.length; i++){
        var sol = tags[i].getAttribute(attrib);
        if(sol !== null){
            filtered.push(tags[i]);
        }
    }
    return filtered;
}


function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET',  test +'.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function loadDefaultJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', data.default, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


init();