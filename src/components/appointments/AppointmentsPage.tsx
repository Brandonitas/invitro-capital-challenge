import { useAppointmentsStore } from '../../store/appointmentsStore';
import { Link } from 'react-router-dom';

export const AppointmentsPage = () => {
  const { myAppointments } = useAppointmentsStore();

  return (
    <div className="min-h-screen bg-gray-100 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xl text-left font-bold text-gray-900">My Appointments</p>
          <p className="mt-2 text-sm text-gray-600 text-left">
            View and manage your upcoming appointments.
          </p>
        </div>

        {myAppointments.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-8 text-center">
            <p className="text-gray-500 text-md">You don't have any appointments yet.</p>
            <Link 
              to="/" 
              className="mt-4 inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Book an Appointment
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {myAppointments.map((appointment, index) => (
                <li key={index}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-teal-600 truncate">
                        Dr. {appointment.doctorName}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Confirmed
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {appointment.specialty}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>
                          {appointment.date} at {appointment.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage; 