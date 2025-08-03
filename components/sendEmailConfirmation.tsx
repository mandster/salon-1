import emailjs from 'emailjs-com';
import { Alert, Platform, ToastAndroid } from 'react-native';

const sendEmailConfirmation = async (booking: {
  name: string;
  service: string;
  salon: string;
  time: string | number | Date;
}) => {
  try {
    await emailjs.send(
      'service_jfz0fiv',
      'template_dhd5tum',
      {
        user_name: booking.name,
        service_name: booking.service,
        salon_name: booking.salon,
        booking_time: new Date(booking.time).toLocaleString(),
      },
      'qannae3Dv_syM3uRj'
    );

    const msg = '📧 Confirmation email sent!';
    Platform.OS === 'android'
      ? ToastAndroid.show(msg, ToastAndroid.SHORT)
      : Alert.alert('Success', msg);
  } catch (error) {
    console.error('EmailJS Error:', error);
    const errMsg = '❌ Failed to send confirmation email.';
    Platform.OS === 'android'
      ? ToastAndroid.show(errMsg, ToastAndroid.SHORT)
      : Alert.alert('Error', errMsg);
  }
};

export default sendEmailConfirmation;
