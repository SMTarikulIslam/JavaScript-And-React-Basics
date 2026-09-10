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

