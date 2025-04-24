'use client'

const LocationMap = () => {
  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=52.4068,-1.5197`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-52 md:h-72 rounded-lg xl:h-[624px]"
    />
  );
};

export default LocationMap;