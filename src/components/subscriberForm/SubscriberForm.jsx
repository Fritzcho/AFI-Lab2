import React from "react";
import { Link } from "react-router-dom";

export function randomId() {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(11);
}

class ScndSubscriberForm extends React.Component {
    state = {
        disabled: false,
        an_Id: "",
        an_Name: "",
        an_City: "",
        an_PostalCode: "",
        an_Address: "",
        an_PhoneNr: "",
        ad_Price: 0,
        ad_Title: "",
        ad_Content: "",
        annonsor:[],
    }
    
    disabledButton() {
        if (this.state.an_Id === "" ||
            this.state.an_Name === "" ||
            this.state.an_City === "" ||
            this.state.an_PostalCode === "" ||
            this.state.an_Address === "" ||
            this.state.an_PhoneNr === "" ||
            this.state.ad_Title === "" ||
            this.state.ad_Content=== "") 
        {
            return false;
        } else {
            return true;
        }
    }

    postToApi= (event) => {
        fetch("https://localhost:7277/api/annonsors/"+this.state.an_Id)
        .then(response=>response.json())
        .then(data=>{
            this.setState({annonsor:data});
            console.log(this.state.annonsor);
            if (this.state.annonsor !== undefined) {
                fetch('https://localhost:7277/api/annonsors/'+this.state.an_Id, {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "an_Id": this.state.an_Id,
                    "an_Name": this.state.an_Name,
                    "an_City": this.state.an_City,
                    "an_PostalCode": JSON.stringify(this.state.an_PostalCode),
                    "an_Address": this.state.an_Address,
                    "an_PhoneNr": this.state.an_PhoneNr
                  })
                })
            } else {
                fetch('https://localhost:7277/api/Annonsors/', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "an_Id": this.state.an_Id,
                        "an_Name": this.state.an_Name,
                        "an_City": this.state.an_City,
                        "an_PostalCode": JSON.stringify(this.state.an_PostalCode),
                        "an_Address": this.state.an_Address,
                        "an_PhoneNr": this.state.an_PhoneNr
                      })
                })
            }
        });

        fetch('https://localhost:7277/api/ads/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "ad_Id": randomId(),
                "ad_Price": 0,
                "ad_Title": this.state.ad_Title,
                "ad_Content": this.state.ad_Content,
                "ad_anId": this.state.an_Id
            })
        })
    }

    handleSubmit = (event) => {
        this.setState({ Pr_Id: event.target.value});
    }

    async refreshList() {
        await fetch("https://localhost:7005/api/Subscribers/"+this.props.pr_id)
        .then(response=>response.json())
        .then(data=>{
            this.setState({subscriber:data});
            this.setState({an_Id: data.pr_Id});
            this.setState({an_Name: data.pr_Fornamn+" "+data.pr_Efternamn});
            this.setState({an_City: data.pr_Ort});
            this.setState({an_PostalCode: data.pr_PostNr});
            this.setState({an_Address: data.pr_Adress});
            this.setState({an_PhoneNr: data.pr_Telefon})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    render () {
        return (
            <div className='afi_subForm'>
                <form>
                    <label>
                        Namn:
                        <input 
                            type="text" 
                            value={this.state.an_Name}
                            name="an_Name" 
                            onChange={ev => this.setState({an_Name: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Ort:
                        <input 
                            type="text" 
                            value={this.state.an_City}
                            name="an_City" 
                            onChange={ev => this.setState({an_City: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Postnummer:
                        <input 
                            type="text" 
                            value={this.state.an_PostalCode} 
                            name="an_PostalCode" 
                            onChange={ev => this.setState({an_PostalCode: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Adress:
                        <input 
                            type="text" 
                            value={this.state.an_Address} 
                            name="an_Address" 
                            onChange={ev => this.setState({an_Address: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Telefon:
                        <input 
                            type="text" 
                            value={this.state.an_PhoneNr} 
                            name="an_PhoneNr" 
                            onChange={ev => this.setState({an_PhoneNr: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Reklam titel:
                        <input 
                            type="text" 
                            value={this.state.ad_Title} 
                            name="ad_Title" 
                            onChange={ev => this.setState({ad_Title: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Reklam innehåll:
                        <textarea 
                            required
                            style={{resize: "none", height: "100px"}}
                            type="text" 
                            value={this.state.ad_Content} 
                            name="ad_Content" 
                            onChange={ev => this.setState({ad_Content: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Pris:
                        <h2>{this.state.ad_Price} kr</h2>
                    </label>
                    <Link to="/">
                        <input type="submit" value="Skapa" onClick={this.postToApi} disabled={!this.disabledButton()}/>
                    </Link>
                </form>
            </div>
        )
    }
}

class SubscriberForm extends React.Component {
    state = { 
        Pr_Id: '',
        answer: '',
        subscribers:[]
    }

    handleSubmit = (event) => {
        console.log(this.state.Pr_Id)
        const exists = this.state.subscribers.some(item => item.pr_Id === this.state.Pr_Id);
        // var exists = this.state.subscribers.some(o => this.state.Pr_Id in o)
        if (exists) {
            this.setState({ answer: event.target.value});
        }
    }

    refreshList() {
        fetch("https://localhost:7005/api/Subscribers/"+this.state.Pr_Id)
        .then(response=>response.json())
        .then(data=>{
            this.setState({subscribers:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    render () {
        return(
            <div className='afi__subForm'>
                <form>
                    <label>
                        <input type="text" 
                            value={this.state.Pr_Id} 
                            name="Pr_Id" 
                            onChange={ev => this.setState({Pr_Id: ev.target.value})}
                            required
                        />
                        Personnummer
                    </label>
                    <input type="button" value="Hämta information" onClick={this.handleSubmit} disabled={!this.state.Pr_Id}/>
                </form>
                {this.state.answer === "Hämta information" && <ScndSubscriberForm pr_id={this.state.Pr_Id}/>}
            </div>
        );
    }
}
// {this.state.answer === "an_submit" && <ComapanyForm/>}

export default SubscriberForm;