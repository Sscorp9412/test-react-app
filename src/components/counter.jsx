import React, { Component } from "react";

class Counter extends Component {
  
    state={
        num1: this.setRandomValue(),
        num2: this.setRandomValue(),
        response: '',
        score: 0
    };

render() {
    if(this.state.score>10){
        return(
            <h1 className={this.rainbow()} style={{textAlign: 'center', fontSize: '10rem'}}>You Won</h1>
        )
    }else{
        return (
            <div className="d-flex flex-column justify-content-center align-items-center bg-info" style={{width: '100%', height: '100vh'}}>
                <h1 style={{fontSize: '5rem'}}>Solve it! <span className="text-warning">{this.state.score}</span></h1>
                <div className="card bg-info" style={{border: 'none'}}>
                    <h1 className={this.rainbow()} style={{textAlign: 'center', fontSize: '10rem'}}>{this.formatedQuestion()}</h1>
                    <input type="text" className="form-control" onChange={(event)=>this.storeAnswer(event)} onKeyUp={(event)=>this.matchAnswer(event)} placeholder="Answer" value={this.state.response}/>
                </div>
            </div>
        ); 
    }
    }

    rainbow=()=>{
        let colors=['light', 'danger', 'warning', 'primary', 'dark'];
        let color="text-";
        return color+colors[Math.floor(Math.random()*colors.length)];
    }

    formatedQuestion=()=>{
        let {num1, num2}=this.state;
        return num1+' + '+num2;
    }

    storeAnswer=(event)=>{
        this.setState({
            response: event.target.value
        })
    }

    setRandomValue(){
        return Math.ceil(Math.random()*10);
    }

    matchAnswer=(event)=>{
        let {score, num1, num2}=this.state;
        if(event.keyCode===13){
            this.setState({
                score: (num1+num2)===parseInt(event.target.value)?score+1:score>0?score-1:0,
                num1: this.setRandomValue(),
                num2: this.setRandomValue(),
                response:'' 
            })
        }
    }

}

export default Counter;
