class ExtensionService {
    static _instance = null;
    isLoading: boolean;

    constructor() {
        if (ExtensionService._instance) {
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
            const params = new URLSearchParams(document.location.search);
            const extensionId = params.get('extensionId');
            const parentOrigin = params.get('parentOrigin');
            const extensionService = await module.initializeExtensionService({
              extensionId,
              parentOrigin,
              taggedElementId: 'content',
            });

            console.log('extension service instantiated');

            ExtensionService._instance = extensionService;
            this.isLoading = false;
        });
    }

    getServiceInstance() {
        return ExtensionService._instance;
    }
}

export const extensionServiceInstance = new ExtensionService();
