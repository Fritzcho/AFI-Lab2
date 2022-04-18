import React from 'react'
import {SubscriberForm, ComapanyForm} from '../../components'
import {Variables} from '../../utils/Variables'
import './form.css'

export class Form extends React.Component {
    state={
        departments:[],
        answer: '',
        an_Id:"",
        an_Name:"",
    }

    handleSubmit = (event) => {
        this.setState({ answer: event.target.value});
    }

    refreshList() {
        fetch("https://localhost:7277/api/Annonsors")
        .then(response=>response.json())
        .then(data=>{
            this.setState({departments:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }


    render() {
        return(
            <div className='afi__form--container'>
                <form className='afi__form--radio'>
                    <div className='afi__radio'>
                        <label>
                            <input type="radio" value={"sub"} name="subscriber" onChange={this.handleSubmit}/>
                            Subscriber
                        </label>
                    </div>
                    <div className='afi__radio'>
                        <label>
                            <input type="radio" value={"company"} name="subscriber" onChange={this.handleSubmit}/>
                            Not subscriber
                        </label>
                    </div>
                </form>
                {this.state.answer === "sub" && <SubscriberForm/>}
                {this.state.answer === "company" && <ComapanyForm/>}
            </div>
        );
    }
}
