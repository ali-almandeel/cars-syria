export interface IBaseSearchDto {
    pageNumber?: number;
    pageSize?: number;
    keyword?: string;
    isActive?: boolean;
    orderBy?: string[] | null;
    advancedFilter?: any;
}