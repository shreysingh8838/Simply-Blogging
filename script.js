function openalert(){
    var isEighteen = window.confirm("Click Ok If Over 18");
    if (isEighteen) { // if they clicked "ok"
        window.open('post.html');
    } else { // if they clicked "cancel"
        window.alert("Sorry not eligible");
    }
}