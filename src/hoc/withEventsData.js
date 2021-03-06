import axios from 'axios';
import React, { useEffect, useState } from 'react';

const withEventsData = (WrappedComponent, group) => {
  return function WithEventsDataWrapper() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      axios.get(`/events/${group}`).then(({ data }) => setEvents(data));
    }, []);

    return <WrappedComponent events={events} />;
  };
};

export const DisplayEvents = (props) => {
  return (
    <div>
      Log events
      {console.log(props)}
    </div>
  );
};

export const DisplayEventsData = withEventsData(DisplayEvents, 'A');

export default withEventsData;
