import React from 'react';
import {useSelectionsStore} from "../../store/selections.store.jsx";
import {useModalStore} from "../../store/modal.store.jsx";

const UsersRow = ({ user, getStatusColor }) => {
  const setSelectedUser = useSelectionsStore((state)=>state.setSelectedUser);
  const setModalState = useModalStore((state)=>state.setModalState);

  return (
    <tr key={user.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-white">{user.user_name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user._id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.user_email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-400">{user.total_orders}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joined_date}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 text-xs font-light rounded-sm ${getStatusColor(user.status)}`}>
          {user.user_status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <div className="flex space-x-2">
          <button  
          className="p-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-sm hover:bg-blue-500/20 transition-all" 
          title="View"
          onClick = {()=>{
            setSelectedUser(user);
            setModalState('active')
            }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button className="p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm hover:bg-amber-500/20 transition-all" title="Edit">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button className="p-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-sm hover:bg-red-500/20 transition-all" title="Remove">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersRow;

