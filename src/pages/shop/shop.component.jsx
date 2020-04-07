import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import { connect} from 'react-redux';
import {fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'; 
//import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPageContainer from '../collection/collection.container';



const ShopPage = ({fetchCollectionsStart, match}) => { 
    
   useEffect(() => {
      fetchCollectionsStart();
   },[fetchCollectionsStart])


    //const {match} = this.props;
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


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
    // updateCollections : collectionsMap => 
    //   dispatch(updateCollections(collectionsMap))
})


export default connect(
    null,
     mapDispatchToProps
     )(ShopPage);