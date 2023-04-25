import { EmailSenderServiceInterface } from './types/index'

exports.EmailSenderService = class EmailSenderService implements EmailSenderServiceInterface {
  to: string
  from: string
  subject: string
  content: string

  constructor(to: string, from: string, subject: string, content: string) {
    this.to = to
    this.from = from
    this.subject = subject
    this.content = content
  }

  sendEmail(): string {
    return 'email send'
  }
}