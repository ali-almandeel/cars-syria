import { type IBaseResponse, type IListBaseResponse } from "./baseResponse";
import { type IBaseSearchDto } from "./baseSearch";


interface IBaseServiceProps {
    url: string;
    refreshUrl?: string | Array<string>;
    successMessage?: string;
    setActionInUrl?: boolean;
    refreshKey?: string;
    isQuery?: boolean;
}

export interface IBaseServiceWithSuccessProps<TResponse>
    extends IBaseServiceProps {
    onSuccess?: (data: IBaseResponse<TResponse>) => void;
    onError?: (data: any) => void;
}

export interface IListServiceProps<TResponse, TSearch extends IBaseSearchDto>
    extends IBaseServiceProps {
    search: TSearch;
    onSuccess?: (data: IListBaseResponse<TResponse>) => void;
    onError?: (data: any) => void;
}
export interface ICustomListServiceProps<
    TResponse,
    TSearch extends IBaseSearchDto
> extends IBaseServiceProps {
    search: TSearch;
    onSuccess?: (data: IBaseResponse<TResponse>) => void;
    onError?: (data: any) => void;
}

export interface IGetServiceProps<TResponse, TParams = undefined>
    extends IBaseServiceWithSuccessProps<TResponse> {
    params?: TParams;
}

export interface ISingleItemServiceProps<TResponse> extends IBaseServiceProps {
    id: string | number;
    onSuccess?: (data: IBaseResponse<TResponse>) => void;
    onError?: (data: any) => void;
}

export interface ISingleItemBySlugServiceProps<TResponse>
    extends IBaseServiceProps {
    slug: string;
    onSuccess?: (data: IBaseResponse<TResponse>) => void;
}

export interface IUpsertServiceProps<TResponse>
    extends IBaseServiceWithSuccessProps<TResponse> {
    asFormData?: boolean;
}

export interface IDeleteServiceProps<TResponse>
    extends IBaseServiceWithSuccessProps<TResponse> { }

