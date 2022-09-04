

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
}
const showNewsCardFunction = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // displayNewsCatagory(data.data.news_category);
    console.log(id)
}
autoLoadCatagory();


const showNewsCardFunction2 = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // displayNewsCatagory(data.data.news_category);
    console.log(id)
};
showNewsCardFunction2(2);