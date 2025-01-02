import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-4xl font-bold text-center">About Me</h1>
        <p className="mt-4 text-center">
          Hi, I'm a frontend developer skilled in HTML, CSS, JavaScript, React, and Material-UI.
        </p>
      </main>
      <Footer />
    </>
  );
}
