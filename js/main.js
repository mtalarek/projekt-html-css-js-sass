document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function() {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function() {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

const send = (appointment) => {
    
    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(resJSON => {
        console.log(resJSON);
    });
}


let formula = document.getElementById('formula');
let error = document.getElementById('error');
let suma = 0;

formula.addEventListener("submit", function(e) {
    e.preventDefault();
    
    

    let namee = formula[0].value;
    let emaill = formula[1].value;
    let checkk = formula[2].value;
    let phonee = formula[3].value;
    let dataa = formula[4].value;
    let hourr = formula[5].value;
    let notess = formula[6].value;

    



    let appointment = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('check').value,
        phone: document.getElementById('phone').value,
        data: document.getElementById('data').value,
        hour: document.getElementById('time').value,
        notes: document.getElementById('notes').value,
    }


    if (namee.trim() == "") {
        error.classList.add("error");
        formula[0].classList.add("border");
        
    }
    else {
        error.classList.remove("error");
        formula[0].classList.remove("border");
        
    }


    if (emaill.trim() == "") {
        error.classList.add("error");
        formula[1].classList.add("border"); 
        
    } 
    else {
        error.classList.remove("error");
        formula[1].classList.remove("border");
    }


    if (checkk !== 'select') {
        error.classList.remove("error");
        formula[2].classList.remove("border");
        
    }
    else {
        error.classList.add("error");
        formula[2].classList.add("border");
    }


    if (phonee.trim() == "") {
        error.classList.add("error");
        formula[3].classList.add("border"); 
        
    } 
    else {
        error.classList.remove("error");
        formula[3].classList.remove("border");
    }


    if (dataa.trim() == "") {
        error.classList.add("error");
        formula[4].classList.add("border"); 
        
    } 
    else {
        error.classList.remove("error");
        formula[4].classList.remove("border");
    }


    if (hourr.trim() == "") {
        error.classList.add("error");
        formula[5].classList.add("border"); 
        
    } 
    else {
        error.classList.remove("error");
        formula[5].classList.remove("border");
    }


    if (notess.trim() == "") {
        error.classList.add("error");
        formula[6].classList.add("border");
        
    } 
    else {
        error.classList.remove("error");
        formula[6].classList.remove("border");
    }

    console.log(name);
    console.log(email);
    console.log(check);
    console.log(phone);
    console.log(data);
    console.log(hour);
    console.log(notes);

    if(error.classList[0]!="error") { 
        send(appointment);
        
    }

});