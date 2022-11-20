//return the score of the user
// the url needs to be the API's url
export default async function getScore(url, username) {
    const scoreUser = await (
        await fetch(url + "/ranking/" + username, {
            withCredntials: true,
            credentials: "include",
        })
    ).json();
    return scoreUser.msg[0].score;
}
