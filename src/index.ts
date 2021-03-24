import Prompts, {PromptObject} from "prompts"
import Commands from "./commands";

(async () => {
	const response = await Prompts({
		type: 'select',
		name: 'command',
		message: 'Which command do you want to execute?',
		choices: [
			{
				title: 'Generate keys',
				value: 'generate-keys'
			},
		],
	}, {
		onSubmit: (response: PromptObject, answer: any, answers: any[]) => {
			switch (answer) {
				case "generate-keys":
					const { publicKey, privateKey } = Commands.generateKeys

					console.log("Public key: " + publicKey)
					console.log("Private key: " + privateKey)

					break;
			}
		},
		onCancel: (response: PromptObject) => {
			console.log(response)
		}
	})
})()