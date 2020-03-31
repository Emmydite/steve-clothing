import React from 'react';
import {Route} from 'react-router-dom';
import { connect} from 'react-redux';
import {updateCollections } from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';


const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component{ 
    state = {
     loading : true
    };

   unsubscribeFromSnapshop = null;

   componentDidMount(){
    const {updateCollections} = this.props;
     const collectionRef = firestore.collection('collections');
     
    // this.unsubscribeFromSnapshop = collectionRef.onSnapshot( async snapshot => {
    //   const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading : false});
    //  });
    collectionRef.get().then(snapshot => {
        const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({loading : false});
       });
   }

 render(){
    const {match} = this.props;
    const { loading } = this.state;
     return (

        <div className="shop-page">
           <Route exact 
           path={`${match.path}`} 
           render = {(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
           <Route 
           path={`${match.path}/:collectionId`} 
           render = {(props) => <CollectionsPageWithSpinner isLoading={loading} {...props}/>}/>
        </div>
    
      );
 }
}

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => 
      dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);