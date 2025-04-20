import Modal from './Modal';
import { useAppointmentsStore } from '../../store/appointmentsStore';
import { getAvailableTimeSlots } from '../../data/mockData';
import { useState } from 'react';
import Button from '../ui/button';

const BookingModal = () => {
    const { 
        selectedDoctor, 
        closeBookingModal, 
        myAppointments,
        setMyAppointments
      } = useAppointmentsStore();

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSelectTime = (time: string) => {
        setSelectedTime(time);
        setShowConfirmation(true);
    };

    const handleBack = () => {
        setShowConfirmation(false);
        setSelectedTime('');
    };

    const handleConfirm = () => {
        setMyAppointments([...myAppointments, {
            id: '',
            doctorId: selectedDoctor?.id || '',
            doctorName: selectedDoctor?.name || '',
            specialty: selectedDoctor?.specialty || '',
            date: selectedDate || '',
            time: selectedTime || '',
            location: selectedDoctor?.location || ''
        }]);
        setShowConfirmation(false);
        setSelectedDate('');
        closeBookingModal();
    };

  return (
      <Modal
        isOpen={selectedDoctor !== null}
        onClose={closeBookingModal}
        title={`Book Appointment with ${selectedDoctor?.name}`}
      >
        <div className="">
            <div className="inline-block align-bottom rounded-lg text-left overflow-hidden transform transition-all w-full">
                <div className="px-1">
                    {!showConfirmation ? (
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                <div className="mb-4">
                                    <label htmlFor="date-select" className="block text-sm font-medium text-gray-700 mb-1">
                                    Select Date
                                    </label>
                                    <select
                                        id="date-select"
                                        value={selectedDate || ''}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 text-black"
                                        aria-label="Select appointment date"
                                    >
                                        <option value="">Select a date</option>
                                        {selectedDoctor?.availability.map((date) => {
                                            const displayDate = new Date(date).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                month: 'short',
                                                day: 'numeric'
                                            });
                                            return (
                                                <option key={date} value={date}>
                                                    {displayDate}
                                                </option>
                                            );
                                        })}
                                    </select>

                                    {selectedDate && <div className="mt-4">
                                        <h4 className="text-sm font-medium text-gray-700 mb-2">Select Time</h4>
                                        <div className="grid grid-cols-3 gap-2">
                                            {getAvailableTimeSlots(selectedDate || selectedDoctor?.availability[0] || '').map((slot) => (
                                                <button
                                                    key={slot.id}
                                                    onClick={() => slot.isAvailable && handleSelectTime(slot.time)}
                                                    disabled={!slot.isAvailable}
                                                    className={`py-2 px-3 text-sm font-medium rounded-md transition ${
                                                        slot.isAvailable
                                                        ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                                    }`}
                                                    aria-label={`Book appointment at ${slot.time} ${
                                                        slot.isAvailable ? '' : '(unavailable)'
                                                    }`}
                                                >
                                                    {slot.time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Confirm Your Appointment</h3>
                                
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-700">Doctor</h4>
                                    <p className="text-gray-900">{selectedDoctor?.name}</p>
                                    <p className="text-sm text-gray-500">{selectedDoctor?.specialty}</p>
                                </div>
                                
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-700">Date & Time</h4>
                                    <p className="text-gray-900">
                                        {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }) : ''}
                                    </p>
                                    <p className="text-gray-900">{selectedTime}</p>
                                </div>
                            </div>
                            
                            <div className="flex justify-between mt-6">
                                <Button
                                    variant='outline'
                                    onClick={handleBack}
                                    aria-label="Back to appointment selection"
                                >
                                    Back
                                </Button>
                                <Button
                                    onClick={handleConfirm}
                                    aria-label="Confirm appointment"
                                >
                                    Confirm Appointment
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </Modal>
  );
}

export default BookingModal;