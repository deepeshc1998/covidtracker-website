import React , {Component} from 'react';
import Axios from 'axios';
import {Accordion, Card, Button} from 'react-bootstrap';

class Statedata extends Component{

  constructor(){
    super();
    this.state = {
      stateData: {}
    }
  }
  componentDidMount(){
    Axios.get("https://api.covid19india.org./state_district_wise.json").then(response =>{
      this.setState( {stateData : response.data} );
    });

  }


  render(){
    let keys = Object.keys(this.state.stateData);
    return(
      <div className="row">
        <div className="col-md-12">
        <Accordion>
        {
          keys.map((itm,ky) =>{
            let districts = this.state.stateData[itm].districtData;
            let district_keys= Object.keys(districts);
            let total_active = 0;
            let total_confirmed = 0;
            let total_recovered = 0;
            let total_deaths = 0;

            let districts_list =[];

            for(let x in districts){
              total_active += districts[x].active;
              total_confirmed += districts[x].confirmed;
              total_recovered += districts[x].recovered;
              total_deaths += districts[x].deaths;
              let ob = districts[x];
              ob["district_name"] = x;
              districts_list.push(ob);
            }

            return(
              <Accordion.Item eventKey={ky}>
                <Accordion.Header>{itm} -<span className="btn-dark p-1 mr-2">Total Cases-{total_confirmed}</span> <span className="btn-dark p-1 mr-2">Active-{total_active}</span><span className="btn-dark p-1 mr-2"> Recovered-{total_recovered}</span><span className="btn-dark p-1 mr-2"> Deaths-{total_deaths}</span></Accordion.Header>
                <Accordion.Body>
                    <table className="table table-bordered table-stripped">
                    <thead>
                    <tr>
                    <td>District</td>
                    <td>Confirmed</td>
                    <td>Active</td>
                    <td>Recovered</td>
                    <td>Deaths</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      districts_list.map((itm,ky)=>{
                        return(
                          <tr>
                      <td>{itm.district_name}</td>
                      <td>{itm.confirmed}</td>
                        <td>{itm.active}</td>
                          <td>{itm.recovered}</td>
                            <td>{itm.death}</td>

                          </tr>



                        )
                      })

                  }
                    </tbody>
                    </table>
                </Accordion.Body>
              </Accordion.Item>

            )
          } )
        }

</Accordion>
        </div>
      </div>
)
}}

export default Statedata;
