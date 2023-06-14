import { FetchParamProps } from "types/apiTypes";
import { CampusId, Store } from "types/commonTypes";

import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

type CategoryStoreListResponse = {
  hasNext: boolean;
  restaurants: Store[];
};

type ReduceReturnType = Record<string, any>;

interface generateParamsProps {
  page?: number;
  size?: number;
  filter?: string;
  campusId?: CampusId;
  categoryId?: number;
  name?: string;
}

const generateParams = (propObject: generateParamsProps) =>
  Object.entries(propObject).reduce<ReduceReturnType>(
    (params, [key, value]) => {
      if (value) {
        params[key] = value;
      }
      return params;
    },
    {}
  );

const fetchStoreList = async ({ pageParam = 0, queryKey }: FetchParamProps) => {
  const [, { size, filter, campusId, categoryId, name, type }] = queryKey;
  const params = generateParams({
    page: pageParam,
    size,
    filter,
    campusId,
    categoryId,
    name,
  });

  const { data } = await axiosInstance.get<CategoryStoreListResponse>(
    ENDPOINTS.STORE_LIST(campusId, type),
    { params }
  );
  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchStoreList;
