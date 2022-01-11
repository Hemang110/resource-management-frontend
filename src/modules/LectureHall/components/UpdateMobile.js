import { useRef } from "react";
export default function UpdateMobile(){
    const oldphoneInputRef = useRef();
    const newphoneInputRef = useRef();
    const confphoneInputRef = useRef();
    const handleMobile = async (e) => {
        e.preventDefault();
        if(newphoneInputRef.current.value===confphoneInputRef.current.value){
        fetch("http://localhost:5000/lecturehall/profile/updatemobile", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            oldphone: oldphoneInputRef.current.value,
            newphone: newphoneInputRef.current.value,
          }),
        })
          .then((data) => {
            console.log(data);
            if (data.status===200) {
               alert("Successfully updated");
              }
            else{
                alert("Phone number not found");
            }
              
        });
      }
      else{
        alert("Confirm phone number and new phone number are not same");
    }
    };
      
      return(
        <div className="w-full max-w-xs m-auto mt-33">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Old Mobile number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="oldP"
              type="text"
              placeholder="9200001832"
              ref={oldphoneInputRef}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              New Mobile number
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="newP"
              type="text"
              placeholder="9333004044"
              ref={newphoneInputRef}
            />
            <p className="text-red-500 text-xs italic">
              Please enter new mobile number.
            </p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm new mobile number
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmE"
              type="email"
              placeholder="9333004044"
              ref={confphoneInputRef}
            />
            <p className="text-red-500 text-xs italic">
              Please confirm new phone number.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleMobile}
            >
              Change Mobile number
            </button>
          </div>
        </form>
      </div>
      );
      
}