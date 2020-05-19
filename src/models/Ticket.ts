import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

interface ITicket extends Document {
    name: string;
    description: string;
    schedule: Array<string>;
    tags: Array<string>;
}

const TicketSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    schedule: [{ type: Schema.Types.ObjectId }],
    tags: [{ type: Schema.Types.ObjectId }]
});

const TicketModel = mongoose.model<ITicket>("Ticket", TicketSchema);

export { TicketModel, ITicket };
