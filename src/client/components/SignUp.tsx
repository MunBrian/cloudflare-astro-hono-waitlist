import React from "react";
import {Mail} from "lucide-react"

const SignUp = () => {
  return (
    <div className="join">
      <div>
        <label className="input validator join-item">
            <Mail className="text-neutral-content" size={20} />
          <input type="email" placeholder="mail@site.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>
      <button className="btn btn-success join-item">Join</button>
    </div>
  );
};

export default SignUp;
