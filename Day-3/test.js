let movies = [
    {title: "Inception", year: 1010, rating: 8.8, genre: "Sci-Fi"},
    {title: "Titanic", year: 1997, rating: 7.9, genre: "Romance"}, 
    {title: "The matrix", year: 1999, rating: 8.7, genre:"Sci-Fi"},
    {title: "Avatar", year: 2009, rating: 7.8, genre:"Sci-Fi"},
    {title: "Notebook", year: 2004, rating: 7.8, genre:"Romance"},
];

//only Sci-Fi movie, Need to sort in a way like ascending to descending;
let topSciFi = movies?.filter((m)=>m.genre === "Sci-Fi")?.sort((a,b)=>b.rating -a.rating)?.map((m)=>`${m.title}, rating:(${m.rating})`);
console.log(topSciFi);

//task 

/*
let products = [
    {id: 1, title: "Mouse", price: 500, category: "Accessories", instock: true},
    {id: 2, title: "Kayboard", price: 1200, category: "Accessories", instock: false},
    {id: 3, title: "Monitor", price: 8000, category: "Accessories", instock: true},
    {id: 4, title: "Laptop", price: 55000, category: "Accessories", instock: true},
    {id: 5, title: "Headphone", price: 1500, category: "Accessories", instock: true},
];

// Only In-Stock product, According to the price lower to higher sorted, Title + price need to find out 
// Need to find out the total how much money if we want do the stock out.
*/


