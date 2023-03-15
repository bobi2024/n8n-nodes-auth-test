import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

// eslint-disable-next-line n8n-nodes-base/cred-class-name-unsuffixed
export class HttpDoubleHeaderAuth implements ICredentialType {
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-name-unsuffixed
	name = 'httpDoubleHeaderAuth';
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-display-name-missing-api
	displayName = 'HTTP Double Header Auth';

	genericAuth = true;
	icon = 'node:n8n-nodes-base.httpRequest';
	properties: INodeProperties[] = [
		{
			displayName: 'Name',
			name: 'nameOne',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Value',
			name: 'valueOne',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Name',
			name: 'nameTwo',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Value',
			name: 'valueTwo',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'={{$credentials.nameOne}}': '={{$credentials.valueOne}}',
				'={{$credentials.nameTwo}}': '={{$credentials.valueTwo}}',
			},
		},
	};

}
