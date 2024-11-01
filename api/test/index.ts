import request from '@/utils/request1';

export const requestUploadSplit = (data: any) => {
  //分片前准备接口
  return request.post<any, any>('/sys-file/prepareUpload', data);
};

export const fileHashIsExist = (data: any) => {
  //分片前准备接口
  return request.post<any, any>('/sys-file/prepareUpload', data);
};

export const requestMultiUpload = (data: any) => {
  //分片前准备接口
  return request.post<any, any>('/sys-file/prepareUpload', data);
};
