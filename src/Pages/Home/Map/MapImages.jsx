import React from "react";

const MapImages = () => {
  return (
    <section id="map">
      <h3 className="text-center text-4xl font-semibold mb-5">
        Find us on Map
      </h3>
      <iframe
        className="w-full h-[250px] md:h-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d160214.0027165248!2d-92.72148989236716!3d38.81421371602735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDQ3JzA2LjkiTiA5MsKwMzgnMzkuOSJX!5e0!3m2!1sen!2sbd!4v1691402380160!5m2!1sen!2sbd"
      ></iframe>
    </section>
  );
};

export default MapImages;
