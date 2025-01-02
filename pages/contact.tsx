import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        <p className="mt-4 text-center">You can reach me at: <strong>email@example.com</strong></p>
      </main>
      <Footer />
    </>
  );
}
