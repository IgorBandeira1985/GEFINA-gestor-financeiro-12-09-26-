import express from 'express';

const app = express();

type InvoiceStatus = 'pending' | 'paid';

interface Customer {
  id: number;
  name: string;
  email: string;
}

interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: Customer;
}

const invoices: Invoice[] = [{
  id: 1,
  amount: 125000,
  status: 'pending',
  issueDate: '2026-09-25',
  dueDate: '2026-10-20',
  customer: {
    id: 7,
    name: 'Construtora Meridiano',
    email: 'contato@meridiano.com'
  }
}, {
  id: 2,
  amount: 35000,
  status: 'paid',
  issueDate: '2026-10-01',
  dueDate: '2026-10-30',
  customer: {
    id: 4,
    name: 'Gráfica nova',
    email: 'contato@nova.com.br'
  }
}, {
  id: 3,
  amount: 35000,
  status: 'paid',
  issueDate: '2026-10-01',
  dueDate: '2026-10-31',
  customer: {
    id: 15,
    name: 'Tendituto',
    email: 'contato@Tendituto.com'
  }
}];

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

app.get('/api/invoices', (_request, response) => {
  response.status(200).json(invoices);
});

app.get('/api/invoices/:id', (request, response) => {
  const id = +request.params.id;

  const invoice = invoices.find(invoice => invoice.id === id);

  if (!invoice) response.status(404).json({ error: {
    status: 404,
    message: 'Fatura não encontrada.'
  }});

  response.status(200).json(invoice);
});

app.use((request, response) => {
  response.status(404).json({ error: {
    status: 404,
    message: 'Recurso não encontrado.'
  }});
});

app.listen(3000);
