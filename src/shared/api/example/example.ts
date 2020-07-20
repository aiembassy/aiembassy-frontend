import createRequest from "@services/ApiService";
import { IExampleRequest } from "@shared/api/example/requests";
import { IExampleResponses } from "@shared/api/example/responses";

export default {
  get: () => createRequest<IExampleResponses>(`/example`),
  getSingle: (id: number) => createRequest<IExampleResponses>(`/example/${id}`),
  create: (data: IExampleRequest) =>
    createRequest<IExampleResponses>(`/example`, "POST", data),
  update: (data: Partial<IExampleRequest>) =>
    createRequest<IExampleResponses>(`/example`, "PATCH", data),
  delete: (id: number) =>
    createRequest<IExampleResponses>(`/example/${id}`, "DELETE"),
};
