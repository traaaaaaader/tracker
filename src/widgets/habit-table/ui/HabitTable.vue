<script setup lang="ts">
import { computed, ref } from 'vue'
import { today, getLocalTimeZone, CalendarDate, fromDate } from '@internationalized/date'
import Checkbox from '@/shared/ui/checkbox/Checkbox.vue'

import type { HabitTask } from '@/entities/habit-task'

// defineProps<{
//   habits: HabitTask[]
// }>()

const habits = ref<HabitTask[]>([
  {
    id: '1',
    title: 'Reading',
    startDate: new Date(),
    endDate: new Date(Date.now() + 86400 * 1000 * 30),
    checks: [],
  },
  {
    id: '2',
    title: 'Workout',
    startDate: new Date(),
    endDate: new Date(Date.now() + 86400 * 1000 * 30),
    checks: [],
  },
  {
    id: '3',
    title: 'Drink Water',
    startDate: new Date(),
    endDate: new Date(Date.now() + 86400 * 1000 * 30),
    checks: [],
  },
])

const startDate = ref<CalendarDate>(today(getLocalTimeZone()))

const dates = computed(() => {
  return Array.from({ length: 30 }, (_, i) => startDate.value.add({ days: i }))
})

const shiftLeft = () => {
  startDate.value = startDate.value.add({ days: -1 })
}
const shiftRight = () => {
  startDate.value = startDate.value.add({ days: 1 })
}

const formatDate = (date: CalendarDate) => {
  const dd = String(date.day).padStart(2, '0')
  const mm = String(date.month).padStart(2, '0')
  return `${dd}.${mm}`
}

const checkDate = (habit: HabitTask, date: CalendarDate) => {
  const start = fromDate(habit.startDate, getLocalTimeZone())
  const end = fromDate(habit.endDate, getLocalTimeZone())
  return date.compare(start) >= 0 && date.compare(end) < 0
}
</script>

<template>
  <div class="flex gap-2 mb-4">
    <button @click="shiftLeft" class="p-1 bg-gray-200 rounded"><</button>
    <button @click="shiftRight" class="p-1 bg-gray-200 rounded">></button>
  </div>
  <table>
    <thead>
      <tr class="text-md">
        <th class="border font-bold text-primary text-center p-2">Habits</th>
        <th
          v-for="date in dates"
          :key="date.toString()"
          class="border font-bold text-primary text-center p-2"
        >
          {{ formatDate(date) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="habit in habits" :key="habit.id">
        <td class="border text-foreground p-2">{{ habit.title }}</td>
        <td
          v-for="date in dates"
          :key="date.toString() + habit.id"
          class="border text-foreground text-center p-2"
        >
          <Checkbox
            class="w-6 h-6 data-[state=checked]:bg-chart-1 data-[state=checked]:border-chart-1"
            v-if="checkDate(habit, date)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
