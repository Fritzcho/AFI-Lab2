import React from 'react'
import { Link } from "react-router-dom";

class Add extends React.Component {
    state = {
        pr_Id: '',
        pr_Fornamn: '',
        pr_Efternamn: '',
        pr_Adress: '',
        pr_PostNr: 0,
        pr_Ort: '',
        pr_Telefon: ''
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

    add = () => {
        fetch('https://localhost:7005/api/Subscribers/', {
            method: 'POST',
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
        })
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
                    <Link to="/subscribers">
                        <input type="submit" value="Skapa" onClick={this.add} disabled={!this.disabledButton()}/>
                    </Link>
                </form>
            </div>
        );
    }
}
export default Add