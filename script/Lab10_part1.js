function changeColor() {
    var radioChecked = document.querySelector('input[name="color"]:checked').value;

    if (radioChecked == 'red') {
        console.log(radioChecked)
        document.getElementById("td_text").style.color = "red";
    }

    else if (radioChecked == 'blue') {
        document.getElementById("td_text").style.color = "blue";
    }

    else if (radioChecked == 'green') {
        document.getElementById("td_text").style.color = "green";
    }

}

function changeBg() {
    var listSelected = document.getElementById("colorsel").value;

    if (listSelected == 'red') {
        document.getElementById("td_text").style.backgroundColor = "red";
    }

    else if (listSelected == 'blue') {
        document.getElementById("td_text").style.backgroundColor = "blue";
    }

    else if (listSelected == 'green') {
        document.getElementById("td_text").style.backgroundColor = "green";
    }

    else {
        document.getElementById("td_text").style.backgroundColor = "white";
    }
}
