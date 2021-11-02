import React, { Component } from 'react'
import SoldierService from '../service/SoldierService';



class UpdateSoldier extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            rank: '',
            skill: ''
        }
        this.idHandler=this.idHandler.bind(this);
        this.firstnameHandler = this.firstnameHandler.bind(this);
        this.lastnameHandler = this.lastnameHandler.bind(this);
        this.rankHandler = this.rankHandler.bind(this);
        this.skillHandler = this.skillHandler.bind(this);
    }

     componentDidMount(){
        SoldierService.getSoldierById(this.state.id).then( (res) =>{
            let soldier = res.data;
            this.setState({
                firstName: soldier.firstname,
                lastName: soldier.lastname,
                rank : soldier.rank,
                skill: soldier.skill

            });
        });
    }

    updateSoldier = (e) => {
        e.preventDefault();
        let soldier = {firstname: this.state.firstname, lastname:this.state.lastname, rank: this.state.rank, skill: this.state.skill};
        console.log('soldier => ' + JSON.stringify(soldier));
        console.log('id => ' + JSON.stringify(this.state.id));
        SoldierService.updateSoldier(soldier, this.state.id).then( res => {
            this.props.history.push('/soldiers');
        });
    }
    idHandler= (event) => {
        this.setState({id: event.target.value});
    } 
    firstnameHandler= (event) => {
        this.setState({firstname: event.target.value});
    }

    lastnameHandler= (event) => {
        this.setState({lastname: event.target.value});
    }

    rankHandler= (event) => {
        this.setState({rank: event.target.value});
    }

    skillHandler= (event) => {
        this.setState({skill: event.target.value});
    }

    cancel(){
        this.props.history.push('/soldiers');
    }

    render() {
        return (
            <div>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Soldier</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> firstname: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.firstName} onChange={this.firstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> lastname: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.lastName} onChange={this.lastNamehandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Rank: </label>
                                            <input placeholder="Rank" name="rank" className="form-control" 
                                                value={this.state.rank} onChange={this.rankHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Skill: </label>
                                            <input placeholder="Rank" name="rank" className="form-control" 
                                                value={this.state.skill} onChange={this.skillHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.updateSoldier}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateSoldier