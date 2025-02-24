export const getAuthToken = () => {
    return localStorage.getItem("token");
};

export const setAuthToken = (token: string) => {
    localStorage.setItem("token", token);
};

export const removeAuthToken = () => {
    localStorage.setItem("token", "");
};

export const checkHasAuthToken = () => {
    const authToken = getAuthToken();
    if (!authToken) return false;
    return true;
};
