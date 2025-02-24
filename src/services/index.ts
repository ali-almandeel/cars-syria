import { AxiosError, AxiosResponse } from "axios";
import type {
  ICustomListServiceProps,
  IDeleteServiceProps,
  IGetServiceProps,
  IListServiceProps,
  ISingleItemBySlugServiceProps,
  ISingleItemServiceProps,
  IUpsertServiceProps,
} from "../types/services";
import type {
  IBaseResponse,
  IListBaseResponse,
} from "../types/services/baseResponse";
import type { IBaseSearchDto } from "../types/services/baseSearch";
import axiosInstance from "../libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BaseActions } from "../shared/constants/BaseServicesActions";
import type {
  IBaseCreateDto,
  IBaseUpdateDto,
} from "../types/services/baseRequest";
import queryClient from "../libs/reactQuery";
import { serialize } from "object-to-formdata";

export const useGetListService = <TEntity, TSearch extends IBaseSearchDto>({
  url,
  search,
  setActionInUrl = true,
  onSuccess,
  onError,
  refreshKey,
  isQuery = true,
}: IListServiceProps<TEntity, TSearch>) => {
  const request = useQuery<
    AxiosResponse<IListBaseResponse<TEntity>> | AxiosError<any>,
    AxiosError,
    AxiosResponse<IListBaseResponse<TEntity>>
  >({
    queryKey: [refreshKey ? refreshKey : url + "-list", search],
    queryFn: async () => {
      search.isActive = true;
      if (!search.pageNumber) search.pageNumber = 1;
      if (!search.pageSize) search.pageSize = 10;
      const result = await axiosInstance.post<IListBaseResponse<TEntity>>(
        setActionInUrl ? url.buildUrl({ action: BaseActions.Search }) : url,
        { ...search }
      );
      if (result instanceof AxiosError) throw result;
      onSuccess && onSuccess(result.data);
      return result;
    },
    onSuccess: (data: AxiosResponse<IListBaseResponse<TEntity>>) => {
      // handleSuccess(successMessage ?? '');
      onSuccess && onSuccess(data.data);
    },

    onError: (data: any) => {
      onError && onError(data?.response?.data);
    },
    keepPreviousData: true,
    enabled: isQuery,
  });
  return { ...request };
};

export const useCustomGetListService = <
  TEntity,
  TSearch extends IBaseSearchDto
>({
  url,
  search,
  setActionInUrl = true,
  onSuccess,
  onError,
  isQuery = true,
}: ICustomListServiceProps<TEntity, TSearch>) => {
  const request = useQuery<
    AxiosResponse<IBaseResponse<TEntity>> | AxiosError<any>,
    AxiosError,
    AxiosResponse<IBaseResponse<TEntity>>
  >({
    queryKey: [url + "-list", search],
    queryFn: async () => {
      search.isActive = true;
      if (!search.pageNumber) search.pageNumber = 1;
      if (!search.pageSize) search.pageSize = 10;

      const result = await axiosInstance.post<IBaseResponse<TEntity>>(
        setActionInUrl ? url.buildUrl({ action: BaseActions.Search }) : url,
        { ...search }
      );
      if (result instanceof AxiosError) throw result;
      onSuccess && onSuccess(result.data);
      return result;
    },
    onSuccess: (data: AxiosResponse<IBaseResponse<TEntity>>) => {
      // handleSuccess(successMessage ?? '');
      onSuccess && onSuccess(data.data);
    },
    onError: (data: any) => {
      onError && onError(data?.response?.data);
    },
    keepPreviousData: true,
    enabled: isQuery,
  });
  return { ...request };
};

export const useGetService = <TEntity, TParams = undefined>({
  url,
  params,
  isQuery,
  onSuccess,
  onError,
}: IGetServiceProps<TEntity, TParams>) => {
  const request = useQuery<
    AxiosResponse<IBaseResponse<TEntity>> | AxiosError<any>,
    AxiosError,
    AxiosResponse<IBaseResponse<TEntity>>
  >({
    queryKey: [url + "-get"],
    queryFn: async () => {
      return await axiosInstance.get<IBaseResponse<TEntity>>(url, { params });
    },
    onSuccess: (data: AxiosResponse<IBaseResponse<TEntity>>) => {
      // handleSuccess(successMessage ?? '');
      onSuccess && onSuccess(data.data);
    },
    onError: (data: any) => {
      onError && onError(data?.response?.data);
    },
    enabled: isQuery,
  });

  return { ...request };
};

export const useGetByIdService = <TEntity>({
  url,
  id,
  onSuccess,
  isQuery,
  onError,
}: ISingleItemServiceProps<TEntity>) => {
  const request = useQuery<
    AxiosResponse<IBaseResponse<TEntity>> | AxiosError<any>,
    AxiosError,
    IBaseResponse<TEntity>
  >({
    queryKey: [url + "-item", id],
    queryFn: async () => {
      const result = await axiosInstance.get<IBaseResponse<TEntity>>(
        url.buildUrl({
          action: BaseActions.ById,
          payload: typeof id == "number" ? id.toString() : (id as string),
        })
      );
      if (result instanceof AxiosError) throw result;
      onSuccess && onSuccess(result.data);
      return result.data;
    },
    onError: (error: any) => {
      if (onError) {
        onError(error?.response?.data);
      } else if (error?.response?.status != 401) {
        // handleError(error.message);
      }
    },
    enabled: isQuery,
  });

  return { ...request };
};

export const useGetBySlugService = <TEntity>({
  url,
  slug,
  onSuccess,
  isQuery,
}: ISingleItemBySlugServiceProps<TEntity>) => {
  const request = useQuery<
    AxiosResponse<IBaseResponse<TEntity>> | AxiosError<any>,
    AxiosError,
    IBaseResponse<TEntity>
  >({
    queryKey: [`${url}-item-slug`, slug],
    queryFn: async () => {
      const result = await axiosInstance.get<IBaseResponse<TEntity>>(
        url.buildUrl({
          action: BaseActions.BySlug,
          payload: slug,
        })
      );
      if (result instanceof AxiosError) throw result;
      onSuccess && onSuccess(result.data);
      return result.data;
    },
    onError: (error: any) => {
      if (error?.response?.status != 401) {
        // handleError(error.message);
      }
    },
    enabled: isQuery,
  });

  return { ...request };
};

export const useCreateService = <TResponse, TBody extends IBaseCreateDto>({
  asFormData = true,
  url,
  refreshUrl,
  onSuccess,
  successMessage = "operation accomplished successfully",
  onError,
}: IUpsertServiceProps<TResponse>) => {
  console.log(url);
  const request = useMutation<
    AxiosResponse<IBaseResponse<TResponse>>,
    AxiosError,
    TBody
  >({
    mutationFn: async (variables: TBody) => {
      return await axiosInstance.post<IBaseResponse<TResponse>>(
        url.buildUrl({ action: BaseActions.Create }),
        asFormData ? serialize(variables) : variables
      );
    },
    onSuccess: (data: AxiosResponse<IBaseResponse<TResponse>>) => {
      // handleSuccess(successMessage ?? '');
      onSuccess && onSuccess(data.data);
      if (url) {
        queryClient.invalidateQueries(refreshUrl ? refreshUrl : url + "-list");
      }
    },

    onError: (data) => {
      onError && onError(data?.response?.data);
    },
  });

  return request;
};

export const useUpdateService = <TResponse, TBody extends IBaseUpdateDto>({
  asFormData = true,
  url,
  refreshUrl,
  onSuccess,
  successMessage = "operation accomplished successfully",
  onError,
}: IUpsertServiceProps<TResponse>) => {
  const request = useMutation<
    AxiosResponse<IBaseResponse<TResponse>> | AxiosError<any>,
    AxiosError,
    TBody
  >({
    mutationFn: async (variables: TBody) => {
      return await axiosInstance.put<IBaseResponse<TResponse>>(
        url.buildUrl({ action: BaseActions.Update, payload: variables.id }),
        asFormData ? serialize(variables) : variables
      );
    },
    onSuccess: (data) => {
      if (!(data instanceof AxiosError)) {
        // handleSuccess(successMessage ?? '');
        onSuccess && onSuccess(data.data);
        queryClient.invalidateQueries(refreshUrl ? refreshUrl : url + "-list");
      }
    },
    onError: (data) => {
      onError && onError(data?.response?.data);
    },
  });

  return request;
};

export const useDeleteService = <TResponse>({
  url,
  refreshUrl,
  onSuccess,
  successMessage = "operation accomplished successfully",
}: IDeleteServiceProps<TResponse>) => {
  const request = useMutation<
    AxiosResponse<IBaseResponse<TResponse>> | AxiosError<any>,
    AxiosError,
    string | number
  >({
    mutationFn: async (variables) => {
      return await axiosInstance.delete<IBaseResponse<TResponse>>(
        url.buildUrl({
          action: BaseActions.Delete,
          payload:
            typeof variables == "number"
              ? variables.toString()
              : (variables as string),
        })
      );
    },
    onSuccess: (data) => {
      if (!(data instanceof AxiosError)) {
        // handleSuccess(successMessage ?? '');
        onSuccess && onSuccess(data.data);
        queryClient.invalidateQueries(refreshUrl ? refreshUrl : url + "-list");
      }
    },
    onError: (error) => {
      if (error?.response?.status != 401) {
        // handleError(error.message);
      }
    },
  });

  return { ...request };
};

// export const handleSuccess = (message: string) => {
//     if (message)
//         toast.success(message, {
//             position: 'bottom-right',
//             iconTheme: {
//                 primary: '#4CBDCE',
//                 secondary: '#fff',
//             },
//             style: {
//                 borderRadius: '10px',
//                 background: '#1A1C1F',
//                 color: '#fff',
//                 fontWeight: '600',
//                 fontSize: '16px',
//                 paddingBlock: '30px',
//                 height: '60px',
//                 border: '1px solid #4CBDCE',
//             },
//         });
// };

// export const warningToast = (message: string) => {
//     if (message)
//         toast.success(message, {
//             position: 'bottom-right',
//             iconTheme: {
//                 primary: '#EC427C',
//                 secondary: '#fff',
//             },
//             style: {
//                 borderRadius: '10px',
//                 background: '#1A1C1F',
//                 color: '#fff',
//                 fontWeight: '600',
//                 fontSize: '16px',
//                 paddingBlock: '30px',
//                 height: '60px',
//                 border: '1px solid #EC427C',
//             },
//         });
// };

// export const handleError = (errorMessage: string) => {
//     if (errorMessage) {
//         toast.error(errorMessage, {
//             style: {
//                 borderRadius: '10px',
//                 background: '#333',
//                 color: '#fff',
//             },
//         });
//     }
// };
