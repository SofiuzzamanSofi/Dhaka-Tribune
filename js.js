

const autoLoadCatagory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data);
    displayNewsCatagory(data.data.news_category);
};

const displayNewsCatagory = (newss) => {
    console.log(newss);
    const newsCatagory = document.getElementById('news-catagory');
    newss.forEach(news => {
        // console.log(news.category_name);
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="showNewsCardFunction(${news.category_id})"> ${news.category_name}</div>
        `;
        newsCatagory.appendChild(div)
    })
};

const showNewsCardFunction = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayShowNewsCardFunction(data.data);
};

const displayShowNewsCardFunction = (datas) => {

    const cardShowContainer = document.getElementById('card-show-container');
    cardShowContainer.textContent = '';
    datas.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="row g-0 border m-1">
                        <div class="col-md-4">
                            <img src="${data.image_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
        `;
        cardShowContainer.appendChild(div)
    })
    // console.log(datas);
};

autoLoadCatagory();