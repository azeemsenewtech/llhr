// import React from 'react';
// import { 
//   LayoutDashboard, 
//   PlusCircle, 
//   Home, 
//   Mail, 
//   FileText, 
//   DollarSign, 
//   TrendingUp, 
//   Folder, 
//   MessageSquare, 
//   Settings, 
//   LogOut 
// } from 'lucide-react';


// const Sidebar = () => {
//   // Configuration for the main menu items
//   const menuItems = [
//     { name: 'Dashboard', icon: LayoutDashboard, active: true },
//     { name: 'List New Property', icon: PlusCircle, active: false },
//     { name: 'My Properties', icon: Home, active: false },
//     { name: 'Offers Received', icon: Mail, active: false },
//     { name: 'Contracts', icon: FileText, active: false },
//     { name: 'Payments', icon: DollarSign, active: false },
//     { name: 'Financial Insights', icon: TrendingUp, active: false },
//     { name: 'Documents', icon: Folder, active: false },
//     { name: 'Messages', icon: MessageSquare, active: false },
//   ];

//   return (
//     <div className="min-h-screen w-[280px] bg-[#1787B1] text-white flex flex-col p-5 font-sans rounded-r-3xl">
      
//       {/* Logo Section */}
//       <div className="flex items-center justify-center gap-3 p-8 mb-10 mt-4">
      
//       <img className='h-10 ' src="/assets/image/logo.png" alt='logo'/>
//       </div>

//       {/* Main Navigation */}
//       <div className="flex-1 overflow-y-scroll scrollbar-hide  flex flex-col gap-2">
//         {menuItems.map((item, index) => (
//           <button
//             key={index}
//             className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group
//               ${item.active 
//                 ? 'bg-white text-[#1787B1] font-semibold shadow-sm' 
//                 : 'text-white hover:bg-white/10'
//               }`}
//           >
//             <item.icon 
//               size={20} 
//               className={item.active ? 'text-[#1787B1]' : 'text-white'} 
//               strokeWidth={2}
//             />
//             <span className="text-[15px]">{item.name}</span>
//           </button>
//         ))}
//       </div>

//       {/* Divider */}
//       <div className="h-px bg-white/20 w-full my-4"></div>

//       {/* Bottom Actions */}
//       <div className="flex flex-col gap-2 mb-4">
//         <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
//           <Settings size={20} strokeWidth={2} />
//           <span className="text-[15px]">Setting</span>
//         </button>

//         <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
//           <LogOut size={20} strokeWidth={2} />
//           <span className="text-[15px]">Logout</span>
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Home, 
  Mail, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  Folder, 
  MessageSquare, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Configuration for the main menu items
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'List New Property', icon: PlusCircle, path: '/dashboard/listItem' },
    { name: 'My Properties', icon: Home, path: '/dashboard/my-property' },
    { name: 'Offers Received', icon: Mail, path: '/dashboard/offers' },
    { name: 'Contracts', icon: FileText, path: '/dashboard/contracts' },
    { name: 'Payments', icon: DollarSign, path: '/dashboard/payments' },
    { name: 'Financial Insights', icon: TrendingUp, path: '/dashboard/insights' },
    { name: 'Documents', icon: Folder, path: '/dashboard/documents' },
    { name: 'Messages', icon: MessageSquare, path: '/dashboard/messages' },
  ];

  return (
    <div className="min-h-screen  w-[280px] bg-[#1787B1] absolute md:relative text-white hidden lg:flex flex-col p-5 font-sans rounded-r-3xl">
      
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-3 p-8 mb-10 mt-4">
        <img className='h-10' src="/assets/image/logo.png" alt='logo'/>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-scroll scrollbar-hide flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group
                ${isActive 
                  ? 'bg-white text-[#1787B1] font-semibold shadow-sm' 
                  : 'text-white hover:bg-white/10'
                }`}
            >
              <item.icon 
                size={20} 
                className={isActive ? 'text-[#1787B1]' : 'text-white'} 
                strokeWidth={2}
              />
              <span className="text-[15px]">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/20 w-full my-4"></div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-2 mb-4">
        <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
          <Settings size={20} strokeWidth={2} />
          <span className="text-[15px]">Setting</span>
        </button>

        <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
          <LogOut size={20} strokeWidth={2} />
          <span className="text-[15px]">Logout</span>
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
