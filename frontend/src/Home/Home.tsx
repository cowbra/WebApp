import React from 'react';
import axios from 'axios';
import './Login.css';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

interface Batiment{
    id: string;
    lien_api: string;
    materiau_result: string;
}

export default class Core extends React.Component<{}, Batiment> {
    constructor(props: any) {
        super(props);
        this.state = {
            id: "",
            lien_api: "",
            materiau_result: ""
        }
    }

    validateBatiment = async() =>{
        await axios.put<void>(`https://tucoenergie.hugo-sanchez.fr/api/bats/${this.state.id}`,{materiau_correct:true})
        this.getUntreatedBatiment()
    }

    notValidateBatiment = async() =>{
        await axios.put<void>(`https://tucoenergie.hugo-sanchez.fr/api/bats/${this.state.id}`,{materiau_correct:false})
        this.getUntreatedBatiment()
    }

    async getUntreatedBatiment(){
        const batiment = (await axios.get<Batiment>('http://localhost:5000/api/locations')).data
        this.setState(batiment)
    }








    render(){
        return(
            <div className="core">
                <div className="core-compo1">
                    <div className="p-1 mb-1 bg-light">
                            <p className="text1">Premier texte descriptif.</p>
                    </div>
                </div>
                <ul>
                </ul>
                <div className="row justify-content-center">
                    <div className="col-md-2 bg-light container-fluid py-3 rounded-4">
                        <p className="text2">2ème texte </p>
                        <img src={this.state.lien_api} alt='toit' className='core-img'/>
                    </div>
                    <div className="col-md-8 bg-light container-fluid py-3 rounded-4">
                        <p className="text1">Vérification du matériau donné par la BD TOPO.</p>
                        <p className="text3">ID bâtiment : <b>{this.state.id}</b></p>
                        <p className="text3">Matériau BD TOPO : <b>{this.state.materiau_result}</b></p>
                        <div className="row justify-content-start">

                            <div className="text-center">
                                <ButtonGroup className="button-group">
                                    <Button variant="outline-success" onClick={this.validateBatiment}>Valider</Button>
                                    <Button className="button-not-validated" variant="outline-danger" onClick={this.notValidateBatiment}>Ne pas valdier</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}