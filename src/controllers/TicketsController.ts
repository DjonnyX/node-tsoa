import { TicketModel, ITicket } from "../models/index";
import { Controller, Route, Get, Post, Put, Delete, Tags, OperationId, Example, Body } from "tsoa";
import { getRef, riseRefVersion } from "../db/refs";

interface ITicketItem {
    id: string;
    name: string;
    description?: string;
    schedule: Array<string>;
    tags: Array<string>;
}

interface ITicketsMeta {
    ref: {
        name: string;
        version: number;
        lastUpdate: number;
    };
}

interface TicketsResponse {
    meta: ITicketsMeta;
    data: Array<ITicketItem>;
}

interface TicketResponse {
    meta: ITicketsMeta;
    data?: ITicketItem;
}

interface TicketCreateRequest {
    name: string;
    description?: string;
    schedule: Array<string>;
    tags: Array<string>;
}

const RESPONSE_TEMPLATE: ITicketItem = {
    id: "507c7f79bcf86cd7994f6c0e",
    name: "Tickets on concert",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    schedule: ["123c7f79bcf86cd7994f6c0e"],
    tags: ["123c7f79bcf86cd7994f6c0e"]
};

const formatModel = (model: ITicket) => ({
    id: model._id,
    name: model.name,
    description: model.description,
    schedule: model.schedule,
    tags: model.tags,
});

const META_TEMPLATE: ITicketsMeta = {
    ref: {
        name: "tickets",
        version: 1,
        lastUpdate: 1589885721
    }
};

@Route("/tickets")
@Tags("Ticket")
export class TicketsController extends Controller {
    @Get()
    @OperationId("GetAll")
    @Example<TicketsResponse>({
        meta: META_TEMPLATE,
        data: [RESPONSE_TEMPLATE]
    })
    public async getAll(): Promise<TicketsResponse> {
        try {
            const items = await TicketModel.find({});
            const ref = await getRef("tickets");
            return {
                meta: { ref },
                data: items.map(v => formatModel(v))
            };
        } catch (err) {
            this.setStatus(500);
            console.error("Caught error", err);
        }
    }

    @Get("{id}")
    @OperationId("GetOne")
    @Example<TicketResponse>({
        meta: META_TEMPLATE,
        data: RESPONSE_TEMPLATE
    })
    public async getOne(id: string): Promise<TicketResponse> {
        try {
            const item = await TicketModel.findById(id);
            const ref = await getRef("tickets");
            return {
                meta: { ref },
                data: formatModel(item)
            };
        } catch (err) {
            this.setStatus(500);
            console.error("Caught error", err);
        }
    }

    @Post()
    @OperationId("Create")
    @Example<TicketResponse>({
        meta: META_TEMPLATE,
        data: RESPONSE_TEMPLATE
    })
    public async create(@Body() request: TicketCreateRequest): Promise<TicketResponse> {
        try {
            const item = new TicketModel(request);
            const savedItem = await item.save();
            const ref = await riseRefVersion("tickets");
            return {
                meta: { ref },
                data: formatModel(savedItem)
            };
        } catch (err) {
            this.setStatus(500);
            console.error("Caught error", err);
        }
    }

    @Put("{id}")
    @OperationId("Update")
    @Example<TicketResponse>({
        meta: META_TEMPLATE,
        data: RESPONSE_TEMPLATE
    })
    public async update(id: string, @Body() request: TicketCreateRequest): Promise<TicketResponse> {
        try {
            const item = await TicketModel.findOneAndUpdate({ id }, request);
            const ref = await riseRefVersion("tickets");
            return {
                meta: { ref },
                data: formatModel(item)
            };
        } catch (err) {
            this.setStatus(500);
            console.error("Caught error", err);
        }
    }

    @Delete("{id}")
    @OperationId("Delete")
    @Example<TicketResponse>({
        meta: META_TEMPLATE
    })
    public async delete(id: string): Promise<TicketResponse> {
        try {
            await TicketModel.findOneAndDelete({ id });
            const ref = await riseRefVersion("tickets");
            return {
                meta: { ref }};
        } catch (err) {
            this.setStatus(500);
            console.error("Caught error", err);
        }
    }
}