const Detail=require('../models/flight')
const UserDet=require('../models/UserDet')
const LogInSchema=require('../models/Login')
//Login Functionality

const signup_user=async (req,res)=>{
  const sign=new LogInSchema(req.body);
  sign.save()
  .then((result)=>{
    res.redirect('/');
  })
  .catch((err)=>{
    console.log("err");
  })
}

const login_user=async (req,res)=>{
  try {
    const check = await LogInSchema.findOne({ name: req.body.name })
    if (check.password === req.body.password) {
        res.status(201).render('../views/Users/Home')
    }
    else {
        res.send("incorrect password")
    }
} 
catch (e) {
    res.send("wrong details")
}
}


//Admin Functionality
const create_get=async(req,res)=>{
  res.render('../views/Admin/Create');
}

const Booked_get=(req,res)=>{
  UserDet.find()//.sort({createdAt: -1})
  .then((result)=>{
    res.render('Admin/Booked_Det',{title:"all flight",user:result})
  })
  .catch((err)=>{
    console.log(err);
  })

}

const delete_id=(req,res)=>{
  const id=req.params.id;
  Detail.findByIdAndDelete(id)
  .then(result =>{
    res.json({ redirect: '/admin'});
  })
  .catch(err=>{
    console.log(err);
  })
}

const Detail_get=(req,res)=>{
  
  Detail.find()
  .then(result=>{
    res.render('Admin/Details',{details: result })
  })
  .catch(err=>{
    res.status(404).render('404');
  });

}

const Detail_filt=(req,res)=>{
  Detail.find({Departure_Date:req.body.Departure_Date,Time:req.body.Time})
  .then((result)=>{
    res.render('Admin/Details',{details: result })
  })
  .catch((err)=>{
    console.log(err);
  })
}

// const delete_post=(req,res)=>{
  // Detail.find()//.sort({createdAt: -1})
  //   .then((result)=>{
  //     res.render('Admin/Delete',{title:"all flight",Deleting:result})
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
// }
const delete_get=async(req,res)=>{
    
    Detail.find()//.sort({createdAt: -1})
    .then((result)=>{
      res.render('Admin/Delete',{title:"all flight",detail:result})
    })
    .catch((err)=>{
      console.log(err);
    })
  
  // res.render('../views/Admin/Delete');
}

const create_flight_post =async (req,res) =>{
 
  const detail = new Detail(req.body);
  // console.log(detail)
  detail.save()
  
  .then((result)=>{
    res.redirect('/admin');
  })
  .catch((err)=>{
    console.log("err");
  })
}

//User Functionality
const Home_get=async(req,res)=>{
  res.render('../views/Users/Home');
}
const Book_get=async(req,res)=>{
  res.render('../views/Users/Book');
 
}
const Book_post=(req,res)=>{
  const user = new UserDet(req.body);
  Detail.find({Id:req.body.Flight_Id})
  .then((result)=>{
    if(result.length==0)
    res.render('../views/Users/Rules');
    else{
    user.save();
    }
  })
  .catch((err)=>{
    console.log("yes");
  })
  // console.log(user)

  
  // .then((result)=>{
  //   console.log('booked');
  //   res.redirect('/users');
  // })
  // .catch((err)=>{
  //   console.log("err");
  // })
}
const Search_get=async(req,res)=>{
 
  Detail.find({})//.sort({createdAt: -1})
  
    .then((result)=>{
      // console.log(result)
      // const date=result.date
      res.render('Users/Search',{title:"all flight",detail:result})
    })
    .catch((err)=>{
      console.log(err);
    })
}
const Search_filt=(req,res)=>{
  console.log(req.Departure_Date)
  Detail.find({Departure_Date:req.body.Departure_Date,Time:req.body.Time})
  .then((result)=>{
    res.render('Users/Search',{title:"all flight",detail:result})
  })
  .catch((err)=>{
    console.log(err);
  })
}
const Cancel_get=async(req,res)=>{
  UserDet.find()//.sort({createdAt: -1})
    .then((result)=>{
      res.render('Users/Cancel',{title:"all flight",user:result})
    })
    .catch((err)=>{
      console.log(err);
    })
  
}
const Cancel_delete=(req,res)=>{
  const id=req.params.id;
  UserDet.findByIdAndDelete(id)
  .then(result =>{
    res.json({ redirect: '/users'});
  })
  .catch(err=>{
    console.log(err);
  })
}
const Rules_get=async(req,res)=>{
  res.render('../views/Users/Rules')
}


module.exports = {
  create_get,
  create_flight_post,
  delete_get,
  Home_get,
  Book_get,
  Search_get,
  Cancel_get,
  Rules_get,
  Book_post,
  Booked_get,
  delete_id,
  Detail_get,
  Cancel_delete,
  signup_user,
  login_user,
  Search_filt,
  Detail_filt
}

// const flightIndex=(req,res)=>{
//   res.render('navigation');
// }