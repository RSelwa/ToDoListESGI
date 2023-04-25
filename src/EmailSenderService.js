exports.EmailSenderService = class EmailSenderService {
  to
  from
  subject
  content

  constructor(to, from, subject, content) {
    this.to = to
    this.from = from
    this.subject = subject
    this.content = content
  }

  sendEmail() {
    return 'email send'
  }
}