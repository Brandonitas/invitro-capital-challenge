import { Doctor, Appointment, Specialty, TimeSlot } from '../types';

// Helper functions to generate IDs and dates
const generateId = () => Math.random().toString(36).substring(2, 10);

const generateAvailabilityDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

// Mock doctors data
export const mockDoctors: Doctor[] = [
  {
    id: generateId(),
    name: 'Dr. Sarah Johnson',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    specialty: 'Cardiology',
    rating: 4.8,
    availability: generateAvailabilityDates(),
    location: 'New York Medical Center',
  },
  {
    id: generateId(),
    name: 'Dr. Michael Chen',
    photo: 'https://randomuser.me/api/portraits/men/35.jpg',
    specialty: 'Dermatology',
    rating: 4.7,
    availability: generateAvailabilityDates(),
    location: 'Washington Health Clinic',
  },
  {
    id: generateId(),
    name: 'Dr. Emily Rodriguez',
    photo: 'https://randomuser.me/api/portraits/women/33.jpg',
    specialty: 'Pediatrics',
    rating: 4.9,
    availability: generateAvailabilityDates(),
    location: 'Children\'s Hospital',
  },
  {
    id: generateId(),
    name: 'Dr. James Wilson',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    specialty: 'Neurology',
    rating: 4.6,
    availability: generateAvailabilityDates(),
    location: 'Central Neurology Center',
  },
  {
    id: generateId(),
    name: 'Dr. Lisa Kumar',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    specialty: 'Orthopedics',
    rating: 4.5,
    availability: generateAvailabilityDates(),
    location: 'Sports Medicine Institute',
  },
  {
    id: generateId(),
    name: 'Dr. Robert Taylor',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    specialty: 'Psychiatry',
    rating: 4.4,
    availability: generateAvailabilityDates(),
    location: 'Mental Health Center',
  },
  {
    id: generateId(),
    name: 'Dr. Jennifer Miller',
    photo: 'https://randomuser.me/api/portraits/women/23.jpg',
    specialty: 'General Medicine',
    rating: 4.9,
    availability: generateAvailabilityDates(),
    location: 'Community Health Clinic',
  },
];

// List of specialties
export const specialties: Specialty[] = [
  'Cardiology',
  'Dermatology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'General Medicine',
];

// Mock time slots for appointments
export const getAvailableTimeSlots = (date: string): TimeSlot[] => {
  const times = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];
  
  return times.map(time => ({
    id: generateId(),
    time,
    date,
    isAvailable: Math.random() > 0.3, // 70% chance to be available
  }));
};

// Initial empty appointments array
export const initialAppointments: Appointment[] = []; 