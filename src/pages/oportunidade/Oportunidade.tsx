import { useRef } from 'react';
import {
  CaretLeftIcon,
  CaretRightIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from '@phosphor-icons/react';

type Status = 'ABERTA' | 'FECHADA' | 'REJEITADA';

type Projeto = 'CRM' | 'SEGURO_VIDA' | 'SEGURO_VIAGENS';

const oportunidades = [
  {
    id: 1,
    titulo: 'Implementação de CRM',
    status: 'ABERTA' as Status,
    projeto: 'CRM' as Projeto,
    nomeCliente: 'Empresa Alpha Ltda',
    descricao: 'Projeto de implantação de sistema CRM para equipe comercial.',
    valor: 45000,
  },
  {
    id: 2,
    titulo: 'Consultoria em vendas',
    status: 'FECHADA' as Status,
    projeto: 'CRM' as Projeto,
    nomeCliente: 'Beta Comércio e Serviços',
    descricao: 'Treinamento e consultoria para time de vendas.',
    valor: 12500,
  },
  {
    id: 3,
    titulo: 'Desenvolvimento de dashboard',
    status: 'REJEITADA' as Status,
    projeto: 'CRM' as Projeto,
    nomeCliente: 'Gamma Indústria S.A.',
    descricao: 'Dashboard de BI para acompanhamento de metas.',
    valor: 28750.5,
  },
  {
    id: 4,
    titulo: 'Plano familiar de proteção',
    status: 'ABERTA' as Status,
    projeto: 'SEGURO_VIDA' as Projeto,
    nomeCliente: 'Mariana Oliveira',
    descricao: 'Proposta de seguro de vida com cobertura para toda a família.',
    valor: 1890,
  },
  {
    id: 5,
    titulo: 'Seguro de vida empresarial',
    status: 'FECHADA' as Status,
    projeto: 'SEGURO_VIDA' as Projeto,
    nomeCliente: 'Grupo Horizonte',
    descricao: 'Contrato coletivo de seguro de vida para colaboradores.',
    valor: 24600,
  },
  {
    id: 6,
    titulo: 'Seguro internacional Europa',
    status: 'ABERTA' as Status,
    projeto: 'SEGURO_VIAGENS' as Projeto,
    nomeCliente: 'Carlos Mendes',
    descricao: 'Cobertura para viagem internacional durante as férias.',
    valor: 780,
  },
  {
    id: 7,
    titulo: 'Cobertura para intercâmbio',
    status: 'REJEITADA' as Status,
    projeto: 'SEGURO_VIAGENS' as Projeto,
    nomeCliente: 'Ana Beatriz Costa',
    descricao: 'Proposta de seguro viagem para período de intercâmbio estudantil.',
    valor: 1430,
  },
];

function formatarValor(valor: number) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function obterProjeto(projeto: Projeto) {
  if (projeto === 'CRM') {
    return {
      nome: 'Gerenciamento de Oportunidades',
      cor: 'border border-[#7C3AED]/15 bg-[#F0E9FF]/75 text-[#6331B3]',
    };
  }

  if (projeto === 'SEGURO_VIDA') {
    return {
      nome: 'Seguro de Vida',
      cor: 'border border-[#1689F5]/15 bg-[#E7F4FF]/75 text-[#1864A8]',
    };
  }

  return {
    nome: 'Seguro Viagens',
    cor: 'border border-[#F59E0B]/20 bg-[#FFF6D9]/80 text-[#A45B00]',
  };
}

function renderizarStatus(status: Status) {
  if (status === 'ABERTA') {
    return (
      <>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1689F5]/15 bg-[#EAF4FF]/75 backdrop-blur-sm">
          <ClockIcon size={25} weight="duotone" className="text-[#1689F5]" />
        </div>

        <span className="rounded-full border border-[#1689F5]/15 bg-[#EAF4FF]/80 px-3 py-1 text-xs font-semibold text-[#1864A8]">
          Aberta
        </span>
      </>
    );
  }

  if (status === 'FECHADA') {
    return (
      <>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/15 bg-emerald-50/75 backdrop-blur-sm">
          <CheckCircleIcon
            size={25}
            weight="duotone"
            className="text-emerald-600"
          />
        </div>

        <span className="rounded-full border border-emerald-500/15 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-700">
          Fechada
        </span>
      </>
    );
  }

  return (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-500/15 bg-rose-50/75 backdrop-blur-sm">
        <XCircleIcon
          size={25}
          weight="duotone"
          className="text-rose-600"
        />
      </div>

      <span className="rounded-full border border-rose-500/15 bg-rose-50/80 px-3 py-1 text-xs font-semibold text-rose-700">
        Rejeitada
      </span>
    </>
  );
}

function corDaBarra(status: Status) {
  if (status === 'ABERTA') {
    return 'bg-gradient-to-r from-[#1689F5] to-[#2563EB]';
  }

  if (status === 'FECHADA') {
    return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
  }

  return 'bg-gradient-to-r from-rose-500 to-rose-600';
}

function statusNoRodape(status: Status) {
  if (status === 'ABERTA') {
    return (
      <span className="flex items-center gap-1.5 text-xs font-semibold text-[#1864A8]">
        <ClockIcon size={16} weight="bold" />
        Aberta
      </span>
    );
  }

  if (status === 'FECHADA') {
    return (
      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
        <CheckCircleIcon size={16} weight="bold" />
        Fechada
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1.5 text-xs font-semibold text-rose-600">
      <XCircleIcon size={16} weight="bold" />
      Rejeitada
    </span>
  );
}

function Oportunidade() {
  const carrosselRef = useRef<HTMLDivElement>(null);

  function rolarParaEsquerda() {
    carrosselRef.current?.scrollBy({
      left: -420,
      behavior: 'smooth',
    });
  }

  function rolarParaDireita() {
    carrosselRef.current?.scrollBy({
      left: 420,
      behavior: 'smooth',
    });
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#EDF5FF] px-6 py-8 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#1689F5]/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-36 -right-32 h-96 w-96 rounded-full bg-[#7C3AED]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-9 w-1 rounded-full bg-gradient-to-b from-[#1689F5] to-[#7C3AED]" />

            <h1 className="bg-gradient-to-r from-[#126CC5] via-[#2563EB] to-[#6D28D9] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
              Oportunidades
            </h1>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-[#526581]">
            Acompanhe as oportunidades comerciais e o andamento de cada negociação.
          </p>
        </header>

        <div className="relative">
          <button
            type="button"
            onClick={rolarParaEsquerda}
            aria-label="Mostrar oportunidades anteriores"
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[#526581] shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-[#1689F5]/40 hover:bg-[#EAF2FF] hover:text-[#2563EB]"
          >
            <CaretLeftIcon size={24} weight="bold" />
          </button>

          <div
            ref={carrosselRef}
            className="relative flex gap-6 overflow-x-auto scroll-smooth px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {oportunidades.map((oportunidade) => {
              const projeto = obterProjeto(oportunidade.projeto);

              return (
                <article
                  key={oportunidade.id}
                  className="relative w-80 shrink-0 overflow-hidden rounded-2xl border border-white/70 bg-white/55 shadow-[0_18px_50px_rgba(37,99,235,0.12)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(37,99,235,0.20)] sm:w-96"
                >
                  <div className={`h-1.5 w-full ${corDaBarra(oportunidade.status)}`} />

                  <div className="relative p-6">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#60A5FA]/15 blur-2xl" />

                    <div className="pointer-events-none absolute -bottom-16 -left-12 h-28 w-28 rounded-full bg-[#A78BFA]/15 blur-2xl" />

                    <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
                      {renderizarStatus(oportunidade.status)}
                    </div>

                    <h2 className="relative z-10 mb-4 text-xl font-bold text-[#172B4D]">
                      {oportunidade.titulo}
                    </h2>

                    <div className="relative z-10 mb-5">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#6B82A3]">
                        Projeto relacionado
                      </p>

                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${projeto.cor}`}
                      >
                        {projeto.nome}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-5">
                      <div>
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[#6B82A3]">
                          Cliente
                        </p>

                        <p className="font-semibold text-[#30476A]">
                          {oportunidade.nomeCliente}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[#6B82A3]">
                          Descrição
                        </p>

                        <p className="text-sm leading-6 text-[#526581]">
                          {oportunidade.descricao}
                        </p>
                      </div>

                      <div className="border-t border-white/70 pt-5">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[#6B82A3]">
                          Valor da oportunidade
                        </p>

                        <p className="text-2xl font-bold text-[#172B4D]">
                          {formatarValor(oportunidade.valor)}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 mt-6 flex items-center justify-between border-t border-white/70 pt-4">
                      <span className="text-xs font-medium text-[#6B82A3]">
                        Oportunidade #{oportunidade.id}
                      </span>

                      {statusNoRodape(oportunidade.status)}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            onClick={rolarParaDireita}
            aria-label="Mostrar próximas oportunidades"
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[#526581] shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-[#7C3AED]/40 hover:bg-[#F3EEFF] hover:text-[#6D28D9]"
          >
            <CaretRightIcon size={24} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Oportunidade;