async function sleep(millis: number): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, millis)
    })

    return promise
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

let t = Date.now();
sleep(1000).then(() => console.log(Date.now() - t))