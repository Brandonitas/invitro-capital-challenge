import { DoctorDirectory } from '../components/doctors/DoctorDirectory';
import BookingModal from '../components/modals/BookingModal';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <main>
          <DoctorDirectory />
        </main>
        <BookingModal />
      </div>
    </div>
  );
};

export default HomePage; 