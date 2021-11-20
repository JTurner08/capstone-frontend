import React, { Component } from 'react';
import SoldierService from '../service/SoldierService';

class DeleteSoldier extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 firstname:'',
                 lastname:'',
                 rank:'',
                 skill:'',
                 
             }
     
        
        this.DeleteSoldier = this.DeleteSoldier.bind(this);

    }//constructors

     componentDidMount()
     {
        SoldierService.getSoldierById(this.state.id).then((res) =>{
          let soldier = res.data;
          this.setState({
                firstname:soldier.firstname,
                lastname:soldier.lastname,
                rank:soldier.rank,
                skill:soldier.skill
                
                });
        });
           
     }
     
    

    
  DeleteSoldier = (e) => {
        e.preventDefault();
        let soldier={
           id: this.state.id,
           firstname: this.state.firstname,
           lastname: this.state.lastname,
           rank: this.state.rank,
           skill: this.state.skill
        };

        console.log(soldier);
        SoldierService.deleteSoldier(this.state.id).then(res => {
            
            this.props.history.push('/soldiers');
        })
      
        
    }

    cancel(){
        this.props.history.push('/soldiers');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Soldier</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Soldier ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Soldier first name: </label>
                                      <input placeholder="Name" readOnly= "true" name="name" className="form-control"
                                         value={this.state.firstname} onChange={this.firstnameHandler} />
                                   </div> 
                                   <div className="form-group">
                                      <label>Soldier last name: </label>
                                      <input placeholder="Name" readOnly= "true" name="name" className="form-control"
                                         value={this.state.lastname} onChange={this.lastnameHandler} />
                                   </div> 
                                    
                                    <div className="form-group">
                                      <label>Soldier Rank: </label>
                                      <input placeholder="rank" readOnly="true" name="rank" className="form-control"
                                         value={this.state.rank} onChange={this.rankHandler} />
                                   </div>   

                                   <div className="form-group">
                                      <label>Soldier SKill: </label>
                                      <input placeholder="skill" readOnly="true" name="skill" className="form-control"
                                         value={this.state.skill} onChange={this.skillHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.DeleteSoldier}> Delete </button>
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

export default DeleteSoldier;