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
      cor: 'bg-violet-100 text-violet-700',
    };
  }

  if (projeto === 'SEGURO_VIDA') {
    return {
      nome: 'Seguro de Vida',
      cor: 'bg-sky-100 text-sky-700',
    };
  }

  return {
    nome: 'Seguro Viagens',
    cor: 'bg-amber-100 text-amber-700',
  };
}

function renderizarStatus(status: Status) {
  if (status === 'ABERTA') {
    return (
      <>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <ClockIcon
            size={25}
            weight="duotone"
            className="text-blue-600"
          />
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          Aberta
        </span>
      </>
    );
  }

  if (status === 'FECHADA') {
    return (
      <>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
          <CheckCircleIcon
            size={25}
            weight="duotone"
            className="text-emerald-600"
          />
        </div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Fechada
        </span>
      </>
    );
  }

  return (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50">
        <XCircleIcon
          size={25}
          weight="duotone"
          className="text-rose-600"
        />
      </div>

      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
        Rejeitada
      </span>
    </>
  );
}

function corDaBarra(status: Status) {
  if (status === 'ABERTA') {
    return 'bg-blue-500';
  }

  if (status === 'FECHADA') {
    return 'bg-emerald-500';
  }

  return 'bg-rose-500';
}

function statusNoRodape(status: Status) {
  if (status === 'ABERTA') {
    return (
      <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-600">
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
    <main className="min-h-screen bg-slate-50 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-blue-600" />

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Oportunidades
            </h1>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            Acompanhe as oportunidades comerciais e o andamento de cada negociação.
          </p>
        </header>

        <div className="relative">
          <button
            type="button"
            onClick={rolarParaEsquerda}
            aria-label="Mostrar oportunidades anteriores"
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition hover:bg-blue-600 hover:text-white"
          >
            <CaretLeftIcon size={24} weight="bold" />
          </button>

          <div
            ref={carrosselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {oportunidades.map((oportunidade) => {
              const projeto = obterProjeto(oportunidade.projeto);

              return (
                <article
                  key={oportunidade.id}
                  className="relative w-80 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:w-96"
                >
                  <div
                    className={`h-1.5 w-full ${corDaBarra(oportunidade.status)}`}
                  />

                  <div className="p-6">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      {renderizarStatus(oportunidade.status)}
                    </div>

                    <h2 className="mb-4 text-xl font-bold text-slate-900">
                      {oportunidade.titulo}
                    </h2>

                    <div className="mb-5">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                        Projeto relacionado
                      </p>

                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${projeto.cor}`}
                      >
                        {projeto.nome}
                      </span>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                          Cliente
                        </p>

                        <p className="font-semibold text-slate-700">
                          {oportunidade.nomeCliente}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                          Descrição
                        </p>

                        <p className="text-sm leading-6 text-slate-600">
                          {oportunidade.descricao}
                        </p>
                      </div>

                      <div className="border-t border-slate-100 pt-5">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                          Valor da oportunidade
                        </p>

                        <p className="text-2xl font-bold text-slate-900">
                          {formatarValor(oportunidade.valor)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-medium text-slate-400">
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
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition hover:bg-blue-600 hover:text-white"
          >
            <CaretRightIcon size={24} weight="bold" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Oportunidade;