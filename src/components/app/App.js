import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/actionCreators';
import Main from '../../pages/Main';
import './App.css';

function mapStateToProps(state) {
  return {
    search: state.search,
    sort: state.sort,
    speed: state.speed,
    tabControl: state.tabControl
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
