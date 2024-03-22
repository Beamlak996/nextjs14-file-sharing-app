import { Sidebar } from "./_components/sidebar"
import { TopHeader } from "./_components/top-header";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <div className="h-full md:w-64 flex-col fixed inset-y-0 z-[50] hidden md:flex">
        <Sidebar />
      </div>
      <div className="md:ml-64" >
        <TopHeader />
        {children}
      </div>
    </>
  );
}

export default DashboardLayout