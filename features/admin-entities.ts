import { MenuAdminConfig } from './menu/menu.admin-config';
import { registerAdminEntity } from '@/shared/lib/admin/admin-generator';
import { TableAdminConfig } from './table/table.admin-config';
import { SettingsAdminConfig } from './settings/settings.admin-config';
import { ReservationAdminConfig } from './reservation/reservation.admin-config';
import { DashboardAdminConfig } from './dashboard/dashboard.admin-config';

registerAdminEntity('dashboard', DashboardAdminConfig, '/admin/dashboard', '📊');
registerAdminEntity('menu', MenuAdminConfig, '/admin/menu', '🍕');
registerAdminEntity('table',TableAdminConfig, '/admin/table', '🪑') ;
registerAdminEntity('reservation', ReservationAdminConfig, '/admin/reservation', '🛏️');
registerAdminEntity('settings', SettingsAdminConfig, '/admin/settings', '⚙️');