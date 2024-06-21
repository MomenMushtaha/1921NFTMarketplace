// Importing necessary libraries
import toast from "react-hot-toast";

// Loading component
const Loading = (toastHandler = toast) => {
  // Promise that resolves after 15 seconds
  const resolveAfter3sec  = new Promise((resolve, reject) => {
    setTimeout(resolve, 15000);
  });

  // Toast function for displaying loading, success, and reject messages
  toastHandler.promise(resolveAfter3sec, {
    loading: 'Transaction pending... \n Please wait.',
    success: 'Transaction complete',
    reject: "Insufficient Funds",
  });
}

// Exporting the Loading component
export default Loading;