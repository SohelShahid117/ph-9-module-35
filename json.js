let res = fetch(`https://jsonplaceholder.typicode.com/posts/1`);
// let data = res.json();
let data = res.json;
console.log(data);
console.log(`-------------------------------`)

fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  console.log(`-------------------------------`)
  const loadPhone = async () => {
    // const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    // const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTexttt}`);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    const data = await res.json();
    console.log(data);
  }
loadPhone();