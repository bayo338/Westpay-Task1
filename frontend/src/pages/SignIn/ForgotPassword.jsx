import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
      <div className="w-full max-w-md bg-transparent p-8 rounded-lg">
        <h1 className="text-center text-2xl font-semibold mb-8">Forgot Password</h1>
        <p className="text-gray-400 mb-8 text-sm">Please fill out the form below using the email address linked to the banxli account. In addition to logging out of lost devices changing a lost password places a 72-hour hold on cryptocurrency withdrawals</p>

        <form className="space-y-6">
            <div>
                <label className="block mb-2 text-sm text-gray-300">Email</label>
                <input type="email" placeholder="johndoe@example.com" className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-800 focus:ouline-none focus:ring-2 focus:ring-yellow-500" required/>
            </div>

            <Link to="/new-password">
              <button
              type="submit"
              className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
            >
              Continue
              </button> 
            </Link>
        
        </form>
    </div>
    );    
}