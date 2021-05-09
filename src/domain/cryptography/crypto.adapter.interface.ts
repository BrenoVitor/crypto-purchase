export interface CryptoAdapter {

    encrypt: (text: string) => Promise<string>

    decrypt: (hash: string) => Promise<string>

}