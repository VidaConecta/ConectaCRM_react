import { use, useEffect, useState } from "react";

 //lista de usernames gitHub
 const USUARIOS_GITHUB = [
    'Dev-Everly',
    'victorpgms',
    'JoelRamalhoF',
    'SaraCarlenis',
    'Kauedota'

];

 //tipando dados retornados do GitHub
 interface DadosGithub {
  usuario: string;
  nome: string;
  urlAvatar: string;
  bio: string;
  linkPerfil: string;
 }

 // 3. Função do Componente (Tudo precisa ficar DENTRO dela)
export const Sobre = () => {
  // Estados do React
  const [membros, setMembros] = useState<DadosGithub[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Consumir API do GitHub
  useEffect(() => {
    const buscarDadosGithub = async () => {
      try {
        const dados = await Promise.all(
          USUARIOS_GITHUB.map(async (usuario) => {
            const resposta = await fetch(`https://api.github.com/users/${usuario}`);
            const dadosApi = await resposta.json();

            return {
              usuario,
              nome: dadosApi.name || usuario,
              urlAvatar: dadosApi.avatar_url || 'https://via.placeholder.com/150',
              bio: dadosApi.bio || 'Desenvolvedor(a)',
              linkPerfil: dadosApi.html_url,
            };
          })
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

  // Passagem automática de cards
  useEffect(() => {
    if (membros.length === 0) return;

    const intervalo = setInterval(() => {
      setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % membros.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [membros]);

  // Mensagem enquanto carrega
  if (carregando) {
    return <div className="text-center py-10 text-slate-500">Carregando equipe...</div>;
  }

  const membroAtual = membros[indiceAtual];

  // 4. Retorno do JSX (Estrutura visual dos cards com Tailwind)
  return (
    <section className="py-12 bg-slate-50 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Sobre Nós</h2>

      <div className="relative w-full max-w-md px-4">
        {/* Card do Membro Atual */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-slate-100">
          <a href={membroAtual.linkPerfil} target="_blank" rel="noopener noreferrer">
            <img
              src={membroAtual.urlAvatar}
              alt={membroAtual.nome}
              className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 shadow-md object-cover hover:scale-105 transition-transform"
            />
          </a>
          <h3 className="mt-4 text-xl font-bold text-slate-800">{membroAtual.nome}</h3>
          <p className="mt-2 text-slate-600 text-sm font-medium">{membroAtual.bio}</p>
          <a
            href={membroAtual.linkPerfil}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline"
          >
            Ver no GitHub @{membroAtual.usuario}
          </a>
        </div>

        {/* Botão Anterior */}
        <button
          onClick={() => setIndiceAtual((prev) => (prev === 0 ? membros.length - 1 : prev - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-slate-600 hover:text-indigo-600 transition"
        >
          &#10094;
        </button>

        {/* Botão Próximo */}
        <button
          onClick={() => setIndiceAtual((prev) => (prev + 1) % membros.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-slate-600 hover:text-indigo-600 transition"
        >
          &#10095;
        </button>

        {/* Indicadores em bolinhas */}
        <div className="flex justify-center gap-2 mt-6">
          {membros.map((_, indice) => (
            <button
              key={indice}
              onClick={() => setIndiceAtual(indice)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                indiceAtual === indice ? 'w-8 bg-indigo-600' : 'w-2.5 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};