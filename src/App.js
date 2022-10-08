import React from 'react';


/*const fetch = require('node-fetch');

 

 
function getUrlForUser(){
    return 'https://us-central1-impressive-rig-364421.cloudfunctions.net/function-1'

}

exports.myFunction =async (req, res) => {

    const response = await fetch(getUrlForUser());
    const responseObjet = await response.json();
    const avatarUrl = responseObjet.avatarUrl;
    res.redirect(avatarUrl);

}
 
*/
class Apps extends React.Component {

    
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }




 
    componentDidMount() {
    
        fetch('https://us-central1-impressive-rig-364421.cloudfunctions.net/function-1', {
            mode: 'no-cors',
            method: "post",
            headers: {
                 "Content-Type": "application/json"
            } 
            })  
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

 
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
        return <div>Loading...</div>;

    return (
        <div className="App">
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        Liga: {item.liga} | Equipo: {item.equipo}
                    </li>
                ))}
            </ul>
        </div>
    );

}

}
 
export default Apps;