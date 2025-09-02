import type { RouteRecordRaw } from 'vue-router'

import { HomePage } from '@/pages/home'
import { HabitCreatePage } from '@/pages/habit-create'
import { HabitReadPage } from '@/pages/habit-read'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/create',
    name: 'create',
    component: HabitCreatePage,
  },
  {
    path: '/read',
    name: 'read',
    component: HabitReadPage,
  },
]
