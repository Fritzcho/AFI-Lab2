import React from "react";
import { Link } from "react-router-dom";

export function randomId() {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(11);
}

class ComapanyForm extends React.Component {
    state = {
        an_Id: '',
        an_Name: '',
        an_City: '',
        an_PostalCode: '',
        an_Address: '',
        an_PhoneNr: '',
        an_InAddress: '',
        an_InPostalCode: '',
        an_InCity: '',
        ad_Price: 40,
        ad_Title: '',
        ad_Content: '',
    }

    disabledButton() {
        if (this.state.an_Id === "" ||
            this.state.an_Name === "" ||
            this.state.an_City === "" ||
            this.state.an_PostalCode === "" ||
            this.state.an_Address === "" ||
            this.state.an_PhoneNr === "" ||
            this.state.ad_Title === "" ||
            this.state.ad_Content=== "" ||
            this.state.an_InAddress === "" ||
            this.state.an_InPostalCode === "" ||
            this.state.an_InCity === "") 
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
                    "an_PhoneNr": this.state.an_PhoneNr,
                    "an_InAdress": this.state.an_InAddress,
                    "an_InCity": this.state.an_InCity,
                    "an_InPostalCode": this.state.an_InPostalCode
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
                        "an_PhoneNr": this.state.an_PhoneNr,
                        "an_InAddress": this.state.an_InAddress,
                        "an_InCity": this.state.an_InCity,
                        "an_InPostalCode": this.state.an_InPostalCode
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
                "ad_Price": 40,
                "ad_Title": this.state.ad_Title,
                "ad_Content": this.state.ad_Content,
                "ad_anId": this.state.an_Id
            })
        })
    }

    render () {
        return(
            <div className='afi__subForm'>
                <form>
                    <label>
                        Oranisationsnummer
                        <input 
                            type="text" 
                            value={this.state.an_Id} 
                            name="advertiser"
                            onChange={ev => this.setState({an_Id: ev.target.value})}
                        />
                    </label>
                    <label>
                        Namn
                        <input 
                            type="text" 
                            value={this.state.an_Name}
                            name="advertiser"
                            onChange={ev => this.setState({an_Name: ev.target.value})}
                        />
                    </label>
                    <label>
                        Ort
                        <input 
                            type="text" 
                            value={this.state.an_City}
                            name="advertiser"
                            onChange={ev => this.setState({an_City: ev.target.value})}
                        />
                    </label>
                    <label>
                        Postnummer
                        <input 
                            type="text" 
                            value={this.state.an_PostalCode} 
                            name="advertiser"
                            onChange={ev => this.setState({an_PostalCode: ev.target.value})}
                        />     
                    </label>
                    <label>
                        Utdelningsadress
                        <input 
                            type="text" 
                            value={this.state.an_Address} 
                            name="advertiser"
                            onChange={ev => this.setState({an_Address: ev.target.value})}
                        />
                    </label>
                    <label>
                        Telefon
                        <input 
                            type="text" 
                            value={this.state.an_PhoneNr}
                            name="advertiser"
                            onChange={ev => this.setState({an_PhoneNr: ev.target.value})}
                        />
                    </label>
                    <label>
                        Fakturaadress: adress
                        <input 
                            type="text" 
                            value={this.state.an_InAddress}
                            name="advertiser"
                            onChange={ev => this.setState({an_InAddress: ev.target.value})}
                        />  
                    </label>
                    <label>
                        Fakturaadress: Postnummer
                        <input 
                            type="text" 
                            value={this.state.an_InPostalCode}
                            name="advertiser"
                            onChange={ev => this.setState({an_InPostalCode: ev.target.value})}
                        />
                    </label>
                    <label>
                        Fakturadress: Ort
                        <input 
                            type="text" 
                            value={this.state.an_InCity} 
                            name="advertiser"
                            onChange={ev => this.setState({an_InCity: ev.target.value})}
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
                        <input type="button" value="Skapa" onClick={this.postToApi} disabled={!this.disabledButton()}/>
                    </Link>
                </form>
            </div>
        );
    }
}

export default ComapanyForm;