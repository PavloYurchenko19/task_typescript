import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getNftsMetadata} from "../../store/slices/nftsSlice";
import {INft, INfts} from "../../interface/nftsInterface";

const Form:FC = () => {
    const [wallet, setWallet] = useState<string>('')
    let dispatch = useAppDispatch();
    const {nfts} = useAppSelector(state => state.nftsReducer)
    useEffect(()=>{
        dispatch(getNftsMetadata({walletAddress:wallet}))
    },[])

    return (
        <div>
            <input onChange={(e) => {
                setWallet(e.target.value)
            }} type="text" name={'wallet'} placeholder={'Wallet key'} value={wallet}/>
            <button>Search</button>
            {nfts && (nfts.map((nft:INft) => (<div key={nft.id.tokenID}>
                    <div >
                        {nft.metadata.image.startsWith("ipfs") ? <img
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1CanFB2mBrMwI8ZuhI05XUHWz69wAY-fRA&usqp=CAU'}
                                alt={nft.metadata.name}/>
                            : <img src={nft.metadata.image} alt={nft.metadata.name}/>

                        }
                    </div>
                    <h2>{nft.metadata.name}</h2>
                    <p>{nft.metadata.description}</p>
                </div>))
            )}
        </div>
    );
};

export {Form};
