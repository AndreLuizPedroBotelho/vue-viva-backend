import { Request, Response } from "express";
import { Cliente, ClinteInterface } from "../models/cliente.model";
import { UpdateOptions, DestroyOptions } from "sequelize";


export class ClientesController {

   public index(req: Request, res: Response) {
    Cliente.findAll<Cliente>({})
      .then((clientes: Array<Cliente>) => res.json(clientes))
      .catch((err: Error) => res.status(500).json(err));
  }
  
  public create(req: Request, res: Response) {
    const params: ClinteInterface = req.body;

    Cliente.create<Cliente>(params)
      .then((cliente: Cliente) => res.status(201).json(cliente))
      .catch((err: Error) => res.status(500).json(err));
  }

  public show(req: Request, res: Response) {
    const linkId: number = parseInt(req.params.id);

    Cliente.findByPk<Cliente>(linkId)
      .then((cliente: Cliente | null) => {
        if (cliente) {
          res.json(cliente);
        } else {
          res.status(404).json({ errors: ["Cliente não encontrado"] });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public update(req: Request, res: Response) {
    const linkId: number = parseInt(req.params.id);
    const params: ClinteInterface = req.body;

    const options: UpdateOptions = {
      where: { id: linkId },
      limit: 1
    };

    Cliente.update(params, options)
      .then(() => res.status(202).json({ data: "Sucesso" }))
      .catch((err: Error) => res.status(500).json(err));
  }

  public delete(req: Request, res: Response) {
    const linkId: number = parseInt(req.params.id);
    const options: DestroyOptions = {
      where: { id: linkId },
      limit: 1
    };

    Cliente.destroy(options)
      .then(() => res.status(202).json({ data: "Sucesso" }))
      .catch((err: Error) => res.status(500).json(err));
  }
}