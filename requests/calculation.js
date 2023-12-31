export const getAllCalculatePages = () => {
    return fetch(`${process.env.BASE_URL}/get-all-calculate-page`, {
        cache: 'no-store'
    }).then((res) => res.json())
    .catch((error) => {
        console.log(error);
    })
}
export function getOneCalculatePage (id) {
    return fetch(`${process.env.BASE_URL}/get-one-calculate-page/${id}`, {
        // cache: 'force-cache'
        next: {revalidate: 10}
    }).then((res) => res.json())
    .catch((error) => {
        console.log(error);
    })
}