export const statusList = [
  { status: 'pending', description: 'Aguardando Retirada' },
  { status: 'started', description: 'Retirada' },
  { status: 'finalized', description: 'Entregue' },
];

export function getStatus(value) {
  return statusList.find((s) => s.status === value);
}
