import crypto from 'crypto'
import { CryptoAdapter } from '../../domain/cryptography/crypto.adapter.interface';

export class CryptoAdapterImpl implements CryptoAdapter {

    private readonly algorithm: string = 'aes-256-ctr';
    private readonly secretKey: string = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
    private readonly iv: Buffer = crypto.randomBytes(16);

    async encrypt(text: string): Promise<string> {

        const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, this.iv);

        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

        return encrypted.toString('hex');
    }

    async decrypt(hash: string): Promise<string> {

        const decipher = crypto.createDecipheriv(this.algorithm, this.secretKey, this.iv);

        const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, 'hex')), decipher.final()]);

        return decrpyted.toString();
    }
}