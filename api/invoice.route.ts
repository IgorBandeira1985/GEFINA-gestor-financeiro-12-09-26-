import { Router } from 'express';

import {
    findAllinvoices,
    findInvoiceByid
} from './invoice.service.ts';
import { request } from 'node:http';

const router = Router();


router.get('/', (_request, response) => {
	const invoices = findAllinvoices();
    
    response.status(200).json(invoices);
});


router.get('/:id', (_request, response) => {
	const id = number(_request.params.id);

    const invoice = findInvoiceByid(id);

	if (!invoice) response.status(404).json({
			error: {
				status: 404,
				message: "Fatura não encontrada.",
			},
		});

	response.status(200).json(invoice);
});

export default router;