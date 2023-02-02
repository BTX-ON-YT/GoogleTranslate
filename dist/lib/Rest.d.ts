export declare class Rest {
    token: string;
    getToken(text: string): Promise<unknown>;
    translate(text: string, from: string, to: string): Promise<{
        text: any;
        from: {
            language: {
                didYouMean: boolean;
                iso: string;
            };
            text: {
                autoCorrected: boolean;
                value: string;
                didYouMean: boolean;
            };
        };
        raw: any;
    }>;
}
