import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const navigate = (routeName: string, replace?: boolean) => {
    return replace ? history.replace(routeName) : history.push(routeName);
};

export const goBack = () => {
    history.back();
};

export const getQueryParam = (query: string) =>
    new URLSearchParams(history.location.search).get(query);

export default history;
