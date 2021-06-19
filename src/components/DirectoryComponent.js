import React, { Component } from 'react';
import { CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from  './CampsiteInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
       };
    }

    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }


        render() {
            const directory = this.props.campsites.map(campsite => {
                return (
                    <div key={campsite.id} className='col-md-5 m-1'>
                        <card onClick = {() => this.onCampsiteSelect(campsite)}>
                            <CardImg width='100%' src={campsite.image} alt={campsite.name} />
                            <CardImgOverlay>
                                <CardTitle>{campsite.name}</CardTitle>
                            </CardImgOverlay>
                        </card>
                    </div>
                );
            });
        
            return (
                <div className='container'>
                    <div className='row'>
                        {directory}
                    </div>
                    <CampsiteInfo campsite = {this.state.selectedCampsite}/>
                </div>
            );
        }
}
    export default Directory;























    // renderSelectedCampsite(campsite) {
     //   if (campsite) {
       //     return (
         //       <Card>
           //         <CardImg top src={campsite.image} alt={campsite.name} />
             //       <CardBody>
               //         <CardTitle>{campsite.name}</CardTitle>
                 //       <CardText>{campsite.description}</CardText>
                   // </CardBody>    
//                </Card>
//            );
//        }
//        return <div />;
//    }

//    render() {
//        const directory = this.props.campsites.map(campsites => {
  //          return (
//                <div key={campsites.id} className='col-md-5 m-1'>
//                    <Card onClick={() => this.onCampsiteSelect(campsites)}>
//                        <CardImg width='100%' src={campsites.image} alt={campsites.name} />
//                        <CardImgOverlay>
//                            <CardTitle>{campsites.name}</CardTitle>
//                        </CardImgOverlay>
//                    </Card>
//                </div>
//            );
//        });

//        return (
//            <div className='container'>
//                <div className='row'>
//                    {directory}
//                </div>
//                <div className='row'>
//                    <div className='col-md-5 m-1'>
//                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
//                    </div>
//                </div>    
//            </div>
//        );
//    }
//}

