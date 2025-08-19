export default function Home() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">
        Bienvenido a nuestros apartamentos
      </h2>
      <p className="mb-4">
        Explora nuestros apartamentos y reserva el que más te guste.
      </p>
      <ul className="list-disc pl-5">
        <li>
          <a
            href="/apartamentos/apartamento1"
            className="text-blue-600 underline"
          >
            Apartamento 1
          </a>
        </li>
        <li>
          <a
            href="/apartamentos/apartamento2"
            className="text-blue-600 underline"
          >
            Apartamento 2
          </a>
        </li>
      </ul>
    </section>
  );
}
