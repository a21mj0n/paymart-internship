const arr = [
    {
        id: 1,
        name: "Bekzod"
    },
    {
        id: 2,
        name: "Aziz"
    }
]

const newArr = arr.filter(obj => obj.id === 1)
 
console.log(newArr);

// slot-scope