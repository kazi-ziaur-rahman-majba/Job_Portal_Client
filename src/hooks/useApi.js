import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteData, getData, patchData, postData, postFormData, patchFormData } from "../services/api-service";
import { showErrorToast, showSuccessToast } from "../utils/toast-utils";

const isSuccessfulResponse = (response) => {
    return response.statusCode === 200 || response.statusCode === 201;
};

const handleErrorMessage = (error) => {
    if (error && typeof error === 'object') {
        const errorMessage = error?.response?.data?.message || error?.data?.message || error?.message;
        if (errorMessage) {
            Array.isArray(errorMessage) ? errorMessage.forEach(showErrorToast) : showErrorToast(errorMessage);
        }
    }
};

export const useAPI = () => {
    const user = JSON.parse(sessionStorage.getItem("user") || "{}");
    const token = user?.token || '';
    const queryClient = useQueryClient();

    const getMutation = useMutation({
        mutationFn: ({ url }) => getData({ url, token })
    });

    const deleteMutation = useMutation({
        mutationFn: ({ url }) => deleteData({ url, token })
    });

    // const postMutation = useMutation({
    //     mutationFn: ({ url, body }) => postData({ url, body, token })
    // });

    const postMutation = useMutation({
        mutationFn: ({ url, body }) => postData({ url, body, token })
    });

    const patchMutation = useMutation({
        mutationFn: ({ url, body }) => patchData({ url, body, token })
    });

    const postFormMutation = useMutation({
        mutationFn: ({ url, body }) => {
            if (!body || typeof body !== "object") {
                throw new Error("Invalid request body.");
            }
            const formData = new FormData();
            for (const [key, value] of Object.entries(body)) {
                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        formData.append(key, item);
                    });
                } else {
                    formData.append(key, value);
                }
            } 
            return postFormData({ url, token, body: formData })
        }
    });

    const patchFormMutation = useMutation({
        mutationFn: ({ url, body }) => {
            if (!body || typeof body !== "object") {
                throw new Error("Invalid request body.");
            }
            const formData = new FormData();
            for (const [key, value] of Object.entries(body)) {
                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        formData.append(key, item);
                    });
                } else {
                    formData.append(key, value);
                }
            }
            return patchFormData({ url, token, body: formData }); 
        }
    });

    const fetchData = async ({ apiUrl }) => {
        try {
            const response = await getMutation.mutateAsync({ url: apiUrl });
            // Prefer `response.data` when API returns a wrapper, otherwise return raw response
            return response?.data ?? response;
        } catch (e) {
            const msg = e?.response?.data?.message || e?.data?.message || e?.message;
            showErrorToast(msg);
            return null;
        }
    };

    const usePaginatedQuery = ({
        queryKey,
        url,
        enabled = true,
        refetchOnWindowFocus = false,
        refetchOnMount = false,
        refetchInterval,
        showToast = true,
        staleTime = 0
    }) => {
        const {
            data: response,
            error,
            isLoading,
            isFetching,
            ...queryProps
        } = useQuery({
            queryKey,
            queryFn: () => getData({ url, token }),
            refetchOnWindowFocus,
            refetchOnMount,
            staleTime,
            refetchInterval,
            enabled
        });

        let data = [];
        let totalItems = 0;
        let pageCount = 1;

        if (response?.statusCode === 200 && response?.data) {
            const { data: apiData, total, pageCount: apiPageCount } = response?.data;
            data = apiData;
            totalItems = total ?? 0;
            pageCount = apiPageCount ?? 1;
        } else if (error) {
            const errorMessage = error?.message;
            if (showToast) {
                showErrorToast(errorMessage);
            } else {
                console.error(errorMessage);
            }
        }

        return { data, totalItems, pageCount, response: response?.data, isLoading, isFetching, ...queryProps };
    };

    const validateFormData = ({
        body,
        requiredFields
    }) => {
        if (requiredFields?.length > 0) {
            for (const { key: fieldKey, value: fieldValue, label: fieldLabel } of requiredFields) {
                const fieldName = fieldValue || fieldKey;
                const fieldVariable = body[fieldKey];

                if (!fieldVariable || (typeof fieldVariable === 'string' && fieldVariable.length === 0) || (Array.isArray(fieldVariable) && fieldVariable.length === 0)) {
                    const action = fieldLabel === "image" ? "upload" : fieldLabel === "dropdown" ? "select" : "enter";
                    showErrorToast(`Please ${action} ${fieldName}.`);
                    return false;
                }
            }
        }
        return true;
    };

    const handleApiMutation = async ({
        mutation,
        url,
        body = {},
        invalidateQueryKey = [],
        showSuccessMessage = true,
        showErrorMessage = true,
        requiredFields = []
    }) => {
        try {
            if (validateFormData({ body, requiredFields })) {
                const response = await mutation.mutateAsync({ url, body });
                if (isSuccessfulResponse(response)) {
                    if (showSuccessMessage) showSuccessToast(response?.message);
                    if (invalidateQueryKey) {
                        await queryClient.invalidateQueries({ queryKey: invalidateQueryKey });
                    }
                    return { success: true, data: response };
                } else if (response?.message && showErrorMessage) {
                    handleErrorMessage(response);
                }
            }
        } catch (e) {
            if (showErrorMessage) handleErrorMessage(e);
            return { success: false, error: e };
        }
    };

    const handleDeleteAPI = async ({
        url,
        invalidateQueryKey,
        showSuccessMessage = true
    }) => {
        try {
            const response = await deleteMutation.mutateAsync({ url });
            if (isSuccessfulResponse(response)) {
                if (showSuccessMessage) {
                    showSuccessToast(response.message);
                }
                if (invalidateQueryKey) {
                    await queryClient.invalidateQueries({ queryKey: invalidateQueryKey });
                }
                return response;
            } else {
                handleErrorMessage(response);
            }
        } catch (e) {
            handleErrorMessage(e);
        }
    };    

    return {
        getMutation,
        deleteMutation,
        postMutation,
        patchMutation,
        postFormMutation,
        patchFormMutation,
        fetchData,
        usePaginatedQuery,
        handleApiMutation,
        handleDeleteAPI
    };
}