import './css/Timeline.css'; // Import the custom CSS for animations

const Timeline = ({ events }) => {
    return (
      <div className="timeline-container w-[95%] mx-auto relative flex overflow-x-auto py-6 space-x-12">
        {events.map((event, index) => (
          <div key={index} className="timeline-item flex flex-col items-center text-center">
            {/* Dot with color */}
            <div className="relative mb-2">
              <div
                className="dot w-6 h-6 rounded-full"
                style={{
                  backgroundColor: event.color || '#000',
                  boxShadow: `0 0 8px ${event.color || '#000'}`,
                }}
              ></div>
              {/* Horizontal connecting line */}
              {index !== events.length - 1 && (
                <div className="line absolute top-3 left-full w-24 h-1 bg-gray-300"></div>
              )}
            </div>
  
            {/* Event Content */}
            <div className="w-32">
              <h3 className="text-sm font-semibold text-gray-800">{event.title}</h3>
              <p className="text-xs text-gray-500">{event.date}</p>
              <p className="mt-1 text-gray-700 text-xs">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default Timeline;


// <div className="container w-full mt-8 p-16 border border-grey-500">
//       <h1 className="text-2xl font-bold mb-4">Sabarimala Schedule</h1>
//       <Timeline events={events} />
//     </div>


// const events = [
//     {
//       title: 'Project Initiation',
//       date: 'Jan 1, 2023',
//       description: 'The project was initiated with the initial concept and idea generation.',
//       color: '#F97316', // Orange
//     },
//     {
//       title: 'Phase 1 Completion',
//       date: 'Mar 1, 2023',
//       description: 'The first phase of development was completed, covering the core features.',
//       color: '#3B82F6', // Blue
//     },
//     {
//       title: 'Beta Launch',
//       date: 'Jun 15, 2023',
//       description: 'The project was launched in beta for user testing and feedback.',
//       color: '#10B981', // Green
//     },
//     {
//       title: 'Official Release',
//       date: 'Sep 1, 2023',
//       description: 'The final version was officially released with improvements and new features.',
//       color: '#EF4444', // Red
//     },
//   ];