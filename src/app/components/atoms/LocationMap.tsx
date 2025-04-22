'use client'

const LocationMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.1234567890123!2d-1.5197!3d52.4068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCoventry!5e0!3m2!1sen!2suk!4v1234567890&markers=color:red%7C52.4068,-1.5197"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-52"
    />
  );
};

export default LocationMap;