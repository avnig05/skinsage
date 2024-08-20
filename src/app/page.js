import Image from "next/image";
import LogoSign from "./components/LogoSign.jsx";
import InputForm from "./components/InputForm.jsx";
import ProductsPage from "./components/ProductsPage.jsx";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '20px' }}>
      <LogoSign />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
        <InputForm style={{ flex: 1, marginRight: '20px' }} />
        <ProductsPage style={{ flex: 1, marginLeft: '20px'}} />
      </div>
    </main>
  );
}
