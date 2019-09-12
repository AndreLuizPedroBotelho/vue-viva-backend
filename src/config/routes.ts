import { Request, Response } from "express";
import { ClientesController } from "../controllers/clientes.controller";


export class Routes {
  public clienteController: ClientesController = new ClientesController();

  public routes(app): void {

    //Node
    app.route("/clientes")
       .get(this.clienteController.index)
       .post(this.clienteController.create);

    app.route("/clientes/:id")
       .get(this.clienteController.show)
       .put(this.clienteController.update)
       .delete(this.clienteController.delete);



  }
}