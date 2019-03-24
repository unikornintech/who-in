import { connect } from 'react-redux';
import Homepage from './Homepage';
import { fetchEvents } from '../../actions/eventActions';

const mapStateToProps = state => {
  const { events = [] } = state;
  return {
    events
  };
};

const mapDispatchToProps = { fetchEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
