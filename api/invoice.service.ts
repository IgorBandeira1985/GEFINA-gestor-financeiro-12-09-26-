type InvoiceStatus = "pending" | "paid";

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

const invoices: Invoice[] = [
	{
		id: 1,
		amount: 125000,
		status: "pending",
		issueDate: "2026-09-25",
		dueDate: "2026-10-20",
		customer: {
			id: 7,
			name: "Construtora Meridiano",
			email: "contato@meridiano.com",
		},
	},
	{
		id: 2,
		amount: 35000,
		status: "paid",
		issueDate: "2026-10-01",
		dueDate: "2026-10-30",
		customer: {
			id: 4,
			name: "Gráfica nova",
			email: "contato@nova.com.br",
		},
	},
	{
		id: 3,
		amount: 35000,
		status: "paid",
		issueDate: "2026-10-01",
		dueDate: "2026-10-31",
		customer: {
			id: 15,
			name: "Tendituto",
			email: "contato@Tendituto.com",
		},
	}];

export function findAllinvoices(): .invoice[] {
    return invoices;
}

export function findInvoiceByid(id: number): Invoice | undefined {
    const invoice = invoices.find(invoice => invoice.id === id);

    if (!invoice) return invoice;

    return invoice;
}