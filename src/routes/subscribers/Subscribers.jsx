import React from 'react'
import { Link,Routes, Route, BrowserRouter } from "react-router-dom";
import { Add, Edit} from '../index'

class Subscribers extends React.Component {
    state = {
        subscribers: [],
    }

    refreshList() {
        fetch("https://localhost:7005/api/Subscribers")
        .then(response=>response.json())
        .then(data=>{
            this.setState({subscribers:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    delete(pr_Id) {
        console.log(pr_Id)
        fetch("https://localhost:7005/api/Subscribers/"+pr_Id, {
            method: 'DELETE',
        })
        window.location.reload();
    }

    render () {
        return (
            <div className='afi__feed'>
                <div className='afi__feed--contents'>
                    <Link to="add">
                        <input type="button" value="Skapa"/>
                    </Link>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Förnamn
                                </th>
                                <th>
                                    Efternamn
                                </th>
                                <th>
                                    Adress
                                </th>
                                <th>
                                    Postnummer
                                </th>
                                <th>
                                    Ort
                                </th>
                                <th>
                                    Telefon
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.subscribers.map(pr=>
                                <tr key={pr.pr_Id}>
                                    <td>{pr.pr_Id}</td>
                                    <td>{pr.pr_Fornamn}</td>
                                    <td>{pr.pr_Efternamn}</td>
                                    <td>{pr.pr_Adress}</td>
                                    <td>{pr.pr_PostNr}</td>
                                    <td>{pr.pr_Ort}</td>
                                    <td>{pr.pr_Telefon}</td>
                                    <td>
                                        <button onClick={() => this.delete(pr.pr_Id)}>Radera</button>
                                        <Link to={"edit/"+pr.pr_Id}>
                                            <input type="button" value="Ändra"/>
                                        </Link>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Subscribers