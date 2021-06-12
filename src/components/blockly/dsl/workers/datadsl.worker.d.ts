export interface DataMessage {
    id: string;
    type: string;
    data: object[];
}
export interface ArrangeMessage extends DataMessage {
    column: string;
    descending: boolean;
}
