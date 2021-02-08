export const myFetchGet = async (url:string) => {
    return await fetch(url)
}

export const myFetchPost = async (url:string, body:any) => {
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

export const myFetchPut = async (url:string, body:any) => {
    return await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body })
    })
}

export const myFetchPatch = async (url:string, body:any) => {
    return await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body })
    })
}

