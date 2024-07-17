export interface Choice {
  id: string
  label: string
}
export type QuestionType = 'selective' | 'request' | 'quiz'
export interface Question {
  id: string
  title: string
  type: QuestionType
  multiple: boolean
  correctId?: string
  choices: Choice[]
}

export interface Survey {
  id: string
  title: string
  updateAt: number
  quizMode?: boolean
  questions: Question[]
}
export interface Voter {
  username: string
  timestamp: string
  voted: string[]
}
export interface Answer {
  count: number
}
export interface Winner {
  id: string
  user: Voter
  count: number
}
export interface SurveyResult {
  surveyId: string
  questionId: string
  voters: [string, Voter][]
  answers: [string, Answer][]
}
export interface QuizCorrect {
  surveyId: string
  questionId: string
  correctId: string
}
export interface QuizResult {
  surveyId: string
  questions: {
    question: Question
    winners: [string, Voter][]
    total: number
  }[]
  winners: Winner[]
}
export interface SurveyResults {
  [key: string]: SurveyResult
}
