import { useState, useEffect, useCallback } from "react";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
  isBlocked: boolean;
}

const API_BASE = "http://localhost:5000/api";

export function useUsers() {
  const [userList, setUserList] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/users`);
      const data = await res.json();
      setUserList(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const createUser = async (userData: { name: string; email: string; role: string }) => {
    try {
      const res = await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!res.ok) throw new Error("Failed to create user");
      await fetchUsers();
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  const updateUser = async (id: string, userData: { name: string; email: string; role: string }) => {
    try {
      const res = await fetch(`${API_BASE}/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!res.ok) throw new Error("Failed to update user");
      await fetchUsers();
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const toggleBlock = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/users/${id}/toggle-block`, { method: "PATCH" });
      if (!res.ok) throw new Error("Failed to toggle block");
      await fetchUsers();
    } catch (error) {
      console.error("Failed to toggle block:", error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/users/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete user");
      await fetchUsers();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const openAddModal = () => setIsAddModalOpen(true);

  const closeModals = () => {
    setIsAddModalOpen(false);
    setEditingUser(null);
  };

  return {
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
  };
}
