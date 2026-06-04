import Footer from "@/modules/user/components/Footer";
import WelcomePopup from "@/modules/user/components/WelcomePopup";
import AuthGuard from "@/modules/user/components/AuthGuard";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WelcomePopup />
      <AuthGuard>
        {children}
      </AuthGuard>
      <Footer />
    </>
  );
}
