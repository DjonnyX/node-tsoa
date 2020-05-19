import { RefModel } from "../models/index";

export const initRefs = async (): Promise<void> => {

    const refs = await RefModel.find({});
    if (refs.length > 0) return;

    const lastUpdate = Date.now();

    const INITIAL_STATE = [
        {
            name: "schedules",
            version: 1,
            lastUpdate
        }, {
            name: "tickets",
            version: 1,
            lastUpdate
        }, {
            name: "tags",
            version: 1,
            lastUpdate
        }, {
            name: "tarifs",
            version: 1,
            lastUpdate
        },
    ];

    for (let i = 0, l = INITIAL_STATE.length; i < l; i++) {
        const refData = INITIAL_STATE[i];
        const model = new RefModel(refData);
        await model.save();
    }

    console.info("Refs are initialized.");
};