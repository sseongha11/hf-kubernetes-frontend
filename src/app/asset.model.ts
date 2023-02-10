export interface Asset {
    ID: string;
    item: string;
    description: string;
    owner: string;
    severity: number;
}

export interface History {
    record:    Asset;
    txId:      string;
    timestamp: string;
    isDelete:  boolean;
}