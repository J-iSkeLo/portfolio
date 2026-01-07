const listenEvent = <T>(name: string, callback: (data: T) => void) => {
    const handler = (e: any) => callback(e.detail)
    window.addEventListener(name, handler)
    return () => window.removeEventListener(name, handler)
}

export default listenEvent
