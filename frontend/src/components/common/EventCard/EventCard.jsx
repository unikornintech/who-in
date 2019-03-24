import React from 'react';
// import PropTypes from 'prop-types';
// import Moment from 'moment';
import { Box, Image } from 'grommet';

// eslint-disable-next-line react/prefer-stateless-function
export default class EventCard extends React.Component {
  // static propTypes = {
  //     id: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //     time: PropTypes.instanceOf(Moment).isRequired,
  //     location: PropTypes.string.isRequired,
  //     date: PropTypes.instanceOf(Moment).isRequired,
  //     description: PropTypes.string.isRequired,
  //     attendees: PropTypes.arrayOf(PropTypes.object).isRequired,
  //     price: PropTypes.number.isRequired,
  //     max_attendees: PropTypes.number,
  //     min_attendees: PropTypes.number,
  //     expiration: PropTypes.instanceOf(Moment),
  //     category: PropTypes.arrayOf(PropTypes.string),
  //     imageUrl: PropTypes.string.isRequired,
  //     type: PropTypes.oneOf(['Public', 'Private']).isRequired
  // };

  // static defaultProps = {
  //     max_attendees: null,
  //     min_attendees: null,
  //     expiration: null,
  //     category: null
  // };

  render() {
    const {
      data: {
        // date,
        // time,
        title,
        imageUrl
        // host,
        // attendees,
        // max_attendees
      }
    } = this.props;
    return (
      <div className="win-event-card">
        <Box height="small" width="small">
          <Image fit="cover" src={imageUrl} />
        </Box>
        <div className="win-event-card-date">
          {/* {date},{time} */}
          Wednesday, March 27 2019, 7pm
        </div>
        <div className="win-event-card-title">{title}</div>
        <div className="win-event-card-host">
          David Goliath
          {/* {host} */}
        </div>
        <div>
          6 / 10
          {/* {attendees.length} / {max_attendees} */}
        </div>
      </div>
    );
  }
}
