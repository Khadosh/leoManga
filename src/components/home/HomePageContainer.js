import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomePage from './HomePage';
import * as actions from '../../redux/homePage/HomePageActions';

const mapStateToProps = state => ({
  mangaList: state.homePage.mangaList,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
