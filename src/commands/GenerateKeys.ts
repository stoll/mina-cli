import * as MinaSDK from "@o1labs/client-sdk"
import IKeypair from "../interfaces/IKeypair"

export default function GenerateKeys(): IKeypair {
	const { publicKey, privateKey } = MinaSDK.genKeys()

	return {
		publicKey,
		privateKey
	}
}