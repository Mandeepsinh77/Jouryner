console.log("This is search")

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toUpperCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        // let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let cartTitle = element.getElementsByTagName("h5")[0].innerHTML;
        if(cartTitle.includes(inputVal)){
            element.style.display = "block";
            console.log(cartTitle)
        }
        else{
            element.style.display = "none";
        }
        // console.log(cartTitle);
    })
})