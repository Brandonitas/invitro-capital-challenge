import { create } from 'zustand';
import { Appointment, Doctor } from '../types';
import { mockDoctors } from '../data/mockData';

interface AppointmentsStore {
  filterSpecialty: string | null;
  setFilterSpecialty: (specialty: string | null) => void;
  filterAvailability: string | null;
  setFilterAvailability: (availability: string | null) => void;
  resetFilters: () => void;
  openBookingModal: (doctor: Doctor) => void;
  selectedDoctor: Doctor | null;
  filteredDoctors: Doctor[];
  closeBookingModal: () => void;
  myAppointments: Appointment[];
  setMyAppointments: (appointments: Appointment[]) => void;
}

export const useAppointmentsStore = create<AppointmentsStore>((set) => ({
  selectedDoctor: null,
  openBookingModal: (doctor: Doctor) => set({ selectedDoctor: doctor }),
  filterSpecialty: null,
  setFilterSpecialty: (specialty: string | null) => 
    set(state => {
      const updatedState = { filterSpecialty: specialty };
      const { filterSpecialty, filterAvailability } = { ...state, ...updatedState };
      
      return {
        ...updatedState,
        filteredDoctors: mockDoctors.filter(doctor => {
          // Filter by specialty if a specialty filter is selected
          if (filterSpecialty && doctor.specialty !== filterSpecialty) {
            return false;
          }
          
          // Filter by availability if an availability date is selected
          if (filterAvailability && !doctor.availability.includes(filterAvailability)) {
            return false;
          }
          
          return true;
        })
      };
    }),
  filterAvailability: null,
  setFilterAvailability: (availability: string | null) => 
    set(state => {
      const updatedState = { filterAvailability: availability };
      const { filterSpecialty, filterAvailability } = { ...state, ...updatedState };
      
      return {
        ...updatedState,
        filteredDoctors: mockDoctors.filter(doctor => {
          // Filter by specialty if a specialty filter is selected
          if (filterSpecialty && doctor.specialty !== filterSpecialty) {
            return false;
          }
          
          // Filter by availability if an availability date is selected
          if (filterAvailability && !doctor.availability.includes(filterAvailability)) {
            return false;
          }
          
          return true;
        })
      };
    }),
  resetFilters: () => 
    set({
      filterSpecialty: null,
      filterAvailability: null,
      filteredDoctors: mockDoctors
    }),
  filteredDoctors: mockDoctors,
  closeBookingModal: () => set({ selectedDoctor: null }),
  myAppointments: [],
  setMyAppointments: (appointments: Appointment[]) => set({ myAppointments: appointments })
}));