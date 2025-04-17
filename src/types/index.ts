export interface Doctor {
  id: string;
  name: string;
  photo: string;
  specialty: string;
  rating: number;
  availability: string[];
  location: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  date: string;
  isAvailable: boolean;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
}

export type Specialty = 
  | 'Cardiology'
  | 'Dermatology'
  | 'Neurology'
  | 'Orthopedics'
  | 'Pediatrics'
  | 'Psychiatry'
  | 'General Medicine'; 