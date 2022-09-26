import { ethers } from 'ethers';
import EthersAdapter from '@gnosis.pm/safe-ethers-lib';
import Safe, { SafeFactory, SafeAccountConfig } from '@gnosis.pm/safe-core-sdk'
import SafeServiceClient from '@gnosis.pm/safe-service-client'


export async function newSafe( userWallet:string, payeerKey:string ) : Promise<string> {
    const RPC_URL  = 'https://white-dry-isle.ethereum-goerli.discover.quiknode.pro/a697d99a8638ef6d8c85d2cc11ea0ff496371551';
    const provider = new ethers.providers.JsonRpcProvider( RPC_URL );
    const owner = new ethers.Wallet( payeerKey, provider );
    const ethAdapter = new EthersAdapter( { ethers, signer: owner } )
    const txServiceUrl = 'https://safe-transaction.goerli.gnosis.io'
    const safeService = new SafeServiceClient({ txServiceUrl, ethAdapter })
    const safeFactory = await SafeFactory.create({ ethAdapter })
    const owners = [
        userWallet
    ]
    const threshold = 1
    const safeAccountConfig: SafeAccountConfig = {
        owners,
        threshold
    }
    
    const safeSdk: Safe = await safeFactory.deploySafe( { safeAccountConfig } )
    
    const newSafeAddress = safeSdk.getAddress()

    console.log( 'newSafeAddress:', newSafeAddress )

    return newSafeAddress;
}