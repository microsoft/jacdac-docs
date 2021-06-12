/* eslint-disable @typescript-eslint/ban-types */
import { arrange as tidyArrange, desc, tidy } from "@tidyjs/tidy";
const { debug } = console;
debug(`jdds: starting...`);
const handlers = {
    arrange: async (props) => {
        const { data, column, descending } = props;
        return tidy(data, tidyArrange(descending ? desc(column) : column));
    },
};
onmessage = async (event) => {
    const { data } = event;
    const { id, type } = data;
    const handler = handlers[type];
    const resp = handler?.(data);
    postMessage({
        id,
        type,
        data: resp,
    });
};
debug(`jdds: ready...`);
