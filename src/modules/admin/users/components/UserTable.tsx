import React from "react";
import { Edit } from "lucide-react";
import { AdminUser } from "../hooks/useUsers";

interface UserTableProps {
  users: AdminUser[];
  onToggleBlock: (user: AdminUser) => void;
  onEdit: (user: AdminUser) => void;
}

export function UserTable({ users, onToggleBlock, onEdit }: UserTableProps) {
  const formatLastLogin = (isoString?: string) => {
    if (!isoString) return "Never";
    try {
      const date = new Date(isoString);
      if (isNaN(date.getTime())) return isoString;
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block bg-white shadow-lg shadow-primary/5 rounded-2xl border border-primary/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-primary/10">
            <thead className="bg-cream">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">User</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Role</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Status</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Last Login</th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-black text-secondary uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-primary/5">
              {users.map((user) => (
                <tr key={user.id} className={`hover:bg-cream/50 transition-colors ${user.isBlocked ? 'opacity-60 bg-red-50/30' : ''}`}>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        <div className="h-12 w-12 rounded-xl bg-tan flex items-center justify-center border border-primary/10 text-primary font-black text-lg shadow-inner">
                          {user.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-5">
                        <div className="text-sm font-bold text-primary">
                          {user.name} {user.isBlocked && <span className="text-red-500 font-bold ml-1">(Blocked)</span>}
                        </div>
                        <div className="text-xs font-medium text-primary/80 mt-1">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-sm font-black text-secondary uppercase tracking-widest">{user.role}</div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-[10px] font-black uppercase tracking-widest rounded-full ${
                      user.status === "Active" ? "bg-green-100 text-green-800 border border-green-200" :
                      user.status === "Blocked" ? "bg-red-100 text-red-800 border border-red-200" :
                      "bg-accent/20 text-primary border border-accent/50"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-primary/80">
                    {formatLastLogin(user.lastLogin)}
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
                        className="text-primary/40 hover:text-accent transition-colors"
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

      {/* Mobile Card Grid View */}
      <div className="block md:hidden space-y-4">
        {users.map((user) => (
          <div 
            key={user.id} 
            className={`bg-white shadow-md shadow-primary/5 rounded-2xl border border-primary/10 p-5 space-y-4 transition-colors ${
              user.isBlocked ? 'opacity-80 bg-red-50/10' : ''
            }`}
          >
            {/* Top row: Avatar, Name/Email and Actions */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="flex-shrink-0 h-10 w-10">
                  <div className="h-10 w-10 rounded-xl bg-tan flex items-center justify-center border border-primary/10 text-primary font-black text-base shadow-inner">
                    {user.name.charAt(0)}
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-primary truncate">
                    {user.name} {user.isBlocked && <span className="text-red-500 font-bold ml-1">(Blocked)</span>}
                  </div>
                  <div className="text-xs font-medium text-primary/80 break-all">{user.email}</div>
                </div>
              </div>
              <button 
                onClick={() => onEdit(user)}
                className="text-primary/40 hover:text-accent p-1 flex-shrink-0 transition-colors"
              >
                <Edit className="w-5 h-5" />
              </button>
            </div>

            {/* Mid row: Role and Status */}
            <div className="grid grid-cols-2 gap-4 border-t border-primary/5 pt-3">
              <div>
                <span className="block text-[10px] font-black tracking-widest text-secondary uppercase">Role</span>
                <span className="text-xs font-bold text-primary uppercase">{user.role}</span>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest text-secondary uppercase">Status</span>
                <div>
                  <span className={`px-2 py-0.5 inline-flex text-[9px] font-black uppercase tracking-widest rounded-full ${
                    user.status === "Active" ? "bg-green-100 text-green-800 border border-green-200" :
                    user.status === "Blocked" ? "bg-red-100 text-red-800 border border-red-200" :
                    "bg-accent/20 text-primary border border-accent/50"
                  }`}>
                    {user.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Last login and Block action */}
            <div className="border-t border-primary/5 pt-3 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="block text-[10px] font-black tracking-widest text-secondary uppercase">Last Login</span>
                <span className="text-xs text-primary/80 font-medium truncate block">
                  {formatLastLogin(user.lastLogin)}
                </span>
              </div>
              
              <button 
                onClick={() => onToggleBlock(user)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-black uppercase tracking-wider flex-shrink-0 transition-all ${
                  user.isBlocked 
                    ? 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100' 
                    : 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
                }`}
              >
                {user.isBlocked ? "Unblock" : "Block"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
