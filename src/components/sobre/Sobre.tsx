import { useEffect, useState } from 'react';

// Lista de usernames do GitHub
const USUARIOS_GITHUB = [
  'Dev-Everly',
  'victorpgms',
  'JoelRamalhoF',
  'SaraCarlenis',
  'Kauedota',
];

// Tipagem dos dados retornados pelo GitHub
interface DadosGithub {
  usuario: string;
  nome: string;
  urlAvatar: string;
  bio: string;
  linkPerfil: string;
}

export const Sobre = () => {
  const [membros, setMembros] = useState<DadosGithub[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Mesma requisição original ao GitHub
  useEffect(() => {
    const buscarDadosGithub = async () => {
      try {
        const dados = await Promise.all(
          USUARIOS_GITHUB.map(async (usuario) => {
            const resposta = await fetch(
              `https://api.github.com/users/${usuario}`,
            );

            const dadosApi = await resposta.json();

            return {
              usuario,
              nome: dadosApi.name || usuario,
              urlAvatar:
                dadosApi.avatar_url || 'https://via.placeholder.com/150',
              bio: dadosApi.bio || 'Desenvolvedor(a)',
              linkPerfil: dadosApi.html_url,
            };
          }),
        );

        setMembros(dados);
      } catch (erro) {
        console.error('Erro ao buscar dados do GitHub:', erro);
      } finally {
        setCarregando(false);
      }
    };

    buscarDadosGithub();
  }, []);

  // Mesma troca automática original
  useEffect(() => {
    if (membros.length === 0) {
      return;
    }

    const intervalo = setInterval(() => {
      setIndiceAtual((indiceAnterior) => {
        return (indiceAnterior + 1) % membros.length;
      });
    }, 4000);

    return () => clearInterval(intervalo);
  }, [membros]);

  if (carregando) {
    return (
      <div className="bg-[#EDF5FF] py-10 text-center text-[#526581]">
        Carregando equipe...
      </div>
    );
  }

  const membroAtual = membros[indiceAtual];

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#EDF5FF] px-6 py-12">
      <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-[#1689F5]/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#7C3AED]/25 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#38BDF8]/15 blur-3xl" />

      <div className="relative mb-8 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <div className="h-9 w-1 rounded-full bg-gradient-to-b from-[#1689F5] to-[#7C3AED]" />

          <h2 className="bg-gradient-to-r from-[#126CC5] via-[#2563EB] to-[#6D28D9] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
            Sobre nós
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-[#526581]">
          Conheça a equipe que está construindo soluções para tornar a gestão
          comercial mais conectada e eficiente.
        </p>
      </div>

      <div className="relative w-full max-w-md px-5 sm:px-8">
        <div className="absolute -inset-1 rounded-[1.4rem] bg-gradient-to-r from-[#1689F5]/40 via-[#2563EB]/30 to-[#7C3AED]/40 opacity-70 blur-lg" />

        <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/55 p-7 text-center shadow-[0_20px_60px_rgba(37,99,235,0.16)] backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1689F5] via-[#2563EB] to-[#7C3AED]" />

          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#60A5FA]/20 blur-2xl" />

          <div className="absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-[#A78BFA]/20 blur-2xl" />

          <a
            href={membroAtual.linkPerfil}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block"
          >
            <div className="rounded-full bg-gradient-to-br from-[#1689F5] via-[#2563EB] to-[#7C3AED] p-1 shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src={membroAtual.urlAvatar}
                alt={membroAtual.nome}
                className="h-28 w-28 rounded-full border-4 border-white object-cover"
              />
            </div>
          </a>

          <h3 className="relative z-10 mt-5 text-xl font-bold text-[#172B4D]">
            {membroAtual.nome}
          </h3>

          <p className="relative z-10 mx-auto mt-2 min-h-12 max-w-xs text-sm font-medium leading-6 text-[#526581]">
            {membroAtual.bio}
          </p>

          <a
            href={membroAtual.linkPerfil}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-5 inline-flex items-center rounded-lg border border-[#2563EB]/15 bg-[#EEF5FF]/80 px-4 py-2 text-xs font-semibold text-[#245CB2] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:bg-[#E1EDFF] hover:text-[#4C1D95]"
          >
            Ver no GitHub @{membroAtual.usuario}
          </a>
        </div>

        <button
          type="button"
          onClick={() =>
            setIndiceAtual((indiceAnterior) =>
              indiceAnterior === 0
                ? membros.length - 1
                : indiceAnterior - 1,
            )
          }
          className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[#526581] shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-[#1689F5]/40 hover:bg-[#EAF2FF] hover:text-[#2563EB]"
        >
          &#10094;
        </button>

        <button
          type="button"
          onClick={() =>
            setIndiceAtual((indiceAnterior) =>
              (indiceAnterior + 1) % membros.length,
            )
          }
          className="absolute right-0 top-1/2 z-20 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[#526581] shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-[#7C3AED]/40 hover:bg-[#F3EEFF] hover:text-[#6D28D9]"
        >
          &#10095;
        </button>

        <div className="relative z-10 mt-7 flex justify-center gap-2">
          {membros.map((_, indice) => (
            <button
              key={indice}
              type="button"
              onClick={() => setIndiceAtual(indice)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                indiceAtual === indice
                  ? 'w-9 bg-gradient-to-r from-[#1689F5] to-[#7C3AED] shadow-[0_2px_8px_rgba(37,99,235,0.35)]'
                  : 'w-2.5 bg-white/80 shadow-sm hover:bg-[#B9D7FF]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};