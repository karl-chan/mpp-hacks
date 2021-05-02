// eslint-disable-next-line semi
export { };

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        MPP: {
            chat: {
                send: (message: string) => void
            },
            client: {
                ws: WebSocket
            }
        }
    }
}
