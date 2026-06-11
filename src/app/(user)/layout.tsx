import Footer from "@/modules/user/components/Footer";
import WelcomePopup from "@/modules/user/components/WelcomePopup";
import AuthGuard from "@/modules/user/components/AuthGuard";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <WelcomePopup />
      <AuthGuard>
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </AuthGuard>
      <Footer />
    </div>
  );
}
