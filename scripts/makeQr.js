function createQr() {
    document.getElementById("qrCodeImg").src =""
    let sentence = document.getElementById("t_message").value;

    if (sentence.length == 0) {
        window.alert("文字を入力しないと作成できません！");
        return true;
    }
    

    let num; 
    switch (document.getElementById("selectS").selectedIndex) {
        case 0:
        default:   
            num = 100;
            break;
        case 1:
            num = 200;
            break;
        case 2:
            num = 300;
            break;
        case 3:
            num = 400;
            break;
        case 4:
            num = 500;
            break;
    }

    let selectColor 
    switch (document.getElementById("selectC").selectedIndex) {
        case 0:
            selectColor = "0-0-0";
            break;
        case 1:
            selectColor = "0-0-255";
            break;
        case 2:
            selectColor = "255-0-0";
            break;
        case 3:
            selectColor = "0-255-0";
            break;
    }
    
     
    let downloadLink = "http://api.qrserver.com/v1/create-qr-code/?data=" + sentence + "&color=" + selectColor + "&size=" + num + "x" + num;
    document.getElementById("qrCodeImg").src = downloadLink;
    document.getElementById("png").href = downloadLink + "&format=png";
    document.getElementById("png").innerHTML = "png";
    document.getElementById("jpg").href = downloadLink + "&format=jpg";
    document.getElementById("jpg").innerHTML = "jpg";
    document.getElementById("svg").href = downloadLink + "&format=svg";
    document.getElementById("svg").innerHTML = "svg";
    
    console.log("http://api.qrserver.com/v1/create-qr-code/?data=" + sentence + "&color=" + selectColor +"&size=" + num + "x" + num);
}

function clearContents() {
    document.getElementById("t_message").value = "";
    document.getElementById("qrCodeImg").src = ""
    document.getElementById("selectS").selectedIndex = "0";
    document.getElementById("selectC").selectedIndex = "0";

    document.getElementById("png").href = ""
    document.getElementById("png").innerHTML = "";
    document.getElementById("jpg").href = "";
    document.getElementById("jpg").innerHTML = "";
    document.getElementById("svg").href = "";
    document.getElementById("svg").innerHTML = "";

}