import toast from "react-hot-toast";// Receiving toast


const WelcomeUser = (name, toastHandler = toast) => {
  //toast function for welcome user
  toastHandler.success(`Welcome back ${name !== "Unnamed"? name : " "}!`, {
    style: {
      background: '#8B0000',
      color: '#ffcccb',
    },
  })
}




export default WelcomeUser
