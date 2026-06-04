import Footer from "@/modules/user/components/Footer";
import WelcomePopup from "@/modules/user/components/WelcomePopup";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WelcomePopup />
      {children}
      <Footer />
    </>
  );
}
