import React, { Component } from 'react'
import SoldierService from '../service/SoldierService';

class UpdateSoldier extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            rank: '',
            skill: ''
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.rankHandler = this.rankHandler.bind(this);
        this.skillHandler = this.skillHandler.bind(this);
    }

    componentDidMount(){
        SoldierService.getSoldierById(this.state.id).then( (res) =>{
            let soldier = res.data;
            this.setState({
                name: soldier.name,
                rank : soldier.rank,
                skill: soldier.skill

            });
        });
    }

    updateSoldier = (e) => {
        e.preventDefault();
        let soldier = {name: this.state.name, rank: this.state.rank, skill: this.state.skill};
        console.log('soldier => ' + JSON.stringify(soldier));
        console.log('id => ' + JSON.stringify(this.state.id));
        SoldierService.updateSoldier(soldier, this.state.id).then( res => {
            this.props.history.push('/soldiers');
        });
    }
    
    nameHandler= (event) => {
        this.setState({firstName: event.target.value});
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
                                            <label> Name: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.nameHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Rank: </label>
                                            <input placeholder="Rank" name="rank" className="form-control" 
                                                value={this.state.rank} onChange={this.rankHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Skill: </label>
                                            <input placeholder="Skill" name="Skill" className="form-control" 
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

export default UpdateSoldier;