import BaseService from '@/shared/lib/services/base-service';
import { API_ENDPOINTS } from '@/shared/config/api';

export const tableService = new BaseService(API_ENDPOINTS.table);