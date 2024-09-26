{/* 
Flatten the object { a: 5, b: [1, 2, 3], c: { d: 5, e: [6, 7], f: 0 }, j: 9 } to get [a_5,b_1,b_2,b_3,c_d_5,c_e_6,c_e_7,.....]
*/}

const obj = { a: 5, b: [1, 2, 3], c: { d: 5, e: [6, 7], f: 0 }, j: 9 }

const flat = (obj, pre, res) => {
    if (Object.entries(obj).length > 0 && !Array.isArray(obj)) {
        const entries = Object.keys(obj)
        for (let i = 0; i < entries.length; i++) {
            flat(obj[entries[i]], `${pre ? `${pre}_` : ''}${entries[i]}`, res)
        }
    } else if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            flat(obj[i], pre, res)
        }
    } else res.push(`${pre ? `${pre}_` : ''}${obj}`)

}

const res = []
flat(obj, '', res)
console.log(res);
