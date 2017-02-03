import { connect } from 'react-redux';
import { fetchFlights } from '../../actions/flightActions';
import FlightIndex from './flightIndex';

const mapStateToProps = ({flightIndex}) => ({
  flightIndex
});

const mapDispatchToProps = dispatch => ({
  fetchFlights: date => dispatch(fetchFlights(date))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlightIndex);
