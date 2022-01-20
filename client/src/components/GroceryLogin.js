import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const GroceryLogin = () => {

    const changeUser = async () => {
        try {
            document.body.style.backgroundColor = "lightgreen";  
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        changeUser();  
    }, []);

return (
   
    <div className="overall-info " >
    <div className="login-info text-center mt-5 font-italic" >
        <h1>Welcome to Your PERN Grocery List!</h1>
        <h1 className="text-primary"> Register Here</h1>
    <form >
    <h5 className="font-weight-bold">Enter a Username</h5>
        <input type = "text" className="form-control-lg border border-dark border-5"/>

    </form>
    <form >
    <h5 className="font-weight-bold">Enter an Email</h5>
        <input type = "text" className="form-control-lg border border-dark border-5"/>
  
    </form>
    <form >
    <h5 className="font-weight-bold">Enter a Password</h5>
        <input type = "password" className="form-control-lg border border-dark border-5"/>
        <div className="form-control-lg">
    <button >Submit</button>
  </div>
    </form>
    </div>




    <div className="login-info text-center mt-5 font-italic">
    <h1 className="text-primary"> Login Here</h1>
<form>
<h5 className="font-weight-bold">Enter your Username</h5>
    <input type = "text" className="form-control-lg border border-dark border-5"/>
    
</form>
<form  >
<h5 className="font-weight-bold">Enter your Email</h5>
    <input type = "text" className="form-control-lg border border-dark border-5"/>
    
</form>
<form >
<h5 className="font-weight-bold">Enter your Password</h5>
    <input type = "password" className="form-control-lg border border-dark border-5"/>

    <div className="form-control-lg">
    <Link to="/list" >
    <button>Login</button>
  </Link>
  </div>
   
</form>
  

</div>
</div>

)

}
export default GroceryLogin;