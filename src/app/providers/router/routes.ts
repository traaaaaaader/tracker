import type { RouteRecordRaw } from 'vue-router'

import { Home } from '@/pages/home'
import { TrackCreate } from '@/pages/track-create'
import { TrackRead } from '@/pages/track-read'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/create',
    name: 'create',
    component: TrackCreate,
  },
  {
    path: '/read',
    name: 'read',
    component: TrackRead,
  },
]
