var data=[
    customer1={
        id:1,
        first_name:"John",
        last_name:" Sukla",
        email:"john@sukla.com",
        gender:"Male",
        car_make:"NAP",

    },

    customer2={
        id:2,
        first_name:"Nirmal",
        last_name:" Sukla",
        email:"john@sukla.com",
        gender:"Male",
        car_make:"NAP",

    },

    customer3={
        id:3,
        first_name:"Rock",
        last_name:" star",
        email:"star@sukla.com",
        gender:"Male",
        car_make:"NAP 1",

    },

    customer4={
        id:4,
        first_name:"Smita",
        last_name:" thapar",
        email:"smita@thapar.com",
        gender:"Female",
        car_make:"NAP 0",

    },
    customer4={
        id:4,
        first_name:"Amit",
        last_name:" thapar",
        email:"smita@thapar.com",
        gender:"Female",
        car_make:"NAP 0",

    }
]





var filterFirstName=[]
let customers=data.forEach((ld)=>{
    //  console.log(ld)

     filterFirstName.push(ld)
    
   


})
// db.reverse()

console.log({filterFirstName})
// for(let i=0;i<=db.length;i++){
//     db[0]=db[1]
// }

data.sort((a, b) => {
    let fa = a.first_name.toLowerCase(),
        fb = b.first_name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});



const express=require('express')
const app=express()

const port =3000

app.get('/customers/list', function(req, res) {
    const filter=req.query.filter;
    const id = req.query.id;
    const first_name = req.query.first_name;
    const last_name = req.query.last_name;
    const email=req.query.email;
    if(filter=="first_name" || filter=="last_name")
    {
        res.send({data:data})
    }
    else{
        res.send({data})
    }
      
    
  });


app.listen(port , ()=>{
    console.log(`server running on ther port ${port}`)
})

