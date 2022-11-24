export const updateData = (data, id, method) => {
    const baseUrl = 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/'
    const updateFetchUrl = `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`
    let fetchUrl

    switch (method) {
        case 'POST': 
            fetchUrl = baseUrl
            break
        case 'PUT': 
            fetchUrl = updateFetchUrl
            break
        default:
            break
    }

    fetch(`${fetchUrl}`, {
        method: `${method}`,
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


