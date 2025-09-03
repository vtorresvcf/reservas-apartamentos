import Image from "next/image";

export default function Header() {
  return (
    <header className="relative h-[50vh] flex items-center justify-center">
      {/* Imagen optimizada con efecto de desenfoque y gradiente */}
      <div className="absolute inset-0">
        <Image
          src="/fondo-playa.jfif"
          alt="Playa"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          placeholder="blur"
          blurDataURL="/fondo-playa.jfif"
        />
        {/* Gradiente para destacar texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/10" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Tu escapada junto al mar empieza aquí
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Apartamentos con encanto en la Costa de Valencia, para disfrutar de
          unas vacaciones a tu ritmo.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:bg-blue-50 transition">
          Ver disponibilidad
        </button>
      </div>
    </header>
  );
}
