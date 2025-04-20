import { DoctorCard } from "./DoctorCard";
import { DoctorFilters } from "./DoctorFilters";
import { useAppointmentsStore } from "../../store/appointmentsStore";

export function DoctorDirectory() {
  const { filteredDoctors } = useAppointmentsStore();

  return (
    <div>
      <DoctorFilters />
      
      <div className="mt-8">
        {filteredDoctors.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <svg 
              className="mx-auto h-12 w-12 text-gray-400" 
              fill="none" 
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No doctors found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your filters to see more results.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 