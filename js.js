
// first function before catagory 
const autoLoadCatagory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCatagory(data.data.news_category);
};

// displayNewsCatagory d-flex function 
const displayNewsCatagory = (newss) => {
    console.log(newss);
    const newsCatagory = document.getElementById('news-catagory');
    newss.forEach(news => {
        // console.log(news.category_name);
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="showNewsCardFunction(${news.category_id})" class="py-2"> ${news.category_name}</div>
        `;
        newsCatagory.appendChild(div)
    })
};

// card function 
const showNewsCardFunction = async (id) => {

    // spinner start 
    spinnerFunction(true);

    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayShowNewsCardFunction(data.data);
};

// card function inner div append
const displayShowNewsCardFunction = (datas) => {
    console.log(datas);

    // if no data in catagory alert no data 
    if (datas.length === 0) {
        // spinner end 
        spinnerFunction(false);
        alert('Sorry no news found, Pls try others catagory.')
        return;
    }
    else {

    }

    const cardShowContainer = document.getElementById('card-show-container');
    cardShowContainer.textContent = '';
    datas.forEach(data => {
        const dataId = (data._id);
        const div = document.createElement('div');
        div.innerHTML = `
                    <div onclick="modalOpenfunction('${dataId}')" class="row g-0 border m-1 p-1" >
                        <div class="col-md-4" data-bs-toggle="modal" data-bs-target="#newsModal">
                            <img  src="${data.image_url}" class="img-fluid rounded" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body" >
                                <h5 class="card-title" data-bs-toggle="modal" data-bs-target="#newsModal">${data.title} </h5>
                                <p class="card-text text-truncate">${data.details}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                <div>
                                    <div class="d-flex align-items-center justify-content-between gap-4">
                                        <div class="d-flex align-items-center justify-content-between gap-2">
                                            <div class="">
                                                <img style=" height: 44px"
                                                    class="img-fluid   rounded-circle border border-danger border-3 text-end"
                                                    src="${data.author.img}" alt="">
                                            </div>
                                            <div class="">
                                                <div class=" m-0 p-0"><small id="author">${data.author.name}</small></div>
                                                <div class=" m-0 p-0"><small id="public-date">${data.author.published_date}</small></div>
                                            </div>
                                        </div>

                                        <div class=" ">
                                            <i class="fa-regular fa-eye"></i> <span id=" viesw"> </span> ${data.total_view / 10} <span> M
                                            </span>
                                        </div>
                                        <div class=" ">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-regular fa-star-half-stroke"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                        </div>
                                        <div><i class="fa-solid fa-arrow-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     `;
        cardShowContainer.appendChild(div)
    })

    // spinner end 
    spinnerFunction(false);
};

// spinner function 
const spinnerFunction = isLoading => {
    const spinnerDiv = document.getElementById('spinner');
    if (isLoading) {
        spinnerDiv.classList.remove('d-none')
    }
    else {
        spinnerDiv.classList.add('d-none')
    }
}

// modal function fetch 
const modalOpenfunction = async (bigId) => {
    const url = `https://openapi.programming-hero.com/api/news/${bigId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMOdal(data.data[0]);
}

// modal function fetch  er por display kora
const displayMOdal = (modals) => {

    console.log(modals);

    const modalTitle = document.getElementById('newsModalLabel');
    modalTitle.innerText = modals.title;
    const modalParagraph = document.getElementById('news-bodyy');
    modalParagraph.innerHTML = `
    <div class="m-2 p-2">
    <p class="text-justify">${modals.details}</p>
    </div>
    
    `;
}

autoLoadCatagory();
showNewsCardFunction(8);