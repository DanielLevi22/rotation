import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <h1 className="h-screen w-screen bg-rotion-900 text-rotion-100 flex ">
         <Sidebar />
         <div className="flex flex-1 flex-col max-h-screen">


          <main className="flex-1 flex items-center justify-center text-rotion-100">
            Select or create a note

          </main>

         </div>
      </h1>
    </>
  )
}
