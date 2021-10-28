import React, { Component } from 'react';
import SoldierService from '../service/SoldierService';

class AddSoldier extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           id: '',
           name:'',
           rank:'',
           skill:''
        }
      
        this.saveSoldier = this.saveSoldier.bind(this)
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.rankHandler = this.rankHandler.bind(this);
        this.skillHandler = this.skillHandler.bind(this);

    }//constructor

     
    idHandler=(event) => { this.setState({id: event.target.value});}


    nameHandler=(event) => {this.setState({name: event.target.value});}

     
    rankHandler=(event) => {this.setState({rank: event.target.value});}

    skillHandler=(event) => {this.setState({skill: event.target.value});}

    saveSoldier = (e) => {
        e.preventDefault();
        let soldier={
           id: this.state.id,
           name: this.state.name,
           rank: this.state.rank,
           skill: this.state.skill,
        };
        console.log(soldier);
        SoldierService.createSoldier(soldier).then(res =>{
                this.props.history.push('/soldiers');  
            }).catch(err=>{
                console.log("record not saved.");
            });
       
       
        
        
    }//closing save method

    cancel(){
        this.props.history.push('/soldier');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Add Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Soldier ID: </label>
                                      <input placeholder="Id" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Soldier Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Soldier Rank: </label>
                                      <input placeholder="rank" name="rank" className="form-control"
                                         value={this.state.rank} onChange={this.rankHandler} />
                                   </div>   
                                   <div className="form-group">
                                   <label>Soldier Skill: </label>
                                   <input placeholder="skill" name="skill" className="form-control"
                                      value={this.state.skill} onChange={this.skillHandler} />
                                </div>   
                                    <button className="btn btn-success" onClick={this.saveSoldier}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddSoldier;