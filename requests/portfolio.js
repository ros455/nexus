export const getAllPortfolio = () => {
    return fetch(`${process.env.BASE_URL}/get-all-portfolio`, {
        cache: 'no-store'
    }).then((res) => res.json())
}
export function getOnePortfolio (id) {
    return fetch(`${process.env.BASE_URL}/get-one-portfolio/${id}`, {
        // next: {revalidate: 10}
        cache: 'force-cache'
    }).then((res) => res.json())
}