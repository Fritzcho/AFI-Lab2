import React from 'react'
import Hero from '../../containers/hero/Hero';

const SubscriberForm = () => {
    return(
        <div className='afi__subForm'>
            <form>
                
            </form>
        </div>
    );
}

const ComapanyForm = () => {
    return(
        <div className='afi__subForm'>
            <form>
                <input type="text" name="id"/>
            </form>
        </div>
    );
}

class Form extends React.Component {
    state = { answer: '' }
    handleSubmit = (event) => {
        this.setState({ answer: event.target.value});
    }
    render() {
        return(
            <div className='afi__form--container'>
                <form>
                    <div className='afi__radio'>
                        <label>
                            <input type="radio" value={"sub"} name="subscriber" onChange={this.handleSubmit}/>
                            Subscriber
                        </label>
                    </div>
                    <div className='afi__radio'>
                        <label>
                            <input type="radio" value={"company"}name="subscriber" onChange={this.handleSubmit}/>
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

export default Form