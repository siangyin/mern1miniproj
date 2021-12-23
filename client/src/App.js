import {useState} from "react"
import './App.css';
import Axios from "axios"

function App() {

  const [name, setName] = useState()
	const [age, setAge] = useState();
	
  const addFriend = () => {
    console.log(name,age)
  }

  return (
		<div className="h-screen flex">
			<div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
				<div>
					<h1 className="text-white font-bold text-4xl font-sans">
						MERN MiniProj
					</h1>
					<p className="text-white mt-1">
						MongoDB | Mongoose | Express | React | Tailwindcss
					</p>
					<button
						type="submit"
						className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
					>
						Enter
					</button>
				</div>
			</div>
			<div className="flex w-1/2 justify-center items-center bg-white">
				<form className="bg-white">
					<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello! 👋🏻</h1>
					<p className="text-sm font-normal text-gray-600 mb-7">
						Add Friend here...
					</p>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						👤
						<input
							className="pl-2 outline-none border-none"
							type="text"
							name=""
							id=""
							placeholder="Name"
							onChange={(e) => {
								setName(e.target.value);
							}}
							// value={name}
						/>
					</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl">#️⃣
						<input
							className="pl-2 outline-none border-none"
							type="text"
							name=""
							id=""
							placeholder="Age"
							onChange={(e) => {
								setAge(e.target.value);
							}}
							// value={age}
						/>
					</div>
					<button
						type="button"
						className="block w-full bg-indigo-600  hover:bg-indigo-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
						onClick={addFriend}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;
