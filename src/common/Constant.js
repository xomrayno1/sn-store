export const CATEGORY_GET_LIST_PSSF = "category_get_list_paging_sort_search_filter";
export const CATEGORY_GET_LIST_PSSF_SUCCESS = "category_get_list_paging_sort_search_filter_success";
export const CATEGORY_GET_LIST_PSSF_FAILED = "category_get_list_paging_sort_search_filter_failed";

export const PRODUCT_GET_LIST_PSSF = "product_get_list_paging_sort_search_filter";
export const PRODUCT_GET_LIST_PSSF_SUCCESS = "product_get_list_paging_sort_search_filter_success";
export const PRODUCT_GET_LIST_PSSF_FAILED = "product_get_list_paging_sort_search_filter_failed";

//API
export const BASE_URL = "https://show-product.herokuapp.com"

//product
export const API_PRODUCT =  BASE_URL + "/api/v1/products";
export const API_PRODUCT_GET_LIST_PSSF = API_PRODUCT + "/product_get_list_paging_sort_search_filter";

//category
export const API_CATEGORY = BASE_URL + "/api/v1/categories";
export const API_CATEGORY_GET_LIST_PSSF = API_CATEGORY + "/category_get_list_paging_sort_search_filter";