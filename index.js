function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function logsayHiToHeadPhonedRoomate(string){
    var toUpperCase = "YES INDEED";
    var toLowerCase = "I can't hear you";
    var letsHaveDinnerTogether = "I would love to";
    if (string.toUpperCase(string) === string){
        return toUpperCase;
    }
else if(string.toLowerCase(string) === toLowerCase){
    return toLowerCase;
}
else if("Let's have dinner together!" === string){
    return letsHaveDinnerTogether;
}
}