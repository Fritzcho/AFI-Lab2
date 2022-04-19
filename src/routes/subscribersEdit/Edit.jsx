import React from 'react'
import { Navigate, useNavigate, } from "react-router-dom";


class Edit extends React.Component {
    state = {
        pr_Id: '',
        pr_Fornamn: '',
        pr_Efternamn: '',
        pr_Adress: '',
        pr_PostNr: 0,
        pr_Ort: '',
        pr_Telefon: '',
    }
    constructor(props) {
        super(props);
        this.state = {
            pr_Id: window.location.pathname.replace("/subscribers/edit/", "")
        }
    }


    disabledButton() {
        if (this.state.pr_Id === "" ||
            this.state.pr_Fornamn === "" ||
            this.state.pr_Efternamn === "" ||
            this.state.pr_Adress === "" ||
            this.state.pr_PostNr === 0 ||
            this.state.pr_Ort === "" ||
            this.state.pr_Telefon === "") 
        {
            return false;
        } else {
            return true;
        }
    }

    async get() {
        await fetch("https://localhost:7005/api/Subscribers/"+this.state.pr_Id)
        .then(response=>response.json())
        .then(data=>{
            this.setState({pr_Id: data.pr_Id});
            this.setState({pr_Fornamn: data.pr_Fornamn});
            this.setState({pr_Efternamn: data.pr_Efternamn})
            this.setState({pr_Ort: data.pr_Ort});
            this.setState({pr_PostNr: data.pr_PostNr});
            this.setState({pr_Adress: data.pr_Adress});
            this.setState({pr_Telefon: data.pr_Telefon})
        });
    }

    async componentDidMount() {
        this.get();
    }

    edit = async () => {
        await fetch('https://localhost:7005/api/Subscribers/'+this.state.pr_Id, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "pr_Id": this.state.pr_Id,
                "pr_Fornamn": this.state.pr_Fornamn,
                "pr_Efternamn": this.state.pr_Efternamn,
                "pr_Adress": this.state.pr_Adress,
                "pr_PostNr": this.state.pr_PostNr,
                "pr_Ort": this.state.pr_Ort,
                "pr_Telefon": this.state.pr_Telefon
            })
        });
        <Navigate to="/subscribers"/>
    }

    render() {
        return(
            <div>
                <form>
                    <label>
                        Personnummer:
                        <input 
                            type="text" 
                            value={this.state.pr_Id}
                            name="id" 
                            onChange={ev => this.setState({pr_Id: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Förnamn:
                        <input 
                            type="text" 
                            value={this.state.pr_Fornamn}
                            name="id" 
                            onChange={ev => this.setState({pr_Fornamn: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Efternamn:
                        <input 
                            type="text" 
                            value={this.state.pr_Efternamn}
                            name="id" 
                            onChange={ev => this.setState({pr_Efternamn: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Adress:
                        <input 
                            type="text" 
                            value={this.state.pr_Adress}
                            name="id" 
                            onChange={ev => this.setState({pr_Adress: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Postnummer:
                        <input 
                            type="text" 
                            value={this.state.pr_PostNr}
                            name="id" 
                            onChange={ev => this.setState({pr_PostNr: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Ort:
                        <input 
                            type="text" 
                            value={this.state.pr_Ort}
                            name="id" 
                            onChange={ev => this.setState({pr_Ort: ev.target.value})} 
                        />
                    </label>
                    <label>
                        Telefon:
                        <input 
                            type="text" 
                            value={this.state.pr_Telefon}
                            name="id" 
                            onChange={ev => this.setState({pr_Telefon: ev.target.value})} 
                        />
                    </label>
                    <input type="submit" value="Spara" onClick={this.edit} disabled={!this.disabledButton()}/>
                </form>
            </div>
        );
    }
}

export default Edit