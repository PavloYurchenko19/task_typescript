import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {createAlchemyWeb3} from "@alch/alchemy-web3";
import baseURL, {urls} from "../../config/urls";
import { INfts} from "../../interface/nftsInterface";


interface INftsState {
    nfts:INfts[]
}

const initialState:INftsState = {
   nfts:[]
}
export const getNftsMetadata = createAsyncThunk<void,{walletAddress:string}>(
    `NftsSlice/getNftsMetadata`,
    async({walletAddress},{dispatch})=>{
        const web3 = createAlchemyWeb3(baseURL + urls.apiKey);
        const {ownedNfts} = await web3.alchemy.getNfts({owner: walletAddress})
        const nfts = ownedNfts.filter((nft) => !nft.error)
        dispatch(addNfts({nfts}))

    }
)

const NftsSlice = createSlice({
    name: 'NftsSlice',
    initialState,
    reducers: {
        addNfts: (state, action: PayloadAction<{ nfts:any }>) => {
            state.nfts = action.payload.nfts
        },
    }

});


const nftsReducer = NftsSlice.reducer;
const {addNfts} = NftsSlice.actions;
export default nftsReducer;
