/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Catalog
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "http://localhost/api".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface Failure
 */
export interface Failure {
    /**
     * Epoch Millis (UTC)
     * @type {number}
     * @memberof Failure
     */
    timestamp?: number;
    /**
     * Http Status Code
     * @type {number}
     * @memberof Failure
     */
    status?: number;
    /**
     * Internal Error Code
     * @type {number}
     * @memberof Failure
     */
    code?: number;
    /**
     * First Error Message
     * @type {string}
     * @memberof Failure
     */
    message?: string;
    /**
     * All Error Messages
     * @type {Array<string>}
     * @memberof Failure
     */
    messages?: Array<string>;
    /**
     * Error Type (e.g. Exception Class in Java)
     * @type {string}
     * @memberof Failure
     */
    type?: string;
    /**
     * API Path (URI)
     * @type {string}
     * @memberof Failure
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof Failure
     */
    stacktrace?: string;
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum Provider {
    PASSWORD = <any> 'PASSWORD',
    LDAP = <any> 'LDAP',
    OAUTHGOOGLE = <any> 'OAUTH_GOOGLE'
}

/**
 * 
 * @export
 * @interface RenderedNotebookDTO
 */
export interface RenderedNotebookDTO {
    /**
     * Notebook File Path
     * @type {string}
     * @memberof RenderedNotebookDTO
     */
    path?: string;
    /**
     * Notebook Content
     * @type {string}
     * @memberof RenderedNotebookDTO
     */
    content?: string;
}

/**
 * 
 * @export
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * Auto-generated ID for User
     * @type {number}
     * @memberof UserDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    userName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    password?: string;
    /**
     * 
     * @type {Provider}
     * @memberof UserDTO
     */
    provider?: Provider;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    department?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserDTO
     */
    roles?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserDTO
     */
    permissions?: Array<string>;
    /**
     * Epoch Millis (UTC)
     * @type {number}
     * @memberof UserDTO
     */
    createdBy?: number;
    /**
     * Epoch Millis (UTC)
     * @type {number}
     * @memberof UserDTO
     */
    modifiedBy?: number;
    /**
     * Epoch Millis (UTC)
     * @type {number}
     * @memberof UserDTO
     */
    createdAt?: number;
    /**
     * Epoch Millis (UTC)
     * @type {number}
     * @memberof UserDTO
     */
    modifiedAt?: number;
    /**
     * Epoch Millis (UTC)
     * @type {number}
     * @memberof UserDTO
     */
    recentlyLoggedIn?: number;
    /**
     * Y / N
     * @type {string}
     * @memberof UserDTO
     */
    isLocked?: string;
}


/**
 * AuthControllerApi - fetch parameter creator
 * @export
 */
export const AuthControllerApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        whoami(options: any = {}): FetchArgs {
            const localVarPath = `/auth/whoiam`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthControllerApi - functional programming interface
 * @export
 */
export const AuthControllerApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        whoami(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UserDTO> {
            const localVarFetchArgs = AuthControllerApiFetchParamCreator(configuration).whoami(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * AuthControllerApi - factory interface
 * @export
 */
export const AuthControllerApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        whoami(options?: any) {
            return AuthControllerApiFp(configuration).whoami(options)(fetch, basePath);
        },
    };
};

/**
 * AuthControllerApi - object-oriented interface
 * @export
 * @class AuthControllerApi
 * @extends {BaseAPI}
 */
export class AuthControllerApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public whoami(options?: any) {
        return AuthControllerApiFp(this.configuration).whoami(options)(this.fetch, this.basePath);
    }

}

/**
 * NotebookControllerApi - fetch parameter creator
 * @export
 */
export const NotebookControllerApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        displayNotebook(options: any = {}): FetchArgs {
            const localVarPath = `/notebook/display`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotebookControllerApi - functional programming interface
 * @export
 */
export const NotebookControllerApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        displayNotebook(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<RenderedNotebookDTO> {
            const localVarFetchArgs = NotebookControllerApiFetchParamCreator(configuration).displayNotebook(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * NotebookControllerApi - factory interface
 * @export
 */
export const NotebookControllerApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        displayNotebook(options?: any) {
            return NotebookControllerApiFp(configuration).displayNotebook(options)(fetch, basePath);
        },
    };
};

/**
 * NotebookControllerApi - object-oriented interface
 * @export
 * @class NotebookControllerApi
 * @extends {BaseAPI}
 */
export class NotebookControllerApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotebookControllerApi
     */
    public displayNotebook(options?: any) {
        return NotebookControllerApiFp(this.configuration).displayNotebook(options)(this.fetch, this.basePath);
    }

}

