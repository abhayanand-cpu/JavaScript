// const printAddr = (string) => {
//     promise= new Promise( (resolve) => {
//     setTimeout(() =>{
//     console.log(string);
//     resolve(string);
//     }, 2000);
//     }
//     );
//     return promise;
//     }
//     const getAddress = () =>
//     {
//     printAddr("121 Worcester Rd").then(()=>{
//     return printAddr("Fairhaven");
//     }).then(()=>{
//     return printAddr("NY 14228");
//     }).catch((err) =>{
//     console.log(err);
//     });
//     }
//     getAddress();

    let p = new Promise( (resolve,reject) => {
        console.log("hello");
        setTimeout(() => {
            console.log("inside timeout");
            reject(true)
        },3000);
    });
    p.then((value) => {
        console.log("we are done");
    },(error) => {
        console.log("error");
    });


    //Async & await

    async function MyfunW(){
        let BBSRW = new Promise((resolve, reject)=>{
          setTimeout(()=>{
            resolve("Todays Temp of BBSR is 36 deg")
          },2000)
        })
        
         let RaipurW = new Promise((resolve, reject)=>{
          setTimeout(()=>{
            resolve("Todays Temp of Raipur 38 deg")
          },1000)
        })
      //    BBSRW.then(alert)
      //    RaipurW.then(alert)
         
         let B= await BBSRW
         let R = await RaipurW
         return [B,R]
         
      }
      
      console.log("Welcome")
      z = MyfunW()
      z.then((value)=>{
        console.log(value)
      })
      