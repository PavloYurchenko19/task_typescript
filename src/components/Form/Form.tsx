import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getNftsMetadata} from "../../store/slices/nftsSlice";
import style from './From.module.css'

const Form:FC = () => {
    const [wallet, setWallet] = useState<string>('')
    let dispatch = useAppDispatch();
    const {nfts} = useAppSelector(state => state.nftsReducer)
    console.log(wallet);
    console.log({nfts: nfts});
    useEffect(()=>{
        dispatch(getNftsMetadata({walletAddress:wallet}))
    },[])
    return (
        <div className={style.mainBox}>
            <div className={style.form}>

                <input onChange={(e) => {
                    setWallet(e.target.value)
                }} type="text" name={'wallet'} placeholder={'Wallet key'} value={wallet}/>
                <button onClick={()=>{dispatch(getNftsMetadata({walletAddress:wallet}))}} >Search</button>
            </div>
            <div className={style.nftsBox}>

            {nfts && (nfts.map((nft) => (<div className={style.nftBox} key={nft.id.tokenID}>
                    <div className={style.imgBox}>
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

        </div>
    );
};

export {Form};
