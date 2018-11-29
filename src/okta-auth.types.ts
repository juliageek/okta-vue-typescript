export interface OktaConfig
{
  url:string;
  clientId?:string,
  redirectUri?:string;
  issuer?:string;
}
export interface OktaCredentials
{
  username:string;
  password:string;
}
export interface OktaTransaction
{
  readonly status:string;
  readonly sessionToken:string;
  cancel():IPromise<OktaTransaction>;
}
export interface OktaOAuthOptions
{
  responseType:string|string[];
  sessionToken?:string;
}
export interface OktaToken
{
  getWithoutPrompt(oauthOptions:OktaOAuthOptions):IPromise<any>;
  getWithPopup(oauthOptions:OktaOAuthOptions):IPromise<any>;
  getWithRedirect(oauthOptions:OktaOAuthOptions):void
  parseFromUrl():IPromise<any>;
  decode(idTokenString:string):string
  refresh(tokenToRefresh:string):IPromise<string>;
  getUserInfo(accessTokenObject:string):IPromise<any>;
  verify(idTokenObject:string):IPromise<any>;
}
export interface OktaTokenManager
{
  /** After receiving an access_token or id_token, add it to the tokenManager to manage token expiration and refresh operations.
   *	When a token is added to the tokenManager, it is automatically refreshed when it expires.
   * @param {string} key Unique key to store the token in the tokenManager. This is used later when you want to get, delete, or refresh the token.
   * @param {string} token Token object that will be added */
  add(key:string, token:string):void;
  /** Get a token that you have previously added to the tokenManager with the given key */
  get(key:string):string;
  /** Remove a token from the tokenManager with the given key. */
  remove(key:string):void;
  /** Remove all tokens from the tokenManager. */
  clear():void;
  /** Manually refresh a token before it expires. */
  refresh(key:string):void;
  /** Subscribe to an event published by the tokenManager. */
  on(event:'expired'|'error'|'refreshed', callback:Function, context?:any);
  /** Unsubscribe from tokenManager events. If no callback is provided, unsubscribes all listeners from the event. */
  off(event:'expired'|'error'|'refreshed', callback:Function);
}
export declare class OktaAuthClass
{
  readonly token:OktaToken;
  readonly tokenManager:OktaTokenManager;
  constructor(config:OktaConfig);
  public signIn(options:OktaCredentials):IPromise<OktaTransaction>;
  public signOut():IPromise<any>;
  [fn:string]:any;
}

export interface IPromise<T>
{
  then(onSuccess:(arg:T)=>any):IPromise<any>;
  then<TOut>(onSuccess:(arg:T)=>TOut):IPromise<TOut>;
  catch(onReject:(err:any)=>void):IPromise<void>;
  finally(finallyCallback:()=>void):IPromise<void>;
}
