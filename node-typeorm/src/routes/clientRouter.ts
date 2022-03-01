import { Router } from "express";
// import { ClientController } from "./controllers/clientController";
import { Client } from "../entities/Client";
const router = Router();

router.post("/api/client", async (req, res) => {
  const { first_name, last_name, email, cardNumber, balance } = req.body;
  console.log(req.body);
  const client = Client.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    card_number: cardNumber,
    balance: balance,
  });
  await client.save();
  res.send(client);
});

export { router as createClientRouter };
