import conf from "../conf/conf";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signInWithGoogle } = UserAuth();
  const [displayName, setDisplayName] = useState("");
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    // Check if currentUser exists
    if (currentUser) {
      const fetchUserData = async () => {
        try {
          const { displayName, uid, email } = currentUser;

          // Update state with user details
          setDisplayName(displayName);
          setUid(uid);
          setEmail(email);

          // Send user details to Strapi API using Axios
          const response = await axios.post(`${conf.SERVER_API_URL}/accounts`, {
            data: {
              uid: uid,
              Username: displayName,
              Email: email,
            },
          });

          //   console.log("Data from Strapi API:", response.data);

          // Navigate to another page after sending data
          navigate("/Chat");
        } catch (error) {
          console.error("Error sending user data to Strapi API:", error);
        }
      };

      // Call fetchUserData function
      fetchUserData();
    }
  }, [currentUser, navigate]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Strapi ChatRoom</h1>
          <p className="py-6">
            Join the conversation, meet new people, and make connections in one
            shared room.
          </p>
          <button onClick={handleLogin} className="btn btn-primary">
            LOGIN WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
