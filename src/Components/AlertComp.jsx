import { useState,useEffect } from "react"

const AlertComp = ({message}) => {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (message) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Sembunyikan alert setelah 3 detik
    }
  }, [message]);

  const handleAlertClose = () => {
    setShowAlert(false);
  };
   return (
    <>
   {showAlert && (
    <Alert className="d-flex align-items-center" variant="success"><span className="closeAlert d-flex align-items-center fs-2 pe-2 fw-semibold" onClick={handleAlertClose}>&times;</span>{message}</Alert>
   )} 
   </>
)
}
export default AlertComp