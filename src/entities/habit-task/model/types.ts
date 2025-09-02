export interface HabitTask {
  id: string
  title: string
  checks: boolean[]
  startDate: Date
  endDate: Date
  description?: string
}
