
import './App.css';

function App() {
  return (
<div class="h-screen flex">
  <div class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
    <div>
      <h1 class="text-white font-bold text-4xl font-sans">MERN MiniProj</h1>
      <p class="text-white mt-1">MongoDB | Mongoose | Express | React | Tailwindcss</p>
      <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Enter</button>
    </div>
  </div>
  <div class="flex w-1/2 justify-center items-center bg-white">
    <form class="bg-white">
      <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello! 👋🏻</h1>
      <p class="text-sm font-normal text-gray-600 mb-7">Add Friend here...</p>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        👤
        <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Name" />
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
        #️⃣
        <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Age" />
      </div>
      <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Submit</button>
    </form>
  </div>
</div>
  );
}

export default App;
