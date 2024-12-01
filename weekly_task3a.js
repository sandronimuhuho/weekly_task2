
async function fetchApi() {
const URL = " https://jsonplaceholder.typicode.com/users";

fetch(URL) 
 .then((Response) => {
    if (!Response.ok) {
        throw new Error(Response.statusText);
    }
    // console.log(Response);
    return Response.json();
 })
 .then((data) => { data.forEach((data) => {
    console.log(data.name);
 })
 .catch((error) => console.log(error)) ;
});
}
fetchApi();