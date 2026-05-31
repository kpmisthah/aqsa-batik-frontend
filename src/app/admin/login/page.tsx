"use client";

import React from "react";
import LoginPage from "@/app/(user)/login/page";

export default function AdminLoginPage() {
  return <LoginPage isAdmin={true} />;
}
