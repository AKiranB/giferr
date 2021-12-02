


router.get('/', (req, res, next) => {
    const getAllGifs = async () => {
        await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=2bdn2aQsC4hMxrKn5kul22j7jHNzCEsN`, {
            method: 'GET',
        })
    }
})
// const getAllGifs = async () => {
//     await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=2bdn2aQsC4hMxrKn5kul22j7jHNzCEsN`, {
//         method: 'GET',
//     })
//         .then(async (res) => {
//             const result = await res.json();
//             setAllGifs(result.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     return true;
// };