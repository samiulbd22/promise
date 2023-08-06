const stocks = {
    Fruits:['strawberry','grapes','banana','apple'],
    Liquid:['water','ice'],
    Holder:['cone','cup','stick'],
    Topping:['chocolate','peanuts']
};
// const order = (fruits_name,call_production)=>{
//     console.log(`${stocks.Fruits[fruits_name]} was selected`);  //fruits_name,
//     setTimeout(()=>{
//         call_production()
//     },2000);
    
// }
// const product = ()=>{
//     setTimeout(()=>{
//         console.log("Order reicived....starting production");
//         setTimeout(()=>{
//             console.log("The Fruits has been chopped");
//             setTimeout(()=>{
//                 console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been added.`);
//                 setTimeout(()=>{
//                     console.log("The Machine has been started");
//                     setTimeout(()=>{
//                         console.log(`Icecream placed on holder and ${stocks.Holder[0]}`);
//                         setTimeout(()=>{
//                             console.log(`${stocks.Topping[0]} or ${stocks.Topping[1]}`);
//                             setTimeout(()=>{
//                                 console.log("Servive your product.");
//                                 setTimeout(()=>{
//                                     console.log("Thanks for coming....")
//                                 },2000);
//                             },3000);
//                         },2000)
//                     },1000)
//                 },1000);
//             },2000)
//         },2000)
//     },0);
// }
// order(0,product);
const isShopOpen = true;
const order = (time,work)=>{
    return new Promise ((resolve,reject)=>{
        if(isShopOpen){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject(console.log("Sorry The shop is closed."))
        }
    });
}
order(2000,()=>{console.log(`${stocks.Fruits[0]} is selected`)})
.then(()=>{
    return order(0,()=>{console.log("The production has been started.")})
})
.then(()=>{
    return order(2000,()=>{console.log("The fruits has been chopped.")})
})
.then(()=>{
    return order(1000,()=>{console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} is selected.`)})
})
.then(()=>{
    return order(1000,()=>{console.log("The machine has been started.")})
})
.then(()=>{
    return order(2000,()=>{console.log(`${stocks.Holder[0]} as holder`)})
})
.then(()=>{
    return order(3000,()=>{console.log(`${stocks.Topping[0]} as chopped.`)})
})
.then(()=>{
    return order(2000,()=>{console.log("Serve is iceCream.")})
})