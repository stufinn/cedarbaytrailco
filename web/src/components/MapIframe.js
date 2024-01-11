import React from "react"

const MapIframe = () => {
  return (
    <div className="grid my-10">
      <h2 className="pb-5 text-center font-bold  md:w-3/4 justify-self-center">
        The trail head can be found at the Cedar Bay Recreational Complex
      </h2>
      <iframe
        title="Cedar Bay Recreational Complex Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0776882767072!2d-91.93709088399076!3d50.103552820180035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52989b8d278bddff%3A0x738f9d8de95fb45b!2sCedar%20Bay%20and%20Friends!5e0!3m2!1sen!2sca!4v1609440688133!5m2!1sen!2sca"
        className="w-full h-96 "
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>
    </div>
  )
}

export default MapIframe
