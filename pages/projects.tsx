import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const projects = [
    { id: 1, name: 'Project 1', description: 'A responsive web app.' },
    { id: 2, name: 'Project 2', description: 'A portfolio website.' },
    { id: 3, name: 'Project 3', description: 'A blog platform.' },
  ];

  return {
    props: { projects },
  };
}

export default function Projects({ projects }: { projects: any[] }) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-4xl font-bold text-center">My Projects</h1>
        <ul className="mt-4 space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="p-4 border rounded">
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
