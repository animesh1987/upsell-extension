export class ExtensionService {
    static instance;
    isLoading: boolean;

    constructor() {
        if (ExtensionService.instance) {
            throw Error('There can only be one instance');
        }

        this.isLoading = false;
    }

    async init() {
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;

        (window as any).checkoutKitLoader.load('extension').then(async function (module) {
            // const params = new URL(document.location).searchParams;
            const params = new URL(document.location.search).searchParams
            const extensionId = params.get('extensionId');
            const parentOrigin = params.get('parentOrigin');
            const extensionService = await module.initializeExtensionService({
              extensionId,
              parentOrigin,
              taggedElementId: 'content',
            });

            ExtensionService.instance = extensionService;
            this.isLoading = false;
        });
    }
}