export const myFetchGet = async (url) => {
    return await fetch(url)
}

export const myFetchPost = async (url, body) => {
    return await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            body
        }),
    });
}

export const myFetchPut = async (url, body) => {
    return await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body })
    })
}

export const myFetchPatch = async (url, body) => {
    return await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body })
    })
}

