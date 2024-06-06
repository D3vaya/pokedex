import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('This is an Error- check logs');
    }
  }

  post<T>(url: string, body: any): Promise<T> {
    throw new Error('Method not implemented.');
  }
  put(url: string, body: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  patch(url: string, body: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(url: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
