import { ethers } from 'ethers';
import EthersAdapter from '@gnosis.pm/safe-ethers-lib';
import Safe, { SafeFactory, SafeAccountConfig } from '@gnosis.pm/safe-core-sdk'
import SafeServiceClient from '@gnosis.pm/safe-service-client'


async function newSafe() {
    const RPC_URL  = 'https://white-dry-isle.ethereum-goerli.discover.quiknode.pro/a697d99a8638ef6d8c85d2cc11ea0ff496371551';
    const provider = new ethers.providers.JsonRpcProvider( RPC_URL );
    const owner = new ethers.Wallet( '0x840bdb63e4e065597a3f5d5e5a3eed7b6b858400f2e262e83065bcec77049194', provider ); // brw99
    const ethAdapter = new EthersAdapter( { ethers, signer: owner } )
    const txServiceUrl = 'https://safe-transaction.goerli.gnosis.io'
    const safeService = new SafeServiceClient({ txServiceUrl, ethAdapter })
    const safeFactory = await SafeFactory.create({ ethAdapter })
    const owners = [
        '0xfc0A071784b75517e8cc8701Ea437BD192Bc5082',
        '0xD84D74aF87Ef7aaE715B7193dA6AfAED28448B79',
        '0xdf6c9dDc35A87C05Acd604326D9E3D0FbA6DD7C4'
    ]
    const threshold = 1
    const safeAccountConfig: SafeAccountConfig = {
        owners,
        threshold
    }
    
    const safeSdk: Safe = await safeFactory.deploySafe( { safeAccountConfig } )
    
    const newSafeAddress = safeSdk.getAddress()

    console.log( 'newSafeAddress:', newSafeAddress )
}

newSafe();