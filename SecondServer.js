fetch('http://localhost:2127/', { method: "GET" })
    .then((response) => {
        return response.json();
    }).then((json) => {
        console.log(`This is fetch result without async await ${json}`);
    });

const fetchDataWithArrowFunction = async () => {
    const data = await fetch('http://localhost:2127/');
    const json = await data.json();
    console.log(`This is fetch result with async await ${json}`);
};

fetchDataWithArrowFunction();

const userData = {
    name: 'Hanzala shaikh',
    age: 21
}

async function fetchData() {
    const data = await fetch('http://localhost:2127/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const json = await data.text();
    console.log(json);
}

fetchData();