// let summa = 0
// for (let i = 0;i<=100;i++){
//     summa+=i
// }
// console.log(summa)

// const summa = (n) => {
//     return n+summa(n-1)
// }

// console.log(summa(100))

// const comments = [
//     {
//         body: "blalba",
//         children: [
//             {
//                 body: "sonun",
//                 children: [
//                     {
//                         body: "blalba2",
//                         children: [
                            
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         body: "blalba2",
//         children: [
            
//         ]
//     }
// ] 


// const readComments = (comments) => {
//     comments.forEach((item)=>{
//         console.log(item.body)
//         if (item.children.length > 0){
//             readComments(item.children)
//         }
//     })
// }

// readComments(comments)



const family = {
    mather:"Aigul",
    father:"Asan",
    children:[
        {
            mather:"Aijanat",
            father:"Aibek",
            children:[
                {
                    mather:"Aigerim",
                    father:"Alym",
                    children:[
        
                    ]
                }
            ]
        }
    ]
}



const familyLog = (family) => {
    console.log(family.mather,family.father)
    family.children.forEach((item)=>{
        familyLog(item)
    })
}