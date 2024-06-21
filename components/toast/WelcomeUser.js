// Importing necessary libraries
import toast from "react-hot-toast";

// WelcomeUser component
const WelcomeUser = (name, toastHandler = toast) => {
  // Toast function for welcoming the user
  // If the name is not provided, it defaults to an empty string
  toastHandler.success(`Welcome back ${name !== "Unnamed" ? name : " "}!`, {
    style: {
      background: '#8B0000',
      color: '#ffcccb',
    },
  })
}

// Exporting the WelcomeUser component
export default WelcomeUser;