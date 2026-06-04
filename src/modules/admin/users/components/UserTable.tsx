import React from "react";
import { Edit } from "lucide-react";
import { AdminUser } from "../hooks/useUsers";

interface UserTableProps {
  users: AdminUser[];
  onToggleBlock: (user: AdminUser) => void;
  onEdit: (user: AdminUser) => void;
}

export function UserTable({ users, onToggleBlock, onEdit }: UserTableProps) {
  return (
    <div className="bg-white shadow-lg shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[800px] md:min-w-full divide-y divide-[#5A2A1F]/10">
          <thead className="bg-[#F5F1EC]">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">User</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Role</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Status</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Last Login</th>
              <th scope="col" className="px-6 py-4 text-right text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#5A2A1F]/5">
            {users.map((user) => (
              <tr key={user.id} className={`hover:bg-[#F5F1EC]/50 transition-colors ${user.isBlocked ? 'opacity-60 bg-red-50/30' : ''}`}>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12">
                      <div className="h-12 w-12 rounded-xl bg-[#E8D9C0] flex items-center justify-center border border-[#5A2A1F]/10 text-[#5A2A1F] font-black text-lg shadow-inner">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-5">
                      <div className="text-sm font-bold text-[#5A2A1F]">
                        {user.name} {user.isBlocked && <span className="text-red-500 font-bold ml-1">(Blocked)</span>}
                      </div>
                      <div className="text-xs font-medium text-[#5A2A1F]/60 mt-1">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="text-sm font-black text-[#8B3A2B] uppercase tracking-widest">{user.role}</div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-[10px] font-black uppercase tracking-widest rounded-full ${
                    user.status === "Active" ? "bg-green-100 text-green-800 border border-green-200" :
                    user.status === "Blocked" ? "bg-red-100 text-red-800 border border-red-200" :
                    "bg-[#FFD700]/20 text-[#5A2A1F] border border-[#FFD700]/50"
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-[#5A2A1F]/60">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-4">
                    <button 
                      onClick={() => onToggleBlock(user)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all ${
                        user.isBlocked 
                          ? 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700' 
                          : 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700'
                      }`}
                    >
                      {user.isBlocked ? "Unblock" : "Block"}
                    </button>
                    <button 
                      onClick={() => onEdit(user)}
                      className="text-[#5A2A1F]/40 hover:text-[#FFD700] transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
