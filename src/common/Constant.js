
export const CATEGORY_GET_LIST_PSSF = "category_get_list_paging_sort_search_filter";
export const CATEGORY_GET_LIST_PSSF_SUCCESS = "category_get_list_paging_sort_search_filter_success";
export const CATEGORY_GET_LIST_PSSF_FAILED = "category_get_list_paging_sort_search_filter_failed";
export const CATEGORY_CREATE = "category_create";
export const CATEGORY_CREATE_SUCCESS = "category_create_success";
export const CATEGORY_CREATE_FAILED = "category_create_failed";
export const CATEGORY_UPDATE = "category_update";
export const CATEGORY_UPDATE_SUCCESS = "category_update_success";
export const CATEGORY_UPDATE_FAILED = "category_update_failed";
export const CATEGORY_DELETE = "category_delete";
export const CATEGORY_DELETE_SUCCESS = "category_delete_success";
export const CATEGORY_DELETE_FAILED = "category_delete_failed";


export const PRODUCT_GET_LIST_PSSF = "product_get_list_paging_sort_search_filter";
export const PRODUCT_GET_LIST_PSSF_SUCCESS = "product_get_list_paging_sort_search_filter_success";
export const PRODUCT_GET_LIST_PSSF_FAILED = "product_get_list_paging_sort_search_filter_failed";
export const PRODUCT_CREATE = "product_create";
export const PRODUCT_CREATE_SUCCESS = "product_create_success";
export const PRODUCT_CREATE_FAILED = "product_create_failed";
export const PRODUCT_UPDATE = "product_update";
export const PRODUCT_UPDATE_SUCCESS = "product_update_success";
export const PRODUCT_UPDATE_FAILED = "product_update_failed";
export const PRODUCT_DELETE = "product_delete";
export const PRODUCT_DELETE_SUCCESS = "product_delete_success";
export const PRODUCT_DELETE_FAILED = "product_delete_failed";
//API
export const BASE_URL = "https://show-product.herokuapp.com"

//product
export const API_PRODUCT =  BASE_URL + "/api/v1/products";
export const API_PRODUCT_GET_LIST_PSSF = API_PRODUCT + "/product_get_list_paging_sort_search_filter";

//category
export const API_CATEGORY = BASE_URL + "/api/v1/categories";
export const API_CATEGORY_GET_LIST_PSSF = API_CATEGORY + "/category_get_list_paging_sort_search_filter";

export const TextInputComponennt = (prop) => (<input  {...prop} className="ant-input" type="text" />);
export const TextAreaComponennt = (prop) => (<textarea {...prop} className="ant-input"/>)
