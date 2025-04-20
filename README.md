# Healthcare Appointment Booking UI

A responsive and accessible appointment booking UI for a healthcare platform, built with React, TypeScript, and Tailwind CSS.

## Features

- **Doctor Directory**: Browse and filter doctors by specialty and availability
- **Booking Modal**: Select available time slots to book appointments
- **Appointments Summary**: View all your booked appointments
- **Fully Responsive**: Works on mobile, tablet, and desktop
- **Accessible**: ARIA attributes, keyboard navigation, and semantic HTML

## Setup Instructions

1. Clone the repository
```bash
git clone [repository-url]
cd healthcare-appointment-booking
```

2. Install dependencies
```bash
yarn install
```

3. Start the development server
```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- **React**: For building the UI components
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Zustand**: For state management
- **Vite**: For fast development and building

## AI Tool Usage

AI-assisted coding tools were used to accelerate development:

- **Component Scaffolding**: Generate boilerplate component structures
- **Mock Data Creation**: Generate realistic doctor data and appointment structures
- **Accessibility Improvements**: Suggest ARIA attributes and semantic HTML
- **Responsive Design**: Provide Tailwind CSS class suggestions for responsive layouts

## Known Limitations & Next Steps

- **Persistent Storage**: Currently, appointments are stored in memory and lost on refresh
- **Authentication**: No user authentication is implemented
- **Doctor Search**: Could add search by name or keyword
- **Form Validation**: Add validation for appointment booking
- **Appointment Management**: Add ability to cancel or reschedule appointments
- **Notifications**: Add email/SMS notification system for appointment reminders

## License

MIT
