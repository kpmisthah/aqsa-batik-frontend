"use client";

import React, { useRef } from "react";
import { Search } from "lucide-react";
import { useUsers } from "@/modules/admin/users/hooks/useUsers";
import AdminHeader from "@/modules/admin/components/AdminHeader";
import AdminModal from "@/modules/admin/components/AdminModal";
import { UserTable } from "@/modules/admin/users/components/UserTable";

export default function AdminUsers() {
  const {
    userList,
    loading,
    isAddModalOpen,
    editingUser,
    setEditingUser,
    createUser,
    updateUser,
    toggleBlock,
    deleteUser,
    openAddModal,
    closeModals,
  } = useUsers();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSave = async () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const userData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
    };

    if (editingUser) {
      await updateUser(editingUser.id, userData);
    } else {
      await createUser(userData);
    }
    closeModals();
  };

  return (
    <div className="space-y-6">
      <AdminHeader
        title="Users"
        description="Manage administrators, wholesalers, and customers."
        buttonText="Add User"
        onAddClick={openAddModal}
      />

      {/* Filter & Search */}
      <div className="bg-white p-5 rounded-2xl shadow-lg shadow-[#5A2A1F]/5 border border-[#5A2A1F]/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#5A2A1F]/40" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-3 py-3 border border-[#5A2A1F]/20 rounded-xl leading-5 bg-white placeholder-[#5A2A1F]/40 text-[#5A2A1F] font-medium focus:outline-none focus:placeholder-[#5A2A1F]/30 focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm transition-colors"
            placeholder="Search users..."
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select className="block w-full pl-4 pr-10 py-3 text-base text-[#5A2A1F] font-bold border-[#5A2A1F]/20 focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm rounded-xl border bg-white cursor-pointer">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Wholesaler</option>
            <option>Customer</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-[#5A2A1F]/20 border-t-[#5A2A1F] rounded-full animate-spin" />
        </div>
      ) : userList.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#5A2A1F]/10">
          <p className="text-[#5A2A1F]/50 font-medium text-lg">No users yet. Click &quot;Add User&quot; to get started.</p>
        </div>
      ) : (
        <UserTable
          users={userList}
          onToggleBlock={toggleBlock}
          onEdit={setEditingUser}
          onDelete={deleteUser}
        />
      )}

      <AdminModal
        isOpen={isAddModalOpen || !!editingUser}
        onClose={closeModals}
        title={editingUser ? "Edit User" : "Add New User"}
        onSave={handleSave}
        saveText={editingUser ? "Save Changes" : "Create User"}
      >
        <form ref={formRef} className="space-y-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Full Name</label>
            <input type="text" name="name" defaultValue={editingUser?.name || ""} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium" placeholder="Enter name" required />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Email Address</label>
            <input type="email" name="email" defaultValue={editingUser?.email || ""} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium" placeholder="user@example.com" required />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Role</label>
            <select name="role" defaultValue={editingUser?.role || "Customer"} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium bg-white">
              <option>Customer</option>
              <option>Wholesaler</option>
              <option>Admin</option>
            </select>
          </div>
        </form>
      </AdminModal>
    </div>
  );
}
