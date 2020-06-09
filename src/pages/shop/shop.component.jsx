import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
// import CollectionPage from '../collection/collection.component';
import CollectionPageContainer from '../collection/collection.container';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route 
        exact 
        path={`${match.path}`} 
        // render={props => (<CollectionsOverviewWithSpinner isLoading={isFetchingCollections} {...props} />)}
        component={CollectionsOverviewContainer}
      />
      <Route 
        path={`${match.path}/:collectionId`} 
        // render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} 
        component={CollectionPageContainer}
      />
    </div>
  )
};

// const mapStateToProps = createStructuredSelector({
//   isFetchingCollections: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// })

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);