export const deleteDataServer = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
    .then(console.log(`deleted user: ${id}`))
}
