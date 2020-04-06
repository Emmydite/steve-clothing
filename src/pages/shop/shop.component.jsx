import React from 'react';
import {Route} from 'react-router-dom';
import { connect} from 'react-redux';
import {fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'; 
//import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPageContainer from '../collection/collection.container';



class ShopPage extends React.Component{ 

   componentDidMount(){
       const {fetchCollectionsStart} = this.props;
       fetchCollectionsStart();
    // const {updateCollections} = this.props;
    //  const collectionRef = firestore.collection('collections');
     
    // // this.unsubscribeFromSnapshop = collectionRef.onSnapshot( async snapshot => {
    // //   const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
    // //   updateCollections(collectionsMap);
    // //   this.setState({loading : false});
    // //  });
    // collectionRef.get().then(snapshot => {
    //     const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({loading : false});
    //    });
   }

 render(){
    const {match} = this.props;
    //const { loading } = this.state;
     return (

        <div className="shop-page">
           <Route exact 
           path={`${match.path}`} 
           component = {CollectionsOverviewContainer}/>

           <Route 
           path={`${match.path}/:collectionId`} 
           component={CollectionPageContainer}/>
        </div>
    
      );
 }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
    // updateCollections : collectionsMap => 
    //   dispatch(updateCollections(collectionsMap))
})


export default connect(
    null,
     mapDispatchToProps
     )(ShopPage);