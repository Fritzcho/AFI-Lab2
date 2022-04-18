import React from 'react'
import './feed.css'

class Feed extends React.Component {
    state = {
        advertisements: [],
    }

    checkPayed(ad_Price) {
        if (ad_Price === 40) {
            return "Betald";
        } else {
            return "Ej betald";
        }
    }
    refreshList() {
        fetch("https://localhost:7277/api/ads")
        .then(response=>response.json())
        .then(data=>{
            this.setState({advertisements:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        return(
            <div className='afi__feed'>
                <div className='afi__feed--contents'>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Titel
                                </th>
                                <th>
                                    Innehåll
                                </th>
                                <th>
                                    Annonsör
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.advertisements.map(ad=>
                                <tr key={ad.ad_Id}>
                                    <td>{ad.ad_Title}</td>
                                    <td>{ad.ad_Content}</td>   
                                    <td>{this.checkPayed(ad.ad_Price)}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Feed