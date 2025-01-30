import React, { useEffect, useState } from "react";

export default function Alert({ message }) {
  const [show, setShow] = useState(true); // State to control alert visibility
  const currentTime = new Date().toLocaleTimeString(); // Fetch current time

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000); // Hide alert after 5 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    message &&
    show && (
      <div className="alert alert-success" role="alert">
        Joining successfully at {currentTime}: {message}
      </div>
    )
  );
}
