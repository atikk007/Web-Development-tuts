console.log("This is tutorial 38");

let fetchClick = document.getElementById('fetchapi');

fetchClick.addEventListener('click', loadapi);

function loadapi() {
    console.log("Buttton clicked");

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'word-api.json', true);

    /* 
    Tried using arrow function here and got confused. it doesn't work because -

    Arrow functions are not designed to be used in every situation merely as a shorter version of old-fashioned functions. They are not intended to replace function syntax using the function keyword. The most common use case for arrow functions is as short "lambdas" which do not redefine this, often used when passing a function as a callback to some function.

    Arrow functions cannot be used to write object methods because, as you have found, since arrow functions close over the this of the lexically enclosing context, the this within the arrow is the one that was current where you defined the object.
    xhr.onload = () => {
        console.log(this);
        if (this.status == 200) {

            var myObj = JSON.parse(this.responseText);
            console.log(myObj.results + " or " + myObj['results'] + " both are same just diff syntax");

            let wordul = document.getElementById('word-ul');

            html = "";
            // results.array.forEach(element => {

            // });
            html += `<li>.definiton}</li>`
        }
    }; */



    xhr.onload = function () {

        if (this.status == 200) {

            var myObj = JSON.parse(this.responseText);

            /*   console.log(myObj.results);
                 console.log(myObj['results']);  

         Both are same just different way of writing */


            let results = myObj['results'];
            html = "";

            results.forEach(element => {

                html += `<li>One of the definition of example is ${element.definition}</li>`
            });
        }


        let wordul = document.getElementById('word-ul');

        wordul.innerHTML = html;



    }



    xhr.send();
}

