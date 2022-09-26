"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newSafe = void 0;
const ethers_1 = require("ethers");
const safe_ethers_lib_1 = __importDefault(require("@gnosis.pm/safe-ethers-lib"));
const safe_core_sdk_1 = require("@gnosis.pm/safe-core-sdk");
const safe_service_client_1 = __importDefault(require("@gnosis.pm/safe-service-client"));
function newSafe(userWallet, payeerKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const RPC_URL = 'https://white-dry-isle.ethereum-goerli.discover.quiknode.pro/a697d99a8638ef6d8c85d2cc11ea0ff496371551';
        const provider = new ethers_1.ethers.providers.JsonRpcProvider(RPC_URL);
        const owner = new ethers_1.ethers.Wallet(payeerKey, provider);
        const ethAdapter = new safe_ethers_lib_1.default({ ethers: ethers_1.ethers, signer: owner });
        const txServiceUrl = 'https://safe-transaction.goerli.gnosis.io';
        const safeService = new safe_service_client_1.default({ txServiceUrl, ethAdapter });
        const safeFactory = yield safe_core_sdk_1.SafeFactory.create({ ethAdapter });
        const owners = [
            userWallet
        ];
        const threshold = 1;
        const safeAccountConfig = {
            owners,
            threshold
        };
        const safeSdk = yield safeFactory.deploySafe({ safeAccountConfig });
        const newSafeAddress = safeSdk.getAddress();
        console.log('newSafeAddress:', newSafeAddress);
        return newSafeAddress;
    });
}
exports.newSafe = newSafe;
