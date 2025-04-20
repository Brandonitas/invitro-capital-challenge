import { Doctor } from '../../types';
import { useAppointmentsStore } from '../../store/appointmentsStore';
import Button from '../ui/button';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const { openBookingModal } = useAppointmentsStore();
  
  // Format availability dates for display
  const formatAvailabilityDates = () => {
    if (doctor.availability.length === 0) return 'No availability';
        
    // Use UTC date parsing to avoid timezone issues
    const firstDateParts = doctor.availability[0].split('-').map(Number);
    const lastDateParts = doctor.availability[doctor.availability.length - 1].split('-').map(Number);
    
    // Create date objects with the correct values (month is 0-indexed in JavaScript)
    const firstDate = new Date(firstDateParts[0], firstDateParts[1] - 1, firstDateParts[2]);
    const lastDate = new Date(lastDateParts[0], lastDateParts[1] - 1, lastDateParts[2]);
    
    // Format dates
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    const firstFormatted = firstDate.toLocaleDateString('en-US', options);
    const lastFormatted = lastDate.toLocaleDateString('en-US', options);
    
    return `${firstFormatted} - ${lastFormatted}`;
  };
  
  // Generate stars for rating
  const renderRatingStars = () => {
    const stars = [];
    const rating = Math.round(doctor.rating * 2) / 2; // Round to nearest 0.5
    
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full star
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i - 0.5 === rating) {
        // Half star
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-star-${doctor.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill={`url(#half-star-${doctor.id})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        // Empty star
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    
    return (
      <div className="flex items-center" aria-label={`Rating: ${doctor.rating} out of 5 stars`}>
        {stars}
        <span className="ml-1 text-sm text-gray-600">{doctor.rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
      <div className="p-4">
        <div className="flex items-start">
          <img 
            src={doctor.photo} 
            alt={`Dr. ${doctor.name}`}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 text-left">{doctor.name}</h3>
            <p className="text-sm text-blue-600 text-left">{doctor.specialty}</p>
            {renderRatingStars()}
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Available: {formatAvailabilityDates()}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{doctor.location}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <Button
            onClick={() => openBookingModal(doctor)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            aria-label={`Book appointment with ${doctor.name}`}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
} 