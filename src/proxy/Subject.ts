/**
 * The subject interface declares common operations for both RealSubject and the proxy. As long as the client
 * work with RealSubject using this interface, you'll able to pass it the proxy instead of real subject.
 */

export default interface Subject {
    request(): void;
}