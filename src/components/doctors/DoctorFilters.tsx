import { useAppointmentsStore } from '../../store/appointmentsStore';
import { specialties } from '../../data/mockData';
import Button from '../ui/button';

export function DoctorFilters() {

  const { filterSpecialty, filterAvailability, resetFilters, setFilterSpecialty, setFilterAvailability } = useAppointmentsStore();
  
  // Generate date options for next 7 days
  const dateOptions = () => {
    const options = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      const displayDate = new Intl.DateTimeFormat('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      }).format(date);
      
      options.push({ value: dateString, label: displayDate });
    }
    
    return options;
  };

  const clearFilters = () => {
    resetFilters();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 relative">
        <h3 className="text-lg font-medium text-gray-900 mb-2 sm:mb-0">Filter Doctors</h3>
        {(filterSpecialty || filterAvailability) && (
          <Button 
            onClick={clearFilters}
            variant="primary"
            aria-label="Clear all filters"
            className="absolute right-0"
          >
            Clear All
          </Button>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <label htmlFor="specialty-filter" className="block text-sm font-medium text-gray-700 mb-1 text-left">
            Specialty
          </label>
          <select
            id="specialty-filter"
            value={filterSpecialty || ''}
            onChange={(e) => {
              setFilterSpecialty(e.target.value || null);
            }}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 p-2 text-sm"
            aria-label="Filter by specialty"
          >
            <option value="">All Specialties</option>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
        
        <div className="w-full sm:w-1/2">
          <label htmlFor="availability-filter" className="block text-sm font-medium text-gray-700 mb-1 text-left">
            Available Date
          </label>
          <select
            id="availability-filter"
            value={filterAvailability || ''}
            onChange={(e) => setFilterAvailability(e.target.value || null)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 p-2 text-sm"
            aria-label="Filter by availability"
          >
            <option value="">Any Date</option>
            {dateOptions().map((date) => (
              <option key={date.value} value={date.value}>
                {date.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 