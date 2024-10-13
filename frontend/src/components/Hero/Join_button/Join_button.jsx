import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import './join_button.css'
const Join_button = () => {
  return (
    <div>
        <div className="join_now_button">
        <RouterLink to="/register"><button className="join_button">Join Now</button>
        </RouterLink>
        </div>
    </div>
  );
};

export default Join_button;
