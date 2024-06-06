export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, body: any): Promise<T>;
  put(url: string, body: any): Promise<any>;
  patch(url: string, body: any): Promise<any>;
  delete(url: string): Promise<any>;
}
