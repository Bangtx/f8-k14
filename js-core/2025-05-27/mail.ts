enum SendType {
  SMS, MAIL
}

interface MsgService {
  send: () => void
}

interface TestI {
  doTest: () => void
}

class SmsService implements MsgService, TestI {
  send() {
    console.log('send sms')
  }
  doTest() {
    console.log('doTest')
  }
}

class MailService  implements MsgService {
  send() {
    console.log('send mail')
  }
}

class SnsService extends SmsService implements  MsgService, TestI {

}

// dependencies inversion
const onSend = (msgService: MsgService)=> {
  msgService.send()
}

onSend(new SmsService())