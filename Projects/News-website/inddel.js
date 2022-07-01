console.log("This is my index file");

let newsAccordion = document.getElementById('newsAccordion');
// let source = 'business-insider';
const xhr = new XMLHttpRequest();

const apiKey = 'e92ad92547af468ca4b319a4e7d0e3db';

xhr.open('GET', `https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}`, true);

xhr.onload = function () {

    if (this.status === 200) {
        console.log(`this is representing` + this);
        let json = JSON.parse(this.responseText);
        console.log(json.articles);

        console.log("json :", json, typeof json);

        let articles = json.articles;       // json.articles is array of object

        let newsHtml = `<div class="container">
        <div class="row">`;

        articles.forEach((element, index) => {

            let news = `<div class = "col col-6 my-2" >
            <div class="card " id="headings${index}">
                <img src="${element['urlToImage']}" class="card-img-top" style="height:15rem; border-radius:0rem;" alt="..."> 
                <div class="card-body">
                    <h5 class="card-title" style="height:5rem;"> <b>Breaking News #${index + 1} :</b> ${element['title']}</h5>
                    <p class="card-text" style="height:3rem;">${element["content"]}</p>
                    <div class="pt-5">
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read More...</a>
                    </div>
                </div>
            </div>
            </div>`

            newsHtml += news;
        });

        newsAccordion.innerHTML = newsHtml + `</div> </div>`;
    }
    else {
        console.log("Some error occured!");
    }
}

xhr.send();

