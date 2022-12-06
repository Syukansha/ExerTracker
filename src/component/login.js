import React,{Component} from 'react';
import axios from 'axios';

export default class login extends Component{
    constructor(prop){
        super(prop);

        this.onChangeEmail =this.onChangeUsername.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:''
    
        }
    }
    onChangeEmail(e){
       this.setState({
           email: e.target.value
       });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
     }
     

    onSubmit(e){
        e.preventDefault();
        
        const user = {
            email: this.state.username,
            password: this.state.password,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/login',user)
        .then(res => console.log(res.data));


        this.setState({
            email:'',
            password:''
        });
    }

    render(){
        return(
            <div>
               <h3>Create new user</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Email: </label>
                       <input type="text"
                       required
                       className='form-control'
                       value={this.state.email}
                       onChange={this.onChangeEmail}/>
                   </div>
                   <div className="form-group">
                       <label>Password: </label>
                       <input type="text"
                       required
                       className='form-control'
                       value={this.state.password}
                       onChange={this.onChangePassword}/>
                   </div>
                   <div className='form-control'>
                        <input type='submit' value="login"/>
                   </div>
               </form>
            </div>
        )
    }
}