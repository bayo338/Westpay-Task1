export default function NewPassword() {
    return (
        <div className="w-full max-w-md p-8 bg-tranparent rounded-lg">
            <h1 className="text-center text-2xl font-semibold mb-8">Let's create a new password</h1>
            <form className="space-y-6">
                <label className="block mb-2 text-sm text-gray-300">Password</label>
                <input type="password" className="w-full px-4 py-3 pr-10 rounded md bg-black text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500" />

                <button className="bg-yellow-500 w-full text-black py-3 rounded-md font-semibold hover:bg-yellow-600 transition">Reset your password</button>
            </form>
        </div>
    )
}