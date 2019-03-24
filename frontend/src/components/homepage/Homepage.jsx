import React from 'react';
import PropTypes from 'prop-types';
import LazyHero from 'react-lazy-hero';

import EventCard from '../common/EventCard';

export default class Homepage extends React.Component {
  static propTypes = {
    fetchEvents: PropTypes.func.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    const { fetchEvents } = this.props;
    fetchEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <div className="win-homepage">
        <LazyHero imageSrc="https://unsplash.it/2000/1000">
          <h1>Generic Startup Hype Headline</h1>
        </LazyHero>
        {events.length &&
          events.map(event => <EventCard key={event.id} data={event} />)}
      </div>
    );
  }
}
