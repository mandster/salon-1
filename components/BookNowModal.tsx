// components/sendEmailConfirmation.ts
import emailjs from 'emailjs-com';
import { ToastAndroid } from 'react-native';

const sendEmailConfirmation = (booking: any) => {
  emailjs.send(
    'service_jfz0fiv',
    'template_dhd5tum',
    {
      user_name: booking.name,
      service_name: booking.service,
      salon_name: booking.salon,
      booking_time: new Date(booking.time).toLocaleString(),
    },
    'qannae3Dv_syM3uRj'
  )
  .then(() => {
    ToastAndroid.show('📧 Confirmation email sent!', ToastAndroid.SHORT);
  })
  .catch((err) => {
    console.error('EmailJS error:', err);
  });
};

export default sendEmailConfirmation;
