import { Sidebar } from "./_components/sidebar"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <div className="h-full md:w-64 flex-col fixed inset-y-0 z-[50]">
        <Sidebar />
      </div>
      <div className="md:ml-64" >
        {children}
      </div>
    </>
  );
}

export default DashboardLayout