import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <>
      <h1 className="h-screen w-screen bg-rotion-900 text-rotion-100 flex ">
         
         <div className="flex flex-1 flex-col max-h-screen">


          <main className="flex-1 flex items-center justify-center text-rotion-100">
            {/* <Header /> */}
            <Outlet />
          </main>

         </div>
      </h1>
    </>
  )
}
