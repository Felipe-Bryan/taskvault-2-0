import axios from 'axios';
import UserType from '../types/UserType';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

interface ApiResponse {
  ok: boolean;
  msg: string;
  data?: any;
}

export async function login(props: UserToLogin): Promise<ApiResponse> {
  try {
    const result = await api.post('/user/login', props);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function listTasks(userId: string): Promise<any> {
  try {
    const result = await api.get(`/users/${userId}/tasks`);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function createUser(props: UserType): Promise<UserType> {
  try {
    const result = await api.post(`/users`, props);
    return result.data.data;
  } catch (error: any) {
    return error.response.data;
  }
}
