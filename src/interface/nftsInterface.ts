export interface INfts {
    balance?: string;
    contract?: object;
    description?: string;
    id: {
        tokenID: string;
    };
    media?: [];
    metadata: {
        name: string;
        image:string;
        description: string;
        attributes?: [];
    }
    timeLastUpdated?: string;
    title?: string
    tokenUri?: object;
}
// export interface INft {
//     name: string;
//     image:string
//     description: string;
//     attributes?: [];
//
//     }

