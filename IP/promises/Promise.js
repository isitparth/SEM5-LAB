const fetchApi = () => {
    return new Promise((resolve, reject) => {
        fetch("https://catfact.ninja/fact")
            .then(
                (res) => {
                    console.log(res);
                    return res.json();
                }
            )
            .then(
                (data) => {
                    console.log(data);
                    resolve(data);
                }
            )
            .catch(
                err => {
                    reject(`Data not fetched ${err}`);
                }
            )
            .finally(
                () => console.log("Fetch api executed")
            )
    });
}

prom = fetchApi()
console.log(prom);